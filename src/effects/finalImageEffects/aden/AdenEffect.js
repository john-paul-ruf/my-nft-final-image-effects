import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {AdenConfig} from './AdenConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class AdenEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-aden';
    static configClass = AdenConfig;

    static presets = [
        {
            name: 'subtle-aden',
            effect: 'instagram-aden',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.08, 0.1), new Range(0.1, 0.15)),
                sepiaTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.05, 1.08), new Range(1.08, 1.12)),
                brightnessTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.3)),
                saturationTimes: new Range(1, 2),
                overlayColor: {r: 66, g: 10, b: 14, alpha: 0.1},
                overlayBlend: 'darken',
            }
        },
        {
            name: 'classic-aden',
            effect: 'instagram-aden',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.15, 0.2), new Range(0.2, 0.25)),
                sepiaTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
                brightnessTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.4, 1.5)),
                saturationTimes: new Range(1, 3),
                overlayColor: {r: 66, g: 10, b: 14, alpha: 0.2},
                overlayBlend: 'darken',
            }
        },
        {
            name: 'dramatic-aden',
            effect: 'instagram-aden',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.25, 0.3), new Range(0.35, 0.45)),
                sepiaTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.3, 1.4)),
                brightnessTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(1.5, 1.6), new Range(1.7, 1.8)),
                saturationTimes: new Range(2, 6),
                overlayColor: {r: 66, g: 10, b: 14, alpha: 0.35},
                overlayBlend: 'darken',
            }
        }
    ];

    constructor({
                    name = AdenEffect._name_,
                    requiresLayer = true,
                    config = new AdenConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
