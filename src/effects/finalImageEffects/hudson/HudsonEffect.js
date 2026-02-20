import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {HudsonConfig} from './HudsonConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class HudsonEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-hudson';
    static configClass = HudsonConfig;

    static presets = [
        {
            name: 'subtle-hudson',
            effect: 'instagram-hudson',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.1, 0.12), new Range(0.12, 0.15)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.08, 1.1), new Range(1.1, 1.12)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.08, 1.1), new Range(1.1, 1.12)),
                brightnessTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.0, 1.02), new Range(1.02, 1.05)),
                saturationTimes: new Range(1, 2),
                hueRotation: -8,
                vignetteColor: {r: 80, g: 120, b: 180},
                vignetteOpacity: 0.2,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.5,
            }
        },
        {
            name: 'classic-hudson',
            effect: 'instagram-hudson',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
                brightnessTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)),
                saturationTimes: new Range(1, 3),
                hueRotation: -15,
                vignetteColor: {r: 80, g: 120, b: 180},
                vignetteOpacity: 0.4,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.4,
            }
        },
        {
            name: 'dramatic-hudson',
            effect: 'instagram-hudson',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.3, 0.35), new Range(0.4, 0.5)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.25, 1.3), new Range(1.4, 1.5)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.25, 1.3), new Range(1.4, 1.5)),
                brightnessTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.15, 1.2)),
                saturationTimes: new Range(2, 6),
                hueRotation: -20,
                vignetteColor: {r: 80, g: 120, b: 180},
                vignetteOpacity: 0.6,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.3,
            }
        }
    ];

    constructor({
                    name = HudsonEffect._name_,
                    requiresLayer = true,
                    config = new HudsonConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
