import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {SutroConfig} from './SutroConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class SutroEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-sutro';
    static configClass = SutroConfig;

    static presets = [
        {
            name: 'subtle-sutro',
            effect: 'instagram-sutro',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.18, 0.2), new Range(0.2, 0.25)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.08, 1.1), new Range(1.1, 1.12)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(0.92, 0.95), new Range(0.95, 0.98)),
                brightnessTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
                saturationTimes: new Range(1, 2),
                hueRotation: -5,
                vignetteColor: {r: 15, g: 10, b: 5},
                vignetteOpacity: 0.35,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.45,
            }
        },
        {
            name: 'classic-sutro',
            effect: 'instagram-sutro',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.35, 0.4), new Range(0.4, 0.45)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(0.85, 0.9), new Range(0.9, 0.95)),
                brightnessTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.4, 1.5)),
                saturationTimes: new Range(1, 3),
                hueRotation: -10,
                vignetteColor: {r: 15, g: 10, b: 5},
                vignetteOpacity: 0.65,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.3,
            }
        },
        {
            name: 'dramatic-sutro',
            effect: 'instagram-sutro',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.5, 0.55), new Range(0.6, 0.7)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.25, 1.3), new Range(1.4, 1.5)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(0.75, 0.8), new Range(0.8, 0.85)),
                brightnessTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(1.5, 1.6), new Range(1.7, 1.8)),
                saturationTimes: new Range(2, 6),
                hueRotation: -15,
                vignetteColor: {r: 15, g: 10, b: 5},
                vignetteOpacity: 0.85,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.2,
            }
        }
    ];

    constructor({
                    name = SutroEffect._name_,
                    requiresLayer = true,
                    config = new SutroConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
