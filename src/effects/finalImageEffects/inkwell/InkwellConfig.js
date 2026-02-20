import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class InkwellConfig extends InstagramFilterConfig {
    constructor(
        {
            brightnessRange = new DynamicRange(new Range(1.15, 1.25), new Range(1.25, 1.35)),
            brightnessTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(0.8, 0.85), new Range(0.85, 0.9)),
            contrastTimes = new Range(1, 3),
            grayscale = true,
        } = {},
    ) {
        super({brightnessRange, brightnessTimes, contrastRange, contrastTimes, grayscale});
    }
}
