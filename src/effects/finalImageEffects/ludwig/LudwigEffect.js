import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {LudwigConfig} from './LudwigConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class LudwigEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-ludwig';
    static configClass = LudwigConfig;

    static presets = [
        {name: 'subtle-ludwig', effect: 'instagram-ludwig', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.1, 0.12), new Range(0.12, 0.15)), sepiaTimes: new Range(1, 2), contrastRange: new DynamicRange(new Range(1.0, 1.02), new Range(1.02, 1.05)), contrastTimes: new Range(1, 2), brightnessRange: new DynamicRange(new Range(1.0, 1.02), new Range(1.02, 1.05)), brightnessTimes: new Range(1, 2), saturationRange: new DynamicRange(new Range(1.5, 1.6), new Range(1.6, 1.7)), saturationTimes: new Range(1, 2), overlayColor: {r: 125, g: 105, b: 24, alpha: 0.08}, overlayBlend: 'overlay'}},
        {name: 'classic-ludwig', effect: 'instagram-ludwig', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)), sepiaTimes: new Range(1, 3), contrastRange: new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)), contrastTimes: new Range(1, 3), brightnessRange: new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)), brightnessTimes: new Range(1, 3), saturationRange: new DynamicRange(new Range(1.9, 2.0), new Range(2.0, 2.1)), saturationTimes: new Range(1, 3), overlayColor: {r: 125, g: 105, b: 24, alpha: 0.15}, overlayBlend: 'overlay'}},
        {name: 'dramatic-ludwig', effect: 'instagram-ludwig', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.3, 0.35), new Range(0.4, 0.5)), sepiaTimes: new Range(2, 6), contrastRange: new DynamicRange(new Range(1.08, 1.1), new Range(1.15, 1.2)), contrastTimes: new Range(2, 6), brightnessRange: new DynamicRange(new Range(1.08, 1.1), new Range(1.15, 1.2)), brightnessTimes: new Range(2, 6), saturationRange: new DynamicRange(new Range(2.2, 2.4), new Range(2.5, 2.8)), saturationTimes: new Range(2, 6), overlayColor: {r: 125, g: 105, b: 24, alpha: 0.25}, overlayBlend: 'overlay'}},
    ];

    constructor({name = LudwigEffect._name_, requiresLayer = true, config = new LudwigConfig({}), additionalEffects = [], ignoreAdditionalEffects = false, settings = new Settings({})} = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
