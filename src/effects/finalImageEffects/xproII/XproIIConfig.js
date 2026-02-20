import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class XproIIConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.4, 0.45), new Range(0.45, 0.5)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.65, 1.75), new Range(1.75, 1.85)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.25, 1.3), new Range(1.3, 1.35)),
            saturationTimes = new Range(1, 3),
            hueRotation = -5,
            vignetteColor = {r: 60, g: 90, b: 160},
            vignetteOpacity = 0.5,
            vignetteBlend = 'multiply',
            vignetteRadius = 0.35,
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
