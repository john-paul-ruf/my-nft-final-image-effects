import {EffectConfig} from 'my-nft-gen/src/core/layer/EffectConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class InstagramFilterConfig extends EffectConfig {
    constructor(
        {
            brightnessRange = new DynamicRange(new Range(1, 1), new Range(1, 1)),
            brightnessTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1, 1), new Range(1, 1)),
            contrastTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1, 1), new Range(1, 1)),
            saturationTimes = new Range(1, 3),
            sepiaRange = new DynamicRange(new Range(0, 0), new Range(0, 0)),
            sepiaTimes = new Range(1, 3),
            hueRotation = 0,
            grayscale = false,
            overlayColor = null,
            overlayOpacity = 0,
            overlayBlend = 'over',
            vignetteColor = null,
            vignetteOpacity = 0,
            vignetteBlend = 'multiply',
            vignetteRadius = 0.7,
        },
    ) {
        super();
        this.brightnessRange = brightnessRange;
        this.brightnessTimes = brightnessTimes;
        this.contrastRange = contrastRange;
        this.contrastTimes = contrastTimes;
        this.saturationRange = saturationRange;
        this.saturationTimes = saturationTimes;
        this.sepiaRange = sepiaRange;
        this.sepiaTimes = sepiaTimes;
        this.hueRotation = hueRotation;
        this.grayscale = grayscale;
        this.overlayColor = overlayColor;
        this.overlayOpacity = overlayOpacity;
        this.overlayBlend = overlayBlend;
        this.vignetteColor = vignetteColor;
        this.vignetteOpacity = vignetteOpacity;
        this.vignetteBlend = vignetteBlend;
        this.vignetteRadius = vignetteRadius;
    }
}
