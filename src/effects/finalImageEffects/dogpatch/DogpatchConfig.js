import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class DogpatchConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.3, 0.35), new Range(0.35, 0.4)),
            sepiaTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.0, 1.1), new Range(1.1, 1.2)),
            saturationTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.3, 1.5), new Range(1.5, 1.6)),
            contrastTimes = new Range(1, 3),
        } = {},
    ) {
        super({sepiaRange, sepiaTimes, saturationRange, saturationTimes, contrastRange, contrastTimes});
    }
}
