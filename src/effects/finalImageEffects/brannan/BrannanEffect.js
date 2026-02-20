import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {BrannanConfig} from './BrannanConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class BrannanEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-brannan';
    static configClass = BrannanConfig;

    static presets = [
        {
            name: 'subtle-brannan',
            effect: 'instagram-brannan',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.02, 1.05), new Range(1.05, 1.08)),
                brightnessTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(0.9, 0.95), new Range(0.95, 1.0)),
                saturationTimes: new Range(1, 2),
                hueRotation: -1,
            }
        },
        {
            name: 'classic-brannan',
            effect: 'instagram-brannan',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.35, 0.4), new Range(0.4, 0.45)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
                brightnessTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(0.85, 0.9), new Range(0.9, 0.95)),
                saturationTimes: new Range(1, 3),
                hueRotation: -2,
            }
        },
        {
            name: 'dramatic-brannan',
            effect: 'instagram-brannan',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.5, 0.6), new Range(0.7, 0.8)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.1, 1.2), new Range(1.3, 1.4)),
                brightnessTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(0.7, 0.8), new Range(0.8, 0.85)),
                saturationTimes: new Range(2, 6),
                hueRotation: -5,
            }
        }
    ];

    constructor({
                    name = BrannanEffect._name_,
                    requiresLayer = true,
                    config = new BrannanConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
