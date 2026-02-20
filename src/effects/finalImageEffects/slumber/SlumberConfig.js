import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class SlumberConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.3, 0.35), new Range(0.35, 0.4)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
            contrastTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
            saturationTimes = new Range(1, 3),
            overlayColor = {r: 125, g: 105, b: 24, alpha: 0.25},
            overlayBlend = 'darken',
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
