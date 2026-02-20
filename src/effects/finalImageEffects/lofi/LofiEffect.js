import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {LofiConfig} from './LofiConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class LofiEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-lofi';
    static configClass = LofiConfig;

    static presets = [
        {
            name: 'subtle-lofi',
            effect: 'instagram-lofi',
            percentChance: 100,
            currentEffectConfig: {
                saturationRange: new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)),
                saturationTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.1, 1.2), new Range(1.2, 1.3)),
                contrastTimes: new Range(1, 2),
            }
        },
        {
            name: 'classic-lofi',
            effect: 'instagram-lofi',
            percentChance: 100,
            currentEffectConfig: {
                saturationRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
                saturationTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.3, 1.5), new Range(1.5, 1.6)),
                contrastTimes: new Range(1, 3),
            }
        },
        {
            name: 'dramatic-lofi',
            effect: 'instagram-lofi',
            percentChance: 100,
            currentEffectConfig: {
                saturationRange: new DynamicRange(new Range(1.1, 1.2), new Range(1.3, 1.5)),
                saturationTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.5, 1.7), new Range(1.8, 2.0)),
                contrastTimes: new Range(2, 6),
            }
        }
    ];

    constructor({
                    name = LofiEffect._name_,
                    requiresLayer = true,
                    config = new LofiConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
