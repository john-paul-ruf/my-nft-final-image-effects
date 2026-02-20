import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {JunoConfig} from './JunoConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class JunoEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-juno';
    static configClass = JunoConfig;

    static presets = [
        {
            name: 'subtle-juno',
            effect: 'instagram-juno',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.15, 0.2), new Range(0.2, 0.25)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.05, 1.08), new Range(1.08, 1.1)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.05, 1.08), new Range(1.08, 1.1)),
                brightnessTimes: new Range(1, 2),
                saturationRange: new DynamicRange(new Range(1.4, 1.5), new Range(1.5, 1.6)),
                saturationTimes: new Range(1, 2),
                overlayColor: {r: 89, g: 131, b: 175, alpha: 0.1},
                overlayBlend: 'overlay',
            }
        },
        {
            name: 'classic-juno',
            effect: 'instagram-juno',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.3, 0.35), new Range(0.35, 0.4)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
                brightnessTimes: new Range(1, 3),
                saturationRange: new DynamicRange(new Range(1.7, 1.8), new Range(1.8, 1.9)),
                saturationTimes: new Range(1, 3),
                overlayColor: {r: 89, g: 131, b: 175, alpha: 0.2},
                overlayBlend: 'overlay',
            }
        },
        {
            name: 'dramatic-juno',
            effect: 'instagram-juno',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.4, 0.5), new Range(0.55, 0.65)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.3, 1.4)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.3, 1.4)),
                brightnessTimes: new Range(2, 6),
                saturationRange: new DynamicRange(new Range(2.0, 2.2), new Range(2.3, 2.5)),
                saturationTimes: new Range(2, 6),
                overlayColor: {r: 89, g: 131, b: 175, alpha: 0.35},
                overlayBlend: 'overlay',
            }
        }
    ];

    constructor({
                    name = JunoEffect._name_,
                    requiresLayer = true,
                    config = new JunoConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
