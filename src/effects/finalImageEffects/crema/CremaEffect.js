import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {CremaConfig} from './CremaConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class CremaEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-crema';
    static configClass = CremaConfig;

    static presets = [
        {
            name: 'subtle-crema',
            effect: 'instagram-crema',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.25, 0.3), new Range(0.3, 0.35)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.1, 1.12), new Range(1.12, 1.15)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.05, 1.08), new Range(1.08, 1.1)),
                brightnessTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(0.92, 0.95), new Range(0.95, 0.98)),
                saturationTimes: new Range(1, 2),
                hueRotation: -1,
                overlayColor: {r: 125, g: 105, b: 24, alpha: 0.08},
                overlayBlend: 'multiply',
            }
        },
        {
            name: 'classic-crema',
            effect: 'instagram-crema',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.45, 0.5), new Range(0.5, 0.55)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
                brightnessTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(0.85, 0.9), new Range(0.9, 0.95)),
                saturationTimes: new Range(1, 3),
                hueRotation: -2,
                overlayColor: {r: 125, g: 105, b: 24, alpha: 0.15},
                overlayBlend: 'multiply',
            }
        },
        {
            name: 'dramatic-crema',
            effect: 'instagram-crema',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.6, 0.65), new Range(0.7, 0.8)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.25, 1.3)),
                brightnessTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(0.7, 0.8), new Range(0.8, 0.85)),
                saturationTimes: new Range(2, 6),
                hueRotation: -4,
                overlayColor: {r: 125, g: 105, b: 24, alpha: 0.25},
                overlayBlend: 'multiply',
            }
        }
    ];

    constructor({
                    name = CremaEffect._name_,
                    requiresLayer = true,
                    config = new CremaConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
