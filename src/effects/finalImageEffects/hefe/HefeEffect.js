import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {HefeConfig} from './HefeConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class HefeEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-hefe';
    static configClass = HefeConfig;

    static presets = [
        {
            name: 'subtle-hefe',
            effect: 'instagram-hefe',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.18, 0.2), new Range(0.2, 0.25)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.08, 1.1), new Range(1.1, 1.15)),
                brightnessTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
                saturationTimes: new Range(1, 2),
                hueRotation: -5,
                vignetteColor: {r: 20, g: 15, b: 10},
                vignetteOpacity: 0.3,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.45,
            }
        },
        {
            name: 'classic-hefe',
            effect: 'instagram-hefe',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.35, 0.4), new Range(0.4, 0.45)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.4, 1.5), new Range(1.5, 1.6)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
                brightnessTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.4, 1.5)),
                saturationTimes: new Range(1, 3),
                hueRotation: -10,
                vignetteColor: {r: 20, g: 15, b: 10},
                vignetteOpacity: 0.6,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.3,
            }
        },
        {
            name: 'dramatic-hefe',
            effect: 'instagram-hefe',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.5, 0.55), new Range(0.6, 0.7)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.6, 1.7), new Range(1.8, 2.0)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.3, 1.4)),
                brightnessTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(1.5, 1.6), new Range(1.7, 1.8)),
                saturationTimes: new Range(2, 6),
                hueRotation: -15,
                vignetteColor: {r: 20, g: 15, b: 10},
                vignetteOpacity: 0.8,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.2,
            }
        }
    ];

    constructor({
                    name = HefeEffect._name_,
                    requiresLayer = true,
                    config = new HefeConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
