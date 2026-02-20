import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class MayfairConfig extends InstagramFilterConfig {
    constructor(
        {
            contrastRange = new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
            brightnessTimes = new Range(1, 3),
            saturationRange = new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
            saturationTimes = new Range(1, 3),
            vignetteColor = {r: 175, g: 105, b: 24},
            vignetteOpacity = 0.4,
            vignetteBlend = 'multiply',
            vignetteRadius = 0.4,
        } = {},
    ) {
        super({
            contrastRange, contrastTimes,
            brightnessRange, brightnessTimes,
            saturationRange, saturationTimes,
            vignetteColor, vignetteOpacity, vignetteBlend, vignetteRadius,
        });
    }
}
