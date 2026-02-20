import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {InkwellConfig} from './InkwellConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class InkwellEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-inkwell';
    static configClass = InkwellConfig;

    static presets = [
        {
            name: 'subtle-inkwell',
            effect: 'instagram-inkwell',
            percentChance: 100,
            currentEffectConfig: {
                brightnessRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
                brightnessTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(0.9, 0.92), new Range(0.92, 0.95)),
                contrastTimes: new Range(1, 2),
                grayscale: true,
            }
        },
        {
            name: 'classic-inkwell',
            effect: 'instagram-inkwell',
            percentChance: 100,
            currentEffectConfig: {
                brightnessRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                brightnessTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(0.82, 0.85), new Range(0.85, 0.88)),
                contrastTimes: new Range(1, 3),
                grayscale: true,
            }
        },
        {
            name: 'dramatic-inkwell',
            effect: 'instagram-inkwell',
            percentChance: 100,
            currentEffectConfig: {
                brightnessRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                brightnessTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(0.7, 0.75), new Range(0.75, 0.8)),
                contrastTimes: new Range(2, 6),
                grayscale: true,
            }
        }
    ];

    constructor({
                    name = InkwellEffect._name_,
                    requiresLayer = true,
                    config = new InkwellConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
