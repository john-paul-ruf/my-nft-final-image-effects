import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class HelenaConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.45, 0.5), new Range(0.5, 0.55)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.3, 1.35), new Range(1.35, 1.4)),
            saturationTimes = new Range(1, 3),
            overlayColor = {r: 80, g: 140, b: 80, alpha: 0.15},
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
