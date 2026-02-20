import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class AdenConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.15, 0.2), new Range(0.2, 0.25)),
            sepiaTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.3, 1.4), new Range(1.4, 1.5)),
            saturationTimes = new Range(1, 3),
            overlayColor = {r: 66, g: 10, b: 14, alpha: 0.2},
            overlayBlend = 'darken',
        } = {},
    ) {
        super({
            sepiaRange, sepiaTimes,
            brightnessRange, brightnessTimes,
            saturationRange, saturationTimes,
            overlayColor, overlayOpacity: 1, overlayBlend,
        });
    }
}
