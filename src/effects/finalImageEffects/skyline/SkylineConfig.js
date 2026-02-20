import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class SkylineConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.1, 0.15), new Range(0.15, 0.2)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.15, 1.25), new Range(1.25, 1.35)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.15, 1.25), new Range(1.25, 1.35)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.1, 1.2), new Range(1.2, 1.3)),
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
