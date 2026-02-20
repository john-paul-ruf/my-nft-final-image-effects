import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {SierraConfig} from './SierraConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class SierraEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-sierra';
    static configClass = SierraConfig;

    static presets = [
        {name: 'subtle-sierra', effect: 'instagram-sierra', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.1, 0.12), new Range(0.12, 0.15)), sepiaTimes: new Range(1, 2), contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)), contrastTimes: new Range(1, 2), brightnessRange: new DynamicRange(new Range(0.92, 0.95), new Range(0.95, 0.98)), brightnessTimes: new Range(1, 2), hueRotation: -8, vignetteColor: {r: 100, g: 60, b: 20}, vignetteOpacity: 0.25, vignetteBlend: 'screen', vignetteRadius: 0.45}},
        {name: 'classic-sierra', effect: 'instagram-sierra', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)), sepiaTimes: new Range(1, 3), contrastRange: new DynamicRange(new Range(1.4, 1.5), new Range(1.5, 1.6)), contrastTimes: new Range(1, 3), brightnessRange: new DynamicRange(new Range(0.85, 0.9), new Range(0.9, 0.95)), brightnessTimes: new Range(1, 3), hueRotation: -15, vignetteColor: {r: 100, g: 60, b: 20}, vignetteOpacity: 0.5, vignetteBlend: 'screen', vignetteRadius: 0.3}},
        {name: 'dramatic-sierra', effect: 'instagram-sierra', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.3, 0.35), new Range(0.4, 0.5)), sepiaTimes: new Range(2, 6), contrastRange: new DynamicRange(new Range(1.6, 1.7), new Range(1.8, 2.0)), contrastTimes: new Range(2, 6), brightnessRange: new DynamicRange(new Range(0.75, 0.8), new Range(0.8, 0.85)), brightnessTimes: new Range(2, 6), hueRotation: -20, vignetteColor: {r: 100, g: 60, b: 20}, vignetteOpacity: 0.7, vignetteBlend: 'screen', vignetteRadius: 0.2}},
    ];

    constructor({name = SierraEffect._name_, requiresLayer = true, config = new SierraConfig({}), additionalEffects = [], ignoreAdditionalEffects = false, settings = new Settings({})} = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
