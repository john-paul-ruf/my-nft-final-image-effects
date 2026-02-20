import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {NashvilleConfig} from './NashvilleConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class NashvilleEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-nashville';
    static configClass = NashvilleConfig;

    static presets = [
        {
            name: 'subtle-nashville',
            effect: 'instagram-nashville',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.1, 0.15), new Range(0.15, 0.2)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.2, 1.3), new Range(1.3, 1.4)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(0.9, 0.95), new Range(0.95, 1.0)),
                brightnessTimes: new Range(1, 2),
                hueRotation: -8,
                vignetteColor: {r: 128, g: 78, b: 15},
                vignetteOpacity: 0.3,
                vignetteBlend: 'screen',
                vignetteRadius: 0.4,
            }
        },
        {
            name: 'classic-nashville',
            effect: 'instagram-nashville',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.4, 1.5), new Range(1.5, 1.6)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(0.85, 0.9), new Range(0.9, 0.95)),
                brightnessTimes: new Range(1, 3),
                hueRotation: -15,
                vignetteColor: {r: 128, g: 78, b: 15},
                vignetteOpacity: 0.6,
                vignetteBlend: 'screen',
                vignetteRadius: 0.3,
            }
        },
        {
            name: 'dramatic-nashville',
            effect: 'instagram-nashville',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.3, 0.4), new Range(0.5, 0.6)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.6, 1.8), new Range(1.8, 2.0)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(0.75, 0.8), new Range(0.8, 0.85)),
                brightnessTimes: new Range(2, 6),
                hueRotation: -25,
                vignetteColor: {r: 128, g: 78, b: 15},
                vignetteOpacity: 0.8,
                vignetteBlend: 'screen',
                vignetteRadius: 0.2,
            }
        }
    ];

    constructor({
                    name = NashvilleEffect._name_,
                    requiresLayer = true,
                    config = new NashvilleConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
