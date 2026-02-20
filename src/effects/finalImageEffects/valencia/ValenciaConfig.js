import {InstagramFilterConfig} from '../instagramBase/InstagramFilterConfig.js';
import {Range} from 'my-nft-gen/src/core/layer/configType/Range.js';
import {DynamicRange} from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

export class ValenciaConfig extends InstagramFilterConfig {
    constructor(
        {
            sepiaRange = new DynamicRange(new Range(0.2, 0.25), new Range(0.25, 0.3)),
            sepiaTimes = new Range(1, 3),
            contrastRange = new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
            contrastTimes = new Range(1, 3),
            brightnessRange = new DynamicRange(new Range(1.05, 1.1), new Range(1.1, 1.15)),
            brightnessTimes = new Range(1, 3),
            overlayColor = {r: 58, g: 3, b: 3, alpha: 0.2},
            overlayBlend = 'lighten',
        } = {},
    ) {
        super({
            sepiaRange, sepiaTimes,
            contrastRange, contrastTimes,
            brightnessRange, brightnessTimes,
            overlayColor, overlayOpacity: 1, overlayBlend,
        });
    }
}
