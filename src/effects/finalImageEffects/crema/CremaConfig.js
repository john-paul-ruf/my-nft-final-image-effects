import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class CremaConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.45, 0.5), new Range(0.5, 0.55)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(0.85, 0.9), new Range(0.9, 0.95)),
            saturationTimes = new Range(1, 3),
            hueRotation = -2,
            overlayColor = {r: 125, g: 105, b: 24, alpha: 0.15},
            overlayBlend = 'multiply',
        } = {},
    ) {
        super({
            sepiaRange, sepiaTimes,
            contrastRange, contrastTimes,
            brightnessRange, brightnessTimes,
            saturationRange, saturationTimes,
            hueRotation,
            overlayColor, overlayOpacity: 1, overlayBlend,
        });
    }
}
