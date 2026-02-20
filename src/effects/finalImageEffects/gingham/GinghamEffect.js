import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {GinghamConfig} from './GinghamConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class GinghamEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-gingham';
    static configClass = GinghamConfig;

    static presets = [
        {
            name: 'subtle-gingham',
            effect: 'instagram-gingham',
            percentChance: 100,
            currentEffectConfig: {
                contrastRange: new DynamicRange(new Range(1.02, 1.05), new Range(1.05, 1.08)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.02, 1.05), new Range(1.05, 1.08)),
                brightnessTimes: new Range(1, 2),
                overlayColor: {r: 230, g: 230, b: 230, alpha: 0.15},
                overlayBlend: 'soft-light',
            }
        },
        {
            name: 'classic-gingham',
            effect: 'instagram-gingham',
            percentChance: 100,
            currentEffectConfig: {
                contrastRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
                brightnessTimes: new Range(1, 3),
                overlayColor: {r: 230, g: 230, b: 230, alpha: 0.3},
                overlayBlend: 'soft-light',
            }
        },
        {
            name: 'dramatic-gingham',
            effect: 'instagram-gingham',
            percentChance: 100,
            currentEffectConfig: {
                contrastRange: new DynamicRange(new Range(1.1, 1.2), new Range(1.2, 1.3)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.1, 1.2), new Range(1.2, 1.3)),
                brightnessTimes: new Range(2, 6),
                overlayColor: {r: 230, g: 230, b: 230, alpha: 0.5},
                overlayBlend: 'soft-light',
            }
        }
    ];

    constructor({
                    name = GinghamEffect._name_,
                    requiresLayer = true,
                    config = new GinghamConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
