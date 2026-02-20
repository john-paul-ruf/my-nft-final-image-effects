import {InstagramFilterEffect} from '../instagramBase/InstagramFilterEffect.js';
import {Settings} from 'my-nft-gen/src/core/Settings.js';
import {PoprocketConfig} from './PoprocketConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class PoprocketEffect extends InstagramFilterEffect {
    static _name_ = 'instagram-poprocket';
    static configClass = PoprocketConfig;

    static presets = [
        {name: 'subtle-poprocket', effect: 'instagram-poprocket', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.05, 0.08), new Range(0.08, 0.1)), sepiaTimes: new Range(1, 2), brightnessRange: new DynamicRange(new Range(1.08, 1.1), new Range(1.1, 1.12)), brightnessTimes: new Range(1, 2), vignetteColor: {r: 180, g: 40, b: 40}, vignetteOpacity: 0.2, vignetteBlend: 'screen', vignetteRadius: 0.5}},
        {name: 'classic-poprocket', effect: 'instagram-poprocket', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.1, 0.15), new Range(0.15, 0.2)), sepiaTimes: new Range(1, 3), brightnessRange: new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)), brightnessTimes: new Range(1, 3), vignetteColor: {r: 180, g: 40, b: 40}, vignetteOpacity: 0.4, vignetteBlend: 'screen', vignetteRadius: 0.35}},
        {name: 'dramatic-poprocket', effect: 'instagram-poprocket', percentChance: 100, currentEffectConfig: {sepiaRange: new DynamicRange(new Range(0.2, 0.25), new Range(0.3, 0.35)), sepiaTimes: new Range(2, 6), brightnessRange: new DynamicRange(new Range(1.25, 1.3), new Range(1.35, 1.45)), brightnessTimes: new Range(2, 6), vignetteColor: {r: 180, g: 40, b: 40}, vignetteOpacity: 0.6, vignetteBlend: 'screen', vignetteRadius: 0.25}},
    ];

    constructor({name = PoprocketEffect._name_, requiresLayer = true, config = new PoprocketConfig({}), additionalEffects = [], ignoreAdditionalEffects = false, settings = new Settings({})} = {}) {
        super({name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings});
    }
}
