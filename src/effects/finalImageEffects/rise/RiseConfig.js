import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class RiseConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(0.85, 0.9), new Range(0.9, 0.95)),
            saturationTimes = new Range(1, 3),
            vignetteColor = {r: 200, g: 150, b: 80},
            vignetteOpacity = 0.4,
            vignetteBlend = 'lighten',
            vignetteRadius = 0.35,
        } = {},
    ) {
        super({
            sepiaRange, sepiaTimes,
            contrastRange, contrastTimes,
            brightnessRange, brightnessTimes,
            saturationRange, saturationTimes,
            vignetteColor, vignetteOpacity, vignetteBlend, vignetteRadius,
        });
    }
}
