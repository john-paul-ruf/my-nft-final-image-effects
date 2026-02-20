import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {PerpetuaConfig} from './PerpetuaConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class PerpetuaEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-perpetua';
    static configClass = PerpetuaConfig;

    static presets = [
        {name: 'subtle-perpetua', effect: 'instagram-perpetua', percentChance: 100, currentEffectConfig: {contrastRange: new DynamicRange(new Range(1.02, 1.05), new Range(1.05, 1.08)), contrastTimes: new Range(1, 2), brightnessRange: new DynamicRange(new Range(1.1, 1.12), new Range(1.12, 1.15)), brightnessTimes: new Range(1, 2), saturationRange: new DynamicRange(new Range(1.02, 1.05), new Range(1.05, 1.08)), saturationTimes: new Range(1, 2), overlayColor: {r: 100, g: 80, b: 160, alpha: 0.08}, overlayBlend: 'soft-light'}},
        {name: 'classic-perpetua', effect: 'instagram-perpetua', percentChance: 100, currentEffectConfig: {contrastRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)), contrastTimes: new Range(1, 3), brightnessRange: new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)), brightnessTimes: new Range(1, 3), saturationRange: new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)), saturationTimes: new Range(1, 3), overlayColor: {r: 100, g: 80, b: 160, alpha: 0.15}, overlayBlend: 'soft-light'}},
        {name: 'dramatic-perpetua', effect: 'instagram-perpetua', percentChance: 100, currentEffectConfig: {contrastRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.2, 1.25)), contrastTimes: new Range(2, 6), brightnessRange: new DynamicRange(new Range(1.3, 1.35), new Range(1.4, 1.5)), brightnessTimes: new Range(2, 6), saturationRange: new DynamicRange(new Range(1.1, 1.15), new Range(1.2, 1.25)), saturationTimes: new Range(2, 6), overlayColor: {r: 100, g: 80, b: 160, alpha: 0.25}, overlayBlend: 'soft-light'}},
    ];

    constructor({name = PerpetuaEffect._name_, requiresLayer = true, config = new PerpetuaConfig({}), additionalEffects = [], ignoreAdditionalEffects = false, settings = new Settings({})} = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
