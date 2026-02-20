import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {GinzaConfig} from './GinzaConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class GinzaEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-ginza';
    static configClass = GinzaConfig;

    static presets = [
        {name: 'subtle-ginza', effect: 'instagram-ginza', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.1, 0.12), new Range(0.12, 0.15)), sepiaTimes: new Range(1, 2), contrastRange: new DynamicRange(new Range(1.05, 1.08), new Range(1.08, 1.1)), contrastTimes: new Range(1, 2), brightnessRange: new DynamicRange(new Range(1.08, 1.1), new Range(1.1, 1.12)), brightnessTimes: new Range(1, 2), saturationRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)), saturationTimes: new Range(1, 2), hueRotation: -3, overlayColor: {r: 125, g: 105, b: 24, alpha: 0.1}, overlayBlend: 'darken'}},
        {name: 'classic-ginza', effect: 'instagram-ginza', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)), sepiaTimes: new Range(1, 3), contrastRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)), contrastTimes: new Range(1, 3), brightnessRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)), brightnessTimes: new Range(1, 3), saturationRange: new DynamicRange(new Range(1.3, 1.35), new Range(1.35, 1.4)), saturationTimes: new Range(1, 3), hueRotation: -5, overlayColor: {r: 125, g: 105, b: 24, alpha: 0.2}, overlayBlend: 'darken'}},
        {name: 'dramatic-ginza', effect: 'instagram-ginza', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.3, 0.35), new Range(0.4, 0.5)), sepiaTimes: new Range(2, 6), contrastRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.3, 1.4)), contrastTimes: new Range(2, 6), brightnessRange: new DynamicRange(new Range(1.25, 1.3), new Range(1.35, 1.45)), brightnessTimes: new Range(2, 6), saturationRange: new DynamicRange(new Range(1.5, 1.6), new Range(1.7, 1.8)), saturationTimes: new Range(2, 6), hueRotation: -8, overlayColor: {r: 125, g: 105, b: 24, alpha: 0.35}, overlayBlend: 'darken'}},
    ];

    constructor({name = GinzaEffect._name_, requiresLayer = true, config = new GinzaConfig({}), additionalEffects = [], ignoreAdditionalEffects = false, settings = new Settings({})} = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
