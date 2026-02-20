import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class ClarendonConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.1, 0.15), new Range(0.15, 0.2)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
            brightnessTimes = new Range(1, 3),
            hueRotation = 5,
            overlayColor = {r: 127, g: 187, b: 227, alpha: 0.2},
            overlayBlend = 'overlay',
        } = {},
    ) {
        super({
            sepiaRange, sepiaTimes,
            contrastRange, contrastTimes,
            brightnessRange, brightnessTimes,
            hueRotation,
            overlayColor, overlayOpacity: 1, overlayBlend,
        });
    }
}
