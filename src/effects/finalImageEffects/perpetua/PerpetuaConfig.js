import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class PerpetuaConfig extends InstagramFilterConfig {
    constructor(
        {
            contrastRange = new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.2, 1.25), new Range(1.25, 1.3)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
            saturationTimes = new Range(1, 3),
            overlayColor = {r: 100, g: 80, b: 160, alpha: 0.15},
            overlayBlend = 'soft-light',
        } = {},
    ) {
        super({
            contrastRange, contrastTimes,
            brightnessRange, brightnessTimes,
            saturationRange, saturationTimes,
            overlayColor, overlayOpacity: 1, overlayBlend,
        });
    }
}
