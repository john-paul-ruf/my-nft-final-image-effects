import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {XproIIConfig} from './XproIIConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class XproIIEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-xpro-ii';
    static configClass = XproIIConfig;

    static presets = [
        {
            name: 'subtle-xpro-ii',
            effect: 'instagram-xpro-ii',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.1, 1.12), new Range(1.12, 1.15)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.35, 1.4), new Range(1.4, 1.5)),
                brightnessTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.12, 1.15), new Range(1.15, 1.2)),
                saturationTimes: new Range(1, 2),
                hueRotation: -3,
                vignetteColor: {r: 60, g: 90, b: 160},
                vignetteOpacity: 0.25,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.5,
            }
        },
        {
            name: 'classic-xpro-ii',
            effect: 'instagram-xpro-ii',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.4, 0.45), new Range(0.45, 0.5)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.65, 1.75), new Range(1.75, 1.85)),
                brightnessTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.25, 1.3), new Range(1.3, 1.35)),
                saturationTimes: new Range(1, 3),
                hueRotation: -5,
                vignetteColor: {r: 60, g: 90, b: 160},
                vignetteOpacity: 0.5,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.35,
            }
        },
        {
            name: 'dramatic-xpro-ii',
            effect: 'instagram-xpro-ii',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.55, 0.6), new Range(0.65, 0.75)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.85, 2.0), new Range(2.0, 2.2)),
                brightnessTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(1.4, 1.5), new Range(1.6, 1.7)),
                saturationTimes: new Range(2, 6),
                hueRotation: -8,
                vignetteColor: {r: 60, g: 90, b: 160},
                vignetteOpacity: 0.7,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.25,
            }
        }
    ];

    constructor({
                    name = XproIIEffect._name_,
                    requiresLayer = true,
                    config = new XproIIConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
