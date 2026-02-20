import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {SkylineConfig} from './SkylineConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class SkylineEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-skyline';
    static configClass = SkylineConfig;

    static presets = [
        {
            name: 'subtle-skyline',
            effect: 'instagram-skyline',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.05, 0.1), new Range(0.1, 0.12)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
                brightnessTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
                saturationTimes: new Range(1, 2),
            }
        },
        {
            name: 'classic-skyline',
            effect: 'instagram-skyline',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.12, 0.15), new Range(0.15, 0.18)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                brightnessTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
                saturationTimes: new Range(1, 3),
            }
        },
        {
            name: 'dramatic-skyline',
            effect: 'instagram-skyline',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.2, 0.3), new Range(0.3, 0.4)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                brightnessTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(1.2, 1.3), new Range(1.4, 1.5)),
                saturationTimes: new Range(2, 6),
            }
        }
    ];

    constructor({
                    name = SkylineEffect._name_,
                    requiresLayer = true,
                    config = new SkylineConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
