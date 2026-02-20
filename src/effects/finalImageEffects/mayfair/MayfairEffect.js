import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {MayfairConfig} from './MayfairConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class MayfairEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-mayfair';
    static configClass = MayfairConfig;

    static presets = [
        {
            name: 'subtle-mayfair',
            effect: 'instagram-mayfair',
            percentChance: 100,
            currentEffectConfig: {
                contrastRange: new DynamicRange(new Range(1.02, 1.05), new Range(1.05, 1.08)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.05, 1.08), new Range(1.08, 1.1)),
                brightnessTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.02, 1.05), new Range(1.05, 1.08)),
                saturationTimes: new Range(1, 2),
                vignetteColor: {r: 175, g: 105, b: 24},
                vignetteOpacity: 0.2,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.5,
            }
        },
        {
            name: 'classic-mayfair',
            effect: 'instagram-mayfair',
            percentChance: 100,
            currentEffectConfig: {
                contrastRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
                brightnessTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
                saturationTimes: new Range(1, 3),
                vignetteColor: {r: 175, g: 105, b: 24},
                vignetteOpacity: 0.4,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.4,
            }
        },
        {
            name: 'dramatic-mayfair',
            effect: 'instagram-mayfair',
            percentChance: 100,
            currentEffectConfig: {
                contrastRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.2, 1.25)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.3, 1.4)),
                brightnessTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.2, 1.25)),
                saturationTimes: new Range(2, 6),
                vignetteColor: {r: 175, g: 105, b: 24},
                vignetteOpacity: 0.6,
                vignetteBlend: 'multiply',
                vignetteRadius: 0.3,
            }
        }
    ];

    constructor({
                    name = MayfairEffect._name_,
                    requiresLayer = true,
                    config = new MayfairConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
