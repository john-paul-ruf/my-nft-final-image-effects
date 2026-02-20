import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {AshbyConfig} from './AshbyConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class AshbyEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-ashby';
    static configClass = AshbyConfig;

    static presets = [
        {
            name: 'subtle-ashby',
            effect: 'instagram-ashby',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.25, 0.3), new Range(0.3, 0.35)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.08, 1.1), new Range(1.1, 1.12)),
                contrastTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.4, 1.5), new Range(1.5, 1.6)),
                saturationTimes: new Range(1, 2),
                overlayColor: {r: 125, g: 105, b: 24, alpha: 0.12},
                overlayBlend: 'lighten',
            }
        },
        {
            name: 'classic-ashby',
            effect: 'instagram-ashby',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.45, 0.5), new Range(0.5, 0.55)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
                contrastTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.7, 1.8), new Range(1.8, 1.9)),
                saturationTimes: new Range(1, 3),
                overlayColor: {r: 125, g: 105, b: 24, alpha: 0.25},
                overlayBlend: 'lighten',
            }
        },
        {
            name: 'dramatic-ashby',
            effect: 'instagram-ashby',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.6, 0.65), new Range(0.7, 0.8)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.25, 1.3), new Range(1.4, 1.5)),
                contrastTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(2.0, 2.2), new Range(2.3, 2.5)),
                saturationTimes: new Range(2, 6),
                overlayColor: {r: 125, g: 105, b: 24, alpha: 0.4},
                overlayBlend: 'lighten',
            }
        }
    ];

    constructor({
                    name = AshbyEffect._name_,
                    requiresLayer = true,
                    config = new AshbyConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
