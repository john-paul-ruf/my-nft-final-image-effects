import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class BrannanConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.35, 0.4), new Range(0.4, 0.45)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.15, 1.25), new Range(1.25, 1.35)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(0.85, 0.9), new Range(0.9, 0.95)),
            saturationTimes = new Range(1, 3),
            hueRotation = -2,
        } = {},
    ) {
        super({
            sepiaRange, sepiaTimes, contrastRange, contrastTimes,
            brightnessRange, brightnessTimes, saturationRange, saturationTimes,
            hueRotation,
        });
    }
}
