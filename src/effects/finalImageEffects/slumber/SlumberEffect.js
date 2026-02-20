import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {SlumberConfig} from './SlumberConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class SlumberEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-slumber';
    static configClass = SlumberConfig;

    static presets = [
        {
            name: 'subtle-slumber',
            effect: 'instagram-slumber',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.15, 0.2), new Range(0.2, 0.25)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.1, 1.12), new Range(1.12, 1.15)),
                contrastTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.1, 1.12), new Range(1.12, 1.15)),
                saturationTimes: new Range(1, 2),
                overlayColor: {r: 125, g: 105, b: 24, alpha: 0.12},
                overlayBlend: 'darken',
            }
        },
        {
            name: 'classic-slumber',
            effect: 'instagram-slumber',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.3, 0.35), new Range(0.35, 0.4)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                contrastTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                saturationTimes: new Range(1, 3),
                overlayColor: {r: 125, g: 105, b: 24, alpha: 0.25},
                overlayBlend: 'darken',
            }
        },
        {
            name: 'dramatic-slumber',
            effect: 'instagram-slumber',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.4, 0.5), new Range(0.55, 0.65)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                contrastTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                saturationTimes: new Range(2, 6),
                overlayColor: {r: 125, g: 105, b: 24, alpha: 0.4},
                overlayBlend: 'darken',
            }
        }
    ];

    constructor({
                    name = SlumberEffect._name_,
                    requiresLayer = true,
                    config = new SlumberConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
