import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class KelvinConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.1, 0.15), new Range(0.15, 0.2)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.4, 1.5), new Range(1.5, 1.6)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
            brightnessTimes = new Range(1, 3),
            hueRotation = -10,
            vignetteColor = {r: 190, g: 120, b: 20},
            vignetteOpacity = 0.5,
            vignetteBlend = 'screen',
            vignetteRadius = 0.35,
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
