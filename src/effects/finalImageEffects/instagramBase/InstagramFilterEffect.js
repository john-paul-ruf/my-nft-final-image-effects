import {LayerEffect} from 'my-nft-gen/src/core/layer/LayerEffect.js';
import {getRandomIntInclusive, randomNumber, randomId} from 'my-nft-gen/src/core/math/random.js';
import {findValue} from 'my-nft-gen/src/core/math/findValue.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {InstagramFilterConfig} from './InstagramFilterConfig.js';
import sharp from 'sharp';
import {promises as fs} from 'fs';

export class InstagramFilterEffect extends LayerEffect {
    static _name_ = 'instagram-filter-base';
    static configClass = InstagramFilterConfig;

    constructor({
                    name = InstagramFilterEffect._name_,
                    requiresLayer = true,
                    config = new InstagramFilterConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                }) {
        super({
            name,
            requiresLayer,
            config,
            additionalEffects,
            ignoreAdditionalEffects,
            settings,
        });
        this.#generate(settings);
    }

    async #effect(layer, currentFrame, totalFrames) {
        const brightness = findValue(
            this.data.brightnessRange.lower, this.data.brightnessRange.upper,
            this.data.brightnessTimes, totalFrames, currentFrame
        );
        const contrast = findValue(
            this.data.contrastRange.lower, this.data.contrastRange.upper,
            this.data.contrastTimes, totalFrames, currentFrame
        );
        const saturation = findValue(
            this.data.saturationRange.lower, this.data.saturationRange.upper,
            this.data.saturationTimes, totalFrames, currentFrame
        );
        const sepiaAmount = findValue(
            this.data.sepiaRange.lower, this.data.sepiaRange.upper,
            this.data.sepiaTimes, totalFrames, currentFrame
        );

        const needsSharpDirect = sepiaAmount > 0 || this.data.grayscale ||
            this.data.hueRotation !== 0 || this.data.overlayColor ||
            this.data.vignetteColor;

