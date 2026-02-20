import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {WillowConfig} from './WillowConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class WillowEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-willow';
    static configClass = WillowConfig;

    static presets = [
        {
            name: 'subtle-willow',
            effect: 'instagram-willow',
            percentChance: 100,
            currentEffectConfig: {
                brightnessRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
                brightnessTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(0.88, 0.9), new Range(0.9, 0.92)),
                contrastTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(0.1, 0.15), new Range(0.15, 0.2)),
                saturationTimes: new Range(1, 2),
                sepiaRange: new DynamicRange(new Range(0.1, 0.12), new Range(0.12, 0.15)),
                sepiaTimes: new Range(1, 2),
            }
        },
        {
            name: 'classic-willow',
            effect: 'instagram-willow',
            percentChance: 100,
            currentEffectConfig: {
                brightnessRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
                brightnessTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(0.82, 0.85), new Range(0.85, 0.88)),
                contrastTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(0.03, 0.05), new Range(0.05, 0.08)),
                saturationTimes: new Range(1, 3),
                sepiaRange: new DynamicRange(new Range(0.18, 0.2), new Range(0.2, 0.22)),
                sepiaTimes: new Range(1, 3),
            }
        },
        {
            name: 'dramatic-willow',
            effect: 'instagram-willow',
            percentChance: 100,
            currentEffectConfig: {
                brightnessRange: new DynamicRange(new Range(1.25, 1.35), new Range(1.4, 1.5)),
                brightnessTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(0.7, 0.75), new Range(0.75, 0.8)),
                contrastTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(0, 0.02), new Range(0.02, 0.05)),
                saturationTimes: new Range(1, 3),
                sepiaRange: new DynamicRange(new Range(0.25, 0.3), new Range(0.35, 0.4)),
                sepiaTimes: new Range(2, 6),
            }
        }
    ];

    constructor({
                    name = WillowEffect._name_,
                    requiresLayer = true,
                    config = new WillowConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
