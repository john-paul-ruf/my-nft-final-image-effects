import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {HelenaConfig} from './HelenaConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class HelenaEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-helena';
    static configClass = HelenaConfig;

    static presets = [
        {name: 'subtle-helena', effect: 'instagram-helena', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.25, 0.3), new Range(0.3, 0.35)), sepiaTimes: new Range(1, 2), contrastRange: new DynamicRange(new Range(1.0, 1.02), new Range(1.02, 1.05)), contrastTimes: new Range(1, 2), brightnessRange: new DynamicRange(new Range(1.0, 1.02), new Range(1.02, 1.05)), brightnessTimes: new Range(1, 2), saturationRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)), saturationTimes: new Range(1, 2), overlayColor: {r: 80, g: 140, b: 80, alpha: 0.08}, overlayBlend: 'overlay'}},
        {name: 'classic-helena', effect: 'instagram-helena', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.45, 0.5), new Range(0.5, 0.55)), sepiaTimes: new Range(1, 3), contrastRange: new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)), contrastTimes: new Range(1, 3), brightnessRange: new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)), brightnessTimes: new Range(1, 3), saturationRange: new DynamicRange(new Range(1.3, 1.35), new Range(1.35, 1.4)), saturationTimes: new Range(1, 3), overlayColor: {r: 80, g: 140, b: 80, alpha: 0.15}, overlayBlend: 'overlay'}},
        {name: 'dramatic-helena', effect: 'instagram-helena', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.6, 0.65), new Range(0.7, 0.8)), sepiaTimes: new Range(2, 6), contrastRange: new DynamicRange(new Range(1.08, 1.1), new Range(1.15, 1.2)), contrastTimes: new Range(2, 6), brightnessRange: new DynamicRange(new Range(1.08, 1.1), new Range(1.15, 1.2)), brightnessTimes: new Range(2, 6), saturationRange: new DynamicRange(new Range(1.5, 1.6), new Range(1.7, 1.8)), saturationTimes: new Range(2, 6), overlayColor: {r: 80, g: 140, b: 80, alpha: 0.25}, overlayBlend: 'overlay'}},
    ];

    constructor({name = HelenaEffect._name_, requiresLayer = true, config = new HelenaConfig({}), additionalEffects = [], ignoreAdditionalEffects = false, settings = new Settings({})} = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