        if (needsSharpDirect) {
            await this.#applySharpPipeline(layer, brightness, contrast, saturation, sepiaAmount);
        } else {
            await layer.modulate({brightness, saturation, contrast});
        }
    }

    async #applySharpPipeline(layer, brightness, contrast, saturation, sepiaAmount) {
        const layerFile = `${this.workingDirectory}ig-src-${randomId()}.png`;
        const outputFile = `${this.workingDirectory}ig-out-${randomId()}.png`;

        await layer.toFile(layerFile);

        let pipeline = sharp(layerFile);

        if (this.data.grayscale) {
            pipeline = pipeline.grayscale();
        }

        const modulateOpts = {};
        if (brightness !== 1) modulateOpts.brightness = brightness;
        if (saturation !== 1) modulateOpts.saturation = saturation;
        if (this.data.hueRotation !== 0) modulateOpts.hue = this.data.hueRotation;

        if (Object.keys(modulateOpts).length > 0) {
            pipeline = pipeline.modulate(modulateOpts);
        }

        if (contrast !== 1) {
            const slope = contrast;
            const intercept = 128 * (1 - contrast);
            pipeline = pipeline.linear(slope, intercept);
        }

        if (sepiaAmount > 0) {
            const s = sepiaAmount;
            const i = 1 - s;
            pipeline = pipeline.recomb([
                [i * 1 + s * 0.393, i * 0 + s * 0.769, i * 0 + s * 0.189],
                [i * 0 + s * 0.349, i * 1 + s * 0.686, i * 0 + s * 0.168],
                [i * 0 + s * 0.272, i * 0 + s * 0.534, i * 1 + s * 0.131],
            ]);
        }

        const compositeOps = [];

        if (this.data.overlayColor) {
            const overlayBuffer = await sharp({
                create: {
                    width: this.finalSize.width,
                    height: this.finalSize.height,
                    channels: 4,
                    background: this.data.overlayColor,
                }
            }).png().toBuffer();

            compositeOps.push({
                input: overlayBuffer,
                blend: this.data.overlayBlend,
            });
        }

        if (this.data.vignetteColor) {
            const vignetteBuffer = await this.#createVignetteBuffer(
                this.finalSize.width, this.finalSize.height,
                this.data.vignetteColor, this.data.vignetteOpacity,
                this.data.vignetteRadius
            );

            compositeOps.push({
                input: vignetteBuffer,
                blend: this.data.vignetteBlend,
            });
        }

        if (compositeOps.length > 0) {
            pipeline = pipeline.composite(compositeOps);
        }

        await pipeline.toFile(outputFile);

        layer.fromFile(outputFile);

        await fs.unlink(layerFile);
        await fs.unlink(outputFile);
    }

    async #createVignetteBuffer(width, height, color, opacity, radius) {
        const cx = width / 2;
        const cy = height / 2;
        const maxR = Math.sqrt(cx * cx + cy * cy);
        const innerR = maxR * radius;

        const r = color.r || 0;
        const g = color.g || 0;
        const b = color.b || 0;

        const buf = Buffer.alloc(width * height * 4);

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const dx = x - cx;
                const dy = y - cy;
                const dist = Math.sqrt(dx * dx + dy * dy);

                let alpha = 0;
                if (dist > innerR) {
                    alpha = Math.min(1, (dist - innerR) / (maxR - innerR));
                    alpha = alpha * alpha;
                }

                const idx = (y * width + x) * 4;
                buf[idx] = r;
                buf[idx + 1] = g;
                buf[idx + 2] = b;
                buf[idx + 3] = Math.round(alpha * opacity * 255);
            }
        }

        return await sharp(buf, {raw: {width, height, channels: 4}}).png().toBuffer();
    }

    #generate(settings) {
        this.data = {
            brightnessRange: {
                lower: randomNumber(this.config.brightnessRange.bottom.lower, this.config.brightnessRange.bottom.upper),
                upper: randomNumber(this.config.brightnessRange.top.lower, this.config.brightnessRange.top.upper),
            },
            brightnessTimes: getRandomIntInclusive(this.config.brightnessTimes.lower, this.config.brightnessTimes.upper),
            contrastRange: {
                lower: randomNumber(this.config.contrastRange.bottom.lower, this.config.contrastRange.bottom.upper),
                upper: randomNumber(this.config.contrastRange.top.lower, this.config.contrastRange.top.upper),
            },
            contrastTimes: getRandomIntInclusive(this.config.contrastTimes.lower, this.config.contrastTimes.upper),
            saturationRange: {
                lower: randomNumber(this.config.saturationRange.bottom.lower, this.config.saturationRange.bottom.upper),
                upper: randomNumber(this.config.saturationRange.top.lower, this.config.saturationRange.top.upper),
            },
            saturationTimes: getRandomIntInclusive(this.config.saturationTimes.lower, this.config.saturationTimes.upper),
            sepiaRange: {
                lower: randomNumber(this.config.sepiaRange.bottom.lower, this.config.sepiaRange.bottom.upper),
                upper: randomNumber(this.config.sepiaRange.top.lower, this.config.sepiaRange.top.upper),
            },
            sepiaTimes: getRandomIntInclusive(this.config.sepiaTimes.lower, this.config.sepiaTimes.upper),
            hueRotation: this.config.hueRotation,
            grayscale: this.config.grayscale,
            overlayColor: this.config.overlayColor,
            overlayOpacity: this.config.overlayOpacity,
            overlayBlend: this.config.overlayBlend,
            vignetteColor: this.config.vignetteColor,
            vignetteOpacity: this.config.vignetteOpacity,
            vignetteBlend: this.config.vignetteBlend,
            vignetteRadius: this.config.vignetteRadius,
        };
    }

    async invoke(layer, currentFrame, numberOfFrames) {
        await this.#effect(layer, currentFrame, numberOfFrames);
        await super.invoke(layer, currentFrame, numberOfFrames);
    }

    getInfo() {
        return `${this.name}: brightness ${this.data.brightnessRange.lower.toFixed(2)}-${this.data.brightnessRange.upper.toFixed(2)}, ` +
            `contrast ${this.data.contrastRange.lower.toFixed(2)}-${this.data.contrastRange.upper.toFixed(2)}, ` +
            `saturation ${this.data.saturationRange.lower.toFixed(2)}-${this.data.saturationRange.upper.toFixed(2)}, ` +
            `sepia ${this.data.sepiaRange.lower.toFixed(2)}-${this.data.sepiaRange.upper.toFixed(2)}`;
    }
}
