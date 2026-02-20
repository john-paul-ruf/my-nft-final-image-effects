import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {MavenConfig} from './MavenConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class MavenEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-maven';
    static configClass = MavenConfig;

    static presets = [
        {name: 'subtle-maven', effect: 'instagram-maven', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.15, 0.2), new Range(0.2, 0.25)), sepiaTimes: new Range(1, 2), contrastRange: new DynamicRange(new Range(1.0, 1.02), new Range(1.02, 1.05)), contrastTimes: new Range(1, 2), brightnessRange: new DynamicRange(new Range(1.0, 1.02), new Range(1.02, 1.05)), brightnessTimes: new Range(1, 2), saturationRange: new DynamicRange(new Range(1.4, 1.5), new Range(1.5, 1.6)), saturationTimes: new Range(1, 2), overlayColor: {r: 60, g: 120, b: 60, alpha: 0.08}, overlayBlend: 'darken'}},
        {name: 'classic-maven', effect: 'instagram-maven', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.3, 0.35), new Range(0.35, 0.4)), sepiaTimes: new Range(1, 3), contrastRange: new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)), contrastTimes: new Range(1, 3), brightnessRange: new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)), brightnessTimes: new Range(1, 3), saturationRange: new DynamicRange(new Range(1.65, 1.75), new Range(1.75, 1.85)), saturationTimes: new Range(1, 3), overlayColor: {r: 60, g: 120, b: 60, alpha: 0.15}, overlayBlend: 'darken'}},
        {name: 'dramatic-maven', effect: 'instagram-maven', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.4, 0.5), new Range(0.55, 0.65)), sepiaTimes: new Range(2, 6), contrastRange: new DynamicRange(new Range(1.08, 1.1), new Range(1.15, 1.2)), contrastTimes: new Range(2, 6), brightnessRange: new DynamicRange(new Range(1.08, 1.1), new Range(1.15, 1.2)), brightnessTimes: new Range(2, 6), saturationRange: new DynamicRange(new Range(2.0, 2.2), new Range(2.3, 2.5)), saturationTimes: new Range(2, 6), overlayColor: {r: 60, g: 120, b: 60, alpha: 0.25}, overlayBlend: 'darken'}},
    ];

    constructor({name = MavenEffect._name_, requiresLayer = true, config = new MavenConfig({}), additionalEffects = [], ignoreAdditionalEffects = false, settings = new Settings({})} = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
