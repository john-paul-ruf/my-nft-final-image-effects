import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class PoprocketConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.1, 0.15), new Range(0.15, 0.2)),
            sepiaTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.15, 1.2), new Range(1.2, 1.25)),
            brightnessTimes = new Range(1, 3),
            vignetteColor = {r: 180, g: 40, b: 40},
            vignetteOpacity = 0.4,
            vignetteBlend = 'screen',
            vignetteRadius = 0.35,
        } = {},
    ) {
        super({
            sepiaRange, sepiaTimes,
            brightnessRange, brightnessTimes,
            vignetteColor, vignetteOpacity, vignetteBlend, vignetteRadius,
        });
    }
}
