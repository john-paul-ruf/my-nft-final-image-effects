import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {ClarendonConfig} from './ClarendonConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class ClarendonEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-clarendon';
    static configClass = ClarendonConfig;

    static presets = [
        {
            name: 'subtle-clarendon',
            effect: 'instagram-clarendon',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.05, 0.08), new Range(0.08, 0.12)),
                sepiaTimes: new Range(1, 2),
                contrastRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
                contrastTimes: new Range(1, 2),
                brightnessRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
                brightnessTimes: new Range(1, 2),
                hueRotation: 3,
                overlayColor: {r: 127, g: 187, b: 227, alpha: 0.1},
                overlayBlend: 'overlay',
            }
        },
        {
            name: 'classic-clarendon',
            effect: 'instagram-clarendon',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.1, 0.15), new Range(0.15, 0.2)),
                sepiaTimes: new Range(1, 3),
                contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                contrastTimes: new Range(1, 3),
                brightnessRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
                brightnessTimes: new Range(1, 3),
                hueRotation: 5,
                overlayColor: {r: 127, g: 187, b: 227, alpha: 0.2},
                overlayBlend: 'overlay',
            }
        },
        {
            name: 'dramatic-clarendon',
            effect: 'instagram-clarendon',
            percentChance: 100,
            currentEffectConfig: {
                sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.3, 0.4)),
                sepiaTimes: new Range(2, 6),
                contrastRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                contrastTimes: new Range(2, 6),
                brightnessRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)),
                brightnessTimes: new Range(2, 6),
                hueRotation: 8,
                overlayColor: {r: 127, g: 187, b: 227, alpha: 0.35},
                overlayBlend: 'overlay',
            }
        }
    ];

    constructor({
                    name = ClarendonEffect._name_,
                    requiresLayer = true,
                    config = new ClarendonConfig({}),
                    additionalEffects = [],
                    ignoreAdditionalEffects = false,
                    settings = new Settings({}),
                } = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
