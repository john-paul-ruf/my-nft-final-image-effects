import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class HudsonConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)),
            saturationTimes = new Range(1, 3),
            hueRotation = -15,
            vignetteColor = {r: 80, g: 120, b: 180},
            vignetteOpacity = 0.4,
            vignetteBlend = 'multiply',
            vignetteRadius = 0.4,
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
