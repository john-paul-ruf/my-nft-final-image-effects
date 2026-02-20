import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {ValenciaConfig} from './ValenciaConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class ValenciaEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-valencia';
    static configClass = ValenciaConfig;

    static presets = [
        {
            name: 'subtle-valencia',
            effect: 'instagram-valencia',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.1, 0.12), new Range(0.12, 0.15)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.02, 1.05), new Range(1.05, 1.08)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.02, 1.05), new Range(1.05, 1.08)),
                brightnessTimes: new Range(1, 2),
                overlayColor: {r: 58, g: 3, b: 3, alpha: 0.1},
                overlayBlend: 'lighten',
            }
        },
        {
            name: 'classic-valencia',
            effect: 'instagram-valencia',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
                brightnessTimes: new Range(1, 3),
                overlayColor: {r: 58, g: 3, b: 3, alpha: 0.2},
                overlayBlend: 'lighten',
            }
        },
        {
            name: 'dramatic-valencia',
            effect: 'instagram-valencia',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.3, 0.35), new Range(0.4, 0.5)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.2, 1.25)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.2, 1.25)),
                brightnessTimes: new Range(2, 6),
                overlayColor: {r: 58, g: 3, b: 3, alpha: 0.35},
                overlayBlend: 'lighten',
            }
        }
    ];

    constructor({
                    name = ValenciaEffect._name_,
                    requiresLayer = true,
                    config = new ValenciaConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
