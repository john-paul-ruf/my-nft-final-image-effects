import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class HefeConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.35, 0.4), new Range(0.4, 0.45)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.4, 1.5), new Range(1.5, 1.6)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.3, 1.4), new Range(1.4, 1.5)),
            saturationTimes = new Range(1, 3),
            hueRotation = -10,
            vignetteColor = {r: 20, g: 15, b: 10},
            vignetteOpacity = 0.6,
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
