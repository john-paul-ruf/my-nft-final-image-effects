import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class LudwigConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.9, 2.0), new Range(2.0, 2.1)),
            saturationTimes = new Range(1, 3),
            overlayColor = {r: 125, g: 105, b: 24, alpha: 0.15},
            overlayBlend = 'overlay',
        } = {},
    ) {
        super({
            sepiaRange, sepiaTimes,
            contrastRange, contrastTimes,
            brightnessRange, brightnessTimes,
            saturationRange, saturationTimes,
            overlayColor, overlayOpacity: 1, overlayBlend,
        });
    }
}
