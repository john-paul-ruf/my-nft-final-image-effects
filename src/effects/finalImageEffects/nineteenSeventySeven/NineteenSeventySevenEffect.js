import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {NineteenSeventySevenConfig} from './NineteenSeventySevenConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class NineteenSeventySevenEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-1977';
    static configClass = NineteenSeventySevenConfig;

    static presets = [
        {
            name: 'subtle-1977',
            effect: 'instagram-1977',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.25, 0.3), new Range(0.3, 0.35)),
                sepiaTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
                saturationTimes: new Range(1, 2),
                hueRotation: -15,
            }
        },
        {
            name: 'classic-1977',
            effect: 'instagram-1977',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.45, 0.5), new Range(0.5, 0.55)),
                sepiaTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.35, 1.4), new Range(1.4, 1.45)),
                saturationTimes: new Range(1, 3),
                hueRotation: -30,
            }
        },
        {
            name: 'dramatic-1977',
            effect: 'instagram-1977',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.6, 0.7), new Range(0.8, 0.9)),
                sepiaTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(1.5, 1.6), new Range(1.8, 2.0)),
                saturationTimes: new Range(2, 6),
                hueRotation: -45,
            }
        }
    ];

    constructor({
                    name = NineteenSeventySevenEffect._name_,
                    requiresLayer = true,
                    config = new NineteenSeventySevenConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
