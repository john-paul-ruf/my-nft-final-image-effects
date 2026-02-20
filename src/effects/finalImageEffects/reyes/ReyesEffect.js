import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {ReyesConfig} from './ReyesConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class ReyesEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-reyes';
    static configClass = ReyesConfig;

    static presets = [
        {
            name: 'subtle-reyes',
            effect: 'instagram-reyes',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.4, 0.5), new Range(0.5, 0.6)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(0.8, 0.85), new Range(0.85, 0.9)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
                brightnessTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                saturationTimes: new Range(1, 2),
            }
        },
        {
            name: 'classic-reyes',
            effect: 'instagram-reyes',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.7, 0.75), new Range(0.75, 0.8)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(0.7, 0.75), new Range(0.75, 0.8)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                brightnessTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.35, 1.4), new Range(1.4, 1.45)),
                saturationTimes: new Range(1, 3),
            }
        },
        {
            name: 'dramatic-reyes',
            effect: 'instagram-reyes',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.8, 0.9), new Range(0.9, 1.0)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(0.6, 0.65), new Range(0.65, 0.7)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                brightnessTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(1.5, 1.6), new Range(1.7, 1.8)),
                saturationTimes: new Range(2, 6),
            }
        }
    ];

    constructor({
                    name = ReyesEffect._name_,
                    requiresLayer = true,
                    config = new ReyesConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
