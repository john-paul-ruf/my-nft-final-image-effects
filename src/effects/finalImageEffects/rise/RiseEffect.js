import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {RiseConfig} from './RiseConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class RiseEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-rise';
    static configClass = RiseConfig;

    static presets = [
        {name: 'subtle-rise', effect: 'instagram-rise', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.1, 0.12), new Range(0.12, 0.15)), sepiaTimes: new Range(1, 2), contrastRange: new DynamicRange(new Range(1.1, 1.12), new Range(1.12, 1.15)), contrastTimes: new Range(1, 2), brightnessRange: new DynamicRange(new Range(1.08, 1.1), new Range(1.1, 1.12)), brightnessTimes: new Range(1, 2), saturationRange: new DynamicRange(new Range(0.92, 0.95), new Range(0.95, 0.98)), saturationTimes: new Range(1, 2), vignetteColor: {r: 200, g: 150, b: 80}, vignetteOpacity: 0.2, vignetteBlend: 'lighten', vignetteRadius: 0.5}},
        {name: 'classic-rise', effect: 'instagram-rise', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)), sepiaTimes: new Range(1, 3), contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)), contrastTimes: new Range(1, 3), brightnessRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)), brightnessTimes: new Range(1, 3), saturationRange: new DynamicRange(new Range(0.85, 0.9), new Range(0.9, 0.95)), saturationTimes: new Range(1, 3), vignetteColor: {r: 200, g: 150, b: 80}, vignetteOpacity: 0.4, vignetteBlend: 'lighten', vignetteRadius: 0.35}},
        {name: 'dramatic-rise', effect: 'instagram-rise', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.3, 0.35), new Range(0.4, 0.5)), sepiaTimes: new Range(2, 6), contrastRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.5, 1.6)), contrastTimes: new Range(2, 6), brightnessRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.3, 1.4)), brightnessTimes: new Range(2, 6), saturationRange: new DynamicRange(new Range(0.7, 0.8), new Range(0.8, 0.85)), saturationTimes: new Range(2, 6), vignetteColor: {r: 200, g: 150, b: 80}, vignetteOpacity: 0.6, vignetteBlend: 'lighten', vignetteRadius: 0.25}},
    ];

    constructor({name = RiseEffect._name_, requiresLayer = true, config = new RiseConfig({}), additionalEffects = [], ignoreAdditionalEffects = false, settings = new Settings({})} = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
