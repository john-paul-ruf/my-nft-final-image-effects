import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class MoonConfig extends InstagramFilterConfig {
    constructor(
        {
            brightnessRange = new DynamicRange(new Range(1.3, 1.4), new Range(1.4, 1.5)),
            brightnessTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(0.9, 0.95), new Range(0.95, 1.0)),
            contrastTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(0, 0), new Range(0.05, 0.1)),
            saturationTimes = new Range(1, 3),
            sepiaRange = new DynamicRange(new Range(0.3, 0.35), new Range(0.35, 0.4)),
            sepiaTimes = new Range(1, 3),
            grayscale = true,
        } = {},
    ) {
        super({
            brightnessRange, brightnessTimes,
            contrastRange, contrastTimes,
            saturationRange, saturationTimes,
            sepiaRange, sepiaTimes,
            grayscale,
        });
    }
}
