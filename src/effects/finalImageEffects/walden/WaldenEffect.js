import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {WaldenConfig} from './WaldenConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class WaldenEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-walden';
    static configClass = WaldenConfig;

    static presets = [
        {name: 'subtle-walden', effect: 'instagram-walden', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.15, 0.2), new Range(0.2, 0.25)), sepiaTimes: new Range(1, 2), contrastRange: new DynamicRange(new Range(0.85, 0.9), new Range(0.9, 0.92)), contrastTimes: new Range(1, 2), brightnessRange: new DynamicRange(new Range(1.1, 1.12), new Range(1.12, 1.15)), brightnessTimes: new Range(1, 2), saturationRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)), saturationTimes: new Range(1, 2), overlayColor: {r: 204, g: 204, b: 0, alpha: 0.08}, overlayBlend: 'darken'}},
        {name: 'classic-walden', effect: 'instagram-walden', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.3, 0.35), new Range(0.35, 0.4)), sepiaTimes: new Range(1, 3), contrastRange: new DynamicRange(new Range(0.75, 0.8), new Range(0.8, 0.85)), contrastTimes: new Range(1, 3), brightnessRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)), brightnessTimes: new Range(1, 3), saturationRange: new DynamicRange(new Range(1.3, 1.4), new Range(1.4, 1.5)), saturationTimes: new Range(1, 3), overlayColor: {r: 204, g: 204, b: 0, alpha: 0.15}, overlayBlend: 'darken'}},
        {name: 'dramatic-walden', effect: 'instagram-walden', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.4, 0.5), new Range(0.55, 0.65)), sepiaTimes: new Range(2, 6), contrastRange: new DynamicRange(new Range(0.6, 0.7), new Range(0.7, 0.75)), contrastTimes: new Range(2, 6), brightnessRange: new DynamicRange(new Range(1.3, 1.35), new Range(1.4, 1.5)), brightnessTimes: new Range(2, 6), saturationRange: new DynamicRange(new Range(1.5, 1.6), new Range(1.7, 1.8)), saturationTimes: new Range(2, 6), overlayColor: {r: 204, g: 204, b: 0, alpha: 0.25}, overlayBlend: 'darken'}},
    ];

    constructor({name = WaldenEffect._name_, requiresLayer = true, config = new WaldenConfig({}), additionalEffects = [], ignoreAdditionalEffects = false, settings = new Settings({})} = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
