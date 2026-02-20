import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class WillowConfig extends InstagramFilterConfig {
    constructor(
        {
            brightnessRange = new DynamicRange(new Range(1.1, 1.2), new Range(1.2, 1.3)),
            brightnessTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(0.8, 0.85), new Range(0.85, 0.9)),
            contrastTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(0.03, 0.05), new Range(0.05, 0.08)),
            saturationTimes = new Range(1, 3),
            sepiaRange = new DynamicRange(new Range(0.15, 0.2), new Range(0.2, 0.25)),
            sepiaTimes = new Range(1, 3),
        } = {},
    ) {
        super({
            brightnessRange, brightnessTimes,
            contrastRange, contrastTimes,
            saturationRange, saturationTimes,
            sepiaRange, sepiaTimes,
        });
    }
}
