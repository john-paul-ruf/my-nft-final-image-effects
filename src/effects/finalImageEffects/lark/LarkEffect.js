import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {LarkConfig} from './LarkConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class LarkEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-lark';
    static configClass = LarkConfig;

    static presets = [
        {
            name: 'subtle-lark',
            effect: 'instagram-lark',
            percentChance: 100,
            currentEffectConfig: {
                brightnessRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.2, 1.25)),
                brightnessTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
                contrastTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
                saturationTimes: new Range(1, 2),
                sepiaRange: new DynamicRange(new Range(0.1, 0.15), new Range(0.15, 0.2)),
                sepiaTimes: new Range(1, 2),
            }
        },
        {
            name: 'classic-lark',
            effect: 'instagram-lark',
            percentChance: 100,
            currentEffectConfig: {
                brightnessRange: new DynamicRange(new Range(1.25, 1.3), new Range(1.3, 1.35)),
                brightnessTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
                contrastTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                saturationTimes: new Range(1, 3),
                sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)),
                sepiaTimes: new Range(1, 3),
            }
        },
        {
            name: 'dramatic-lark',
            effect: 'instagram-lark',
            percentChance: 100,
            currentEffectConfig: {
                brightnessRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                brightnessTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.2, 1.3), new Range(1.4, 1.5)),
                contrastTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                saturationTimes: new Range(2, 6),
                sepiaRange: new DynamicRange(new Range(0.3, 0.4), new Range(0.5, 0.6)),
                sepiaTimes: new Range(2, 6),
            }
        }
    ];

    constructor({
                    name = LarkEffect._name_,
                    requiresLayer = true,
                    config = new LarkConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
