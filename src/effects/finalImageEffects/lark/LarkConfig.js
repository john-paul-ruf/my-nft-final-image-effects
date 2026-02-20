import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class LarkConfig extends InstagramFilterConfig {
    constructor(
        {
            brightnessRange = new DynamicRange(new Range(1.2, 1.3), new Range(1.3, 1.4)),
            brightnessTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.1, 1.2), new Range(1.2, 1.3)),
            contrastTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.15, 1.25), new Range(1.25, 1.35)),
            saturationTimes = new Range(1, 3),
            sepiaRange = new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)),
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
