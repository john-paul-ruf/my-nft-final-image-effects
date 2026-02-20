import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {EarlybirdConfig} from './EarlybirdConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class EarlybirdEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-earlybird';
    static configClass = EarlybirdConfig;

    static presets = [
        {
            name: 'subtle-earlybird',
            effect: 'instagram-earlybird',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.1, 0.12), new Range(0.12, 0.15)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.1, 1.12), new Range(1.12, 1.15)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.05, 1.08), new Range(1.08, 1.1)),
                brightnessTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(0.9, 0.95), new Range(0.95, 1.0)),
                saturationTimes: new Range(1, 2),
                hueRotation: -3,
                vignetteColor: {r: 50, g: 30, b: 10},
                vignetteOpacity: 0.25,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.5,
            }
        },
        {
            name: 'classic-earlybird',
            effect: 'instagram-earlybird',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
                brightnessTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(0.85, 0.9), new Range(0.9, 0.95)),
                saturationTimes: new Range(1, 3),
                hueRotation: -5,
                vignetteColor: {r: 50, g: 30, b: 10},
                vignetteOpacity: 0.5,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.35,
            }
        },
        {
            name: 'dramatic-earlybird',
            effect: 'instagram-earlybird',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.3, 0.4), new Range(0.45, 0.55)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.25, 1.35)),
                brightnessTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(0.7, 0.8), new Range(0.8, 0.85)),
                saturationTimes: new Range(2, 6),
                hueRotation: -8,
                vignetteColor: {r: 50, g: 30, b: 10},
                vignetteOpacity: 0.7,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.25,
            }
        }
    ];

    constructor({
                    name = EarlybirdEffect._name_,
                    requiresLayer = true,
                    config = new EarlybirdConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
