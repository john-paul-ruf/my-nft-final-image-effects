import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {StinsonConfig} from './StinsonConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class StinsonEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-stinson';
    static configClass = StinsonConfig;

    static presets = [
        {
            name: 'subtle-stinson',
            effect: 'instagram-stinson',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.15, 0.2), new Range(0.2, 0.25)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.1, 1.12), new Range(1.12, 1.15)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.02, 1.05), new Range(1.05, 1.08)),
                brightnessTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.1, 1.12), new Range(1.12, 1.15)),
                saturationTimes: new Range(1, 2),
                overlayColor: {r: 240, g: 149, b: 128, alpha: 0.1},
                overlayBlend: 'lighten',
            }
        },
        {
            name: 'classic-stinson',
            effect: 'instagram-stinson',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.3, 0.35), new Range(0.35, 0.4)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
                brightnessTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                saturationTimes: new Range(1, 3),
                overlayColor: {r: 240, g: 149, b: 128, alpha: 0.2},
                overlayBlend: 'lighten',
            }
        },
        {
            name: 'dramatic-stinson',
            effect: 'instagram-stinson',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.4, 0.5), new Range(0.55, 0.65)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.2, 1.25)),
                brightnessTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                saturationTimes: new Range(2, 6),
                overlayColor: {r: 240, g: 149, b: 128, alpha: 0.35},
                overlayBlend: 'lighten',
            }
        }
    ];

    constructor({
                    name = StinsonEffect._name_,
                    requiresLayer = true,
                    config = new StinsonConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
