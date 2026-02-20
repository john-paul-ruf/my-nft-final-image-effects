import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class GinghamConfig extends InstagramFilterConfig {
    constructor(
        {
            contrastRange = new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
            brightnessTimes = new Range(1, 3),
            overlayColor = {r: 230, g: 230, b: 230, alpha: 0.3},
            overlayBlend = 'soft-light',
        } = {},
    ) {
        super({
            contrastRange, contrastTimes,
            brightnessRange, brightnessTimes,
            overlayColor, overlayOpacity: 1, overlayBlend,
        });
    }
}
