import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class NineteenSeventySevenConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.4, 0.5), new Range(0.5, 0.6)),
            sepiaTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.3, 1.4), new Range(1.4, 1.5)),
            saturationTimes = new Range(1, 3),
            hueRotation = -30,
        } = {},
    ) {
        super({sepiaRange, sepiaTimes, saturationRange, saturationTimes, hueRotation});
    }
}
