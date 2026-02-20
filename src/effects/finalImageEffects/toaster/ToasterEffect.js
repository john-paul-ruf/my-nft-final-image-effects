import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {ToasterConfig} from './ToasterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class ToasterEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-toaster';
    static configClass = ToasterConfig;

    static presets = [
        {
            name: 'subtle-toaster',
            effect: 'instagram-toaster',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.1, 0.12), new Range(0.12, 0.15)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(0.95, 0.97), new Range(0.97, 1.0)),
                brightnessTimes: new Range(1, 2),
                hueRotation: -8,
                vignetteColor: {r: 128, g: 78, b: 15},
                vignetteOpacity: 0.25,
                vignetteBlend: 'screen',
                vignetteRadius: 0.45,
            }
        },
        {
            name: 'classic-toaster',
            effect: 'instagram-toaster',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.4, 1.5), new Range(1.5, 1.6)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(0.9, 0.95), new Range(0.95, 1.0)),
                brightnessTimes: new Range(1, 3),
                hueRotation: -15,
                vignetteColor: {r: 128, g: 78, b: 15},
                vignetteOpacity: 0.5,
                vignetteBlend: 'screen',
                vignetteRadius: 0.3,
            }
        },
        {
            name: 'dramatic-toaster',
            effect: 'instagram-toaster',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.3, 0.35), new Range(0.4, 0.5)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.6, 1.7), new Range(1.8, 2.0)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(0.8, 0.85), new Range(0.85, 0.9)),
                brightnessTimes: new Range(2, 6),
                hueRotation: -20,
                vignetteColor: {r: 128, g: 78, b: 15},
                vignetteOpacity: 0.7,
                vignetteBlend: 'screen',
                vignetteRadius: 0.2,
            }
        }
    ];

    constructor({
                    name = ToasterEffect._name_,
                    requiresLayer = true,
                    config = new ToasterConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
