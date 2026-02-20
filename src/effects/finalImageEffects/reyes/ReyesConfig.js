import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class ReyesConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.6, 0.75), new Range(0.75, 0.85)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(0.7, 0.75), new Range(0.75, 0.8)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.15, 1.25), new Range(1.25, 1.35)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.3, 1.4), new Range(1.4, 1.5)),
            saturationTimes = new Range(1, 3),
        } = {},
    ) {
        super({
            sepiaRange, sepiaTimes,
            contrastRange, contrastTimes,
            brightnessRange, brightnessTimes,
            saturationRange, saturationTimes,
        });
    }
}
