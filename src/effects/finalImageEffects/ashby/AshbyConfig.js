import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class AshbyConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.45, 0.5), new Range(0.5, 0.55)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
            contrastTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.7, 1.8), new Range(1.8, 1.9)),
            saturationTimes = new Range(1, 3),
            overlayColor = {r: 125, g: 105, b: 24, alpha: 0.25},
            overlayBlend = 'lighten',
        } = {},
    ) {
        super({
            sepiaRange, sepiaTimes,
            contrastRange, contrastTimes,
            saturationRange, saturationTimes,
            overlayColor, overlayOpacity: 1, overlayBlend,
        });
    }
}
