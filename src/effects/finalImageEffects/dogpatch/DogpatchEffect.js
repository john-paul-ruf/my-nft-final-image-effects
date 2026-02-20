import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {DogpatchConfig} from './DogpatchConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class DogpatchEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-dogpatch';
    static configClass = DogpatchConfig;

    static presets = [
        {
            name: 'subtle-dogpatch',
            effect: 'instagram-dogpatch',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.15, 0.2), new Range(0.2, 0.25)),
                sepiaTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)),
                saturationTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.2, 1.3), new Range(1.3, 1.4)),
                contrastTimes: new Range(1, 2),
            }
        },
        {
            name: 'classic-dogpatch',
            effect: 'instagram-dogpatch',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.3, 0.35), new Range(0.35, 0.4)),
                sepiaTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
                saturationTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.4, 1.5), new Range(1.5, 1.6)),
                contrastTimes: new Range(1, 3),
            }
        },
        {
            name: 'dramatic-dogpatch',
            effect: 'instagram-dogpatch',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.4, 0.5), new Range(0.6, 0.7)),
                sepiaTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(1.1, 1.2), new Range(1.3, 1.5)),
                saturationTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.5, 1.7), new Range(1.8, 2.0)),
                contrastTimes: new Range(2, 6),
            }
        }
    ];

    constructor({
                    name = DogpatchEffect._name_,
                    requiresLayer = true,
                    config = new DogpatchConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
