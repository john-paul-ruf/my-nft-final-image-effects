import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {MoonConfig} from './MoonConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class MoonEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-moon';
    static configClass = MoonConfig;

    static presets = [
        {
            name: 'subtle-moon',
            effect: 'instagram-moon',
            percentChance: 100,
            currentEffectConfig: {
                brightnessRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
                brightnessTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(0.95, 0.97), new Range(0.97, 1.0)),
                contrastTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(0.05, 0.1), new Range(0.1, 0.15)),
                saturationTimes: new Range(1, 2),
                sepiaRange: new DynamicRange(new Range(0.15, 0.2), new Range(0.2, 0.25)),
                sepiaTimes: new Range(1, 2),
                grayscale: true,
            }
        },
        {
            name: 'classic-moon',
            effect: 'instagram-moon',
            percentChance: 100,
            currentEffectConfig: {
                brightnessRange: new DynamicRange(new Range(1.35, 1.4), new Range(1.4, 1.45)),
                brightnessTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(0.9, 0.95), new Range(0.95, 1.0)),
                contrastTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(0, 0), new Range(0.02, 0.05)),
                saturationTimes: new Range(1, 3),
                sepiaRange: new DynamicRange(new Range(0.3, 0.35), new Range(0.35, 0.4)),
                sepiaTimes: new Range(1, 3),
                grayscale: true,
            }
        },
        {
            name: 'dramatic-moon',
            effect: 'instagram-moon',
            percentChance: 100,
            currentEffectConfig: {
                brightnessRange: new DynamicRange(new Range(1.5, 1.6), new Range(1.7, 1.8)),
                brightnessTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(0.8, 0.85), new Range(0.85, 0.9)),
                contrastTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(0, 0), new Range(0, 0)),
                saturationTimes: new Range(1, 2),
                sepiaRange: new DynamicRange(new Range(0.4, 0.5), new Range(0.6, 0.7)),
                sepiaTimes: new Range(2, 6),
                grayscale: true,
            }
        }
    ];

    constructor({
                    name = MoonEffect._name_,
                    requiresLayer = true,
                    config = new MoonConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
