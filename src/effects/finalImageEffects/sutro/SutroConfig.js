import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class SutroConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.35, 0.4), new Range(0.4, 0.45)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(0.85, 0.9), new Range(0.9, 0.95)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.3, 1.4), new Range(1.4, 1.5)),
            saturationTimes = new Range(1, 3),
            hueRotation = -10,
            vignetteColor = {r: 15, g: 10, b: 5},
            vignetteOpacity = 0.65,
            vignetteBlend = 'multiply',
            vignetteRadius = 0.3,
        } = {},
    ) {
        super({
            sepiaRange, sepiaTimes,
            contrastRange, contrastTimes,
            brightnessRange, brightnessTimes,
            saturationRange, saturationTimes,
            hueRotation,
            vignetteColor, vignetteOpacity, vignetteBlend, vignetteRadius,
        });
    }
}
