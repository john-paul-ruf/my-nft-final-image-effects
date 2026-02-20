import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {KelvinConfig} from './KelvinConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class KelvinEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-kelvin';
    static configClass = KelvinConfig;

    static presets = [
        {
            name: 'subtle-kelvin',
            effect: 'instagram-kelvin',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.05, 0.08), new Range(0.08, 0.1)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.02, 1.05), new Range(1.05, 1.08)),
                brightnessTimes: new Range(1, 2),
                hueRotation: -5,
                vignetteColor: {r: 190, g: 120, b: 20},
                vignetteOpacity: 0.25,
                vignetteBlend: 'screen',
                vignetteRadius: 0.5,
            }
        },
        {
            name: 'classic-kelvin',
            effect: 'instagram-kelvin',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.1, 0.15), new Range(0.15, 0.2)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.4, 1.5), new Range(1.5, 1.6)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
                brightnessTimes: new Range(1, 3),
                hueRotation: -10,
                vignetteColor: {r: 190, g: 120, b: 20},
                vignetteOpacity: 0.5,
                vignetteBlend: 'screen',
                vignetteRadius: 0.35,
            }
        },
        {
            name: 'dramatic-kelvin',
            effect: 'instagram-kelvin',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.3, 0.35)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.6, 1.7), new Range(1.8, 2.0)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.2, 1.25)),
                brightnessTimes: new Range(2, 6),
                hueRotation: -15,
                vignetteColor: {r: 190, g: 120, b: 20},
                vignetteOpacity: 0.7,
                vignetteBlend: 'screen',
                vignetteRadius: 0.25,
            }
        }
    ];

    constructor({
                    name = KelvinEffect._name_,
                    requiresLayer = true,
                    config = new KelvinConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
