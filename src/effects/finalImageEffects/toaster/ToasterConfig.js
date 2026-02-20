import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class ToasterConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.4, 1.5), new Range(1.5, 1.6)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(0.9, 0.95), new Range(0.95, 1.0)),
            brightnessTimes = new Range(1, 3),
            hueRotation = -15,
            vignetteColor = {r: 128, g: 78, b: 15},
            vignetteOpacity = 0.5,
            vignetteBlend = 'screen',
            vignetteRadius = 0.3,
        } = {},
    ) {
        super({
            sepiaRange, sepiaTimes,
            contrastRange, contrastTimes,
            brightnessRange, brightnessTimes,
            hueRotation,
            vignetteColor, vignetteOpacity, vignetteBlend, vignetteRadius,
        });
    }
}
