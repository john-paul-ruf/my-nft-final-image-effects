import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class JunoConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.3, 0.35), new Range(0.35, 0.4)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.7, 1.8), new Range(1.8, 1.9)),
            saturationTimes = new Range(1, 3),
            overlayColor = {r: 89, g: 131, b: 175, alpha: 0.2},
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
