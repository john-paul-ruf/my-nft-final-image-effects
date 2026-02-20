import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class MavenConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.3, 0.35), new Range(0.35, 0.4)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.65, 1.75), new Range(1.75, 1.85)),
            saturationTimes = new Range(1, 3),
            overlayColor = {r: 60, g: 120, b: 60, alpha: 0.15},
            overlayBlend = 'darken',
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
