import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class LofiConfig extends InstagramFilterConfig {
    constructor(
        {
            saturationRange = new DynamicRange(new Range(1.0, 1.1), new Range(1.1, 1.2)),
            saturationTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.3, 1.5), new Range(1.5, 1.7)),
            contrastTimes = new Range(1, 3),
        } = {},
    ) {
        super({saturationRange, saturationTimes, contrastRange, contrastTimes});
    }
}
