# my-nft-final-image-effects

A plugin pack for [my-nft-gen](https://github.com/your-org/my-nft-gen) that provides **40 Instagram-style final image effects** for NFT generation pipelines. These effects are applied as post-composition color grading and filter passes on fully rendered images.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Architecture](#architecture)
- [Available Effects](#available-effects)
- [Configuration System](#configuration-system)
- [Presets](#presets)
- [Creating a New Effect](#creating-a-new-effect)
- [Test Rendering](#test-rendering)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [License](#license)

## Overview

This plugin pack registers **final image effects** into the `my-nft-gen` framework's `EffectRegistry` under the `FINAL_IMAGE` category. Each effect simulates a well-known Instagram filter using a combination of:

- **Brightness**, **contrast**, and **saturation** modulation with animated `DynamicRange` parameters
- **Sepia** toning via color matrix recombination
- **Hue rotation**
- **Grayscale** conversion
- **Color overlays** with configurable blend modes
- **Radial vignettes** with custom color, opacity, and radius

All image processing is performed through [Sharp](https://sharp.pixelplumbing.com/), enabling high-performance, pipeline-based transformations.

Effects are **animation-aware** — brightness, contrast, saturation, and sepia values are interpolated across frames using the `findValue` oscillation system from `my-nft-gen`, producing smooth loop-safe transitions.

## Installation

```bash
npm install
```

**Prerequisite**: This plugin depends on `my-nft-gen` (v1.6.9) which must be accessible as a dependency. It provides the core framework classes (`LayerEffect`, `EffectConfig`, `Settings`, `Range`, `DynamicRange`, etc.).

## Quick Start

### As a Plugin (Automatic Registration)

The plugin is designed to be loaded by `my-nft-gen`'s `PluginManager` in worker threads. Point your project's plugin paths to this package:

```javascript
import { Project } from 'my-nft-gen';

const project = new Project({
  // ...your project settings
  pluginPaths: ['./node_modules/my-nft-final-image-effects']
});
```

The plugin's `register()` function automatically registers all 40 effects into the global `EffectRegistry` under `EffectCategories.FINAL_IMAGE`.

### Direct Import

You can also import individual effects directly:

```javascript
import { ClarendonEffect } from 'my-nft-final-image-effects';
import { MoonEffect } from 'my-nft-final-image-effects';
import { XproIIEffect } from 'my-nft-final-image-effects';
```

Or import all effects:

```javascript
import * as filters from 'my-nft-final-image-effects';
```

### Manual Registration

```javascript
import { register } from 'my-nft-final-image-effects';
import { EffectRegistry, PositionRegistry } from 'my-nft-gen';

await register(EffectRegistry, PositionRegistry);
```

## Architecture

```
┌─────────────────────────────────────────────────┐
│                  my-nft-gen                      │
│  ┌───────────┐  ┌──────────────┐  ┌──────────┐  │
│  │ LayerEffect│  │ EffectConfig │  │ Settings │  │
│  └─────┬─────┘  └──────┬───────┘  └──────────┘  │
└────────┼───────────────┼────────────────────────┘
         │               │
    ┌────┴────┐    ┌─────┴──────────────┐
    │Instagram│    │ InstagramFilter     │
    │Filter   │    │ Config              │
    │Effect   │    │ (base config with   │
    │(Sharp   │    │  DynamicRange       │
    │pipeline)│    │  parameters)        │
    └────┬────┘    └─────┬──────────────┘
         │               │
    ┌────┴────┐    ┌─────┴──────┐
    │ Aden    │    │ AdenConfig │
    │ Amaro   │    │ AmaroConfig│
    │ Moon    │    │ MoonConfig │
    │ ...     │    │ ...        │
    │ (40     │    │ (40 filter │
    │ filters)│    │  configs)  │
    └─────────┘    └────────────┘
```

### Key Classes

| Class | Location | Description |
|-------|----------|-------------|
| `InstagramFilterEffect` | `src/effects/finalImageEffects/instagramBase/` | Base class for all filters. Implements the Sharp processing pipeline, vignette generation, frame-aware parameter interpolation, and composite blending. |
| `InstagramFilterConfig` | `src/effects/finalImageEffects/instagramBase/` | Base config class. Defines the full parameter schema: `DynamicRange` values for brightness/contrast/saturation/sepia, hue rotation, grayscale, overlay, and vignette settings. |
| `[Filter]Effect` | `src/effects/finalImageEffects/[filter]/` | Concrete effect class. Sets `_name_`, `configClass`, and static `presets`. |
| `[Filter]Config` | `src/effects/finalImageEffects/[filter]/` | Concrete config class. Overrides default parameter values to define the filter's characteristic look. |

### Processing Pipeline

1. **Parameter interpolation** — Per-frame values for brightness, contrast, saturation, and sepia are computed via `findValue()` oscillation
2. **Grayscale** — Optional full desaturation (e.g., Moon, Inkwell, Willow)
3. **Modulation** — Brightness, saturation, and hue rotation via Sharp's `modulate()`
4. **Contrast** — Linear slope/intercept adjustment via Sharp's `linear()`
5. **Sepia** — Color matrix recombination via Sharp's `recomb()`
6. **Color overlay** — Solid color composite with configurable blend mode
7. **Vignette** — Radial gradient overlay with custom color, opacity, radius, and blend mode
8. **Temp file cleanup** — Intermediate files are created and deleted per invocation

## Available Effects

| # | Effect | Internal Name | Characteristics |
|---|--------|---------------|-----------------|
| 1 | **Aden** | `instagram-aden` | Warm desaturation with soft tones |
| 2 | **Amaro** | `instagram-amaro` | Bright with warm color shift |
| 3 | **Ashby** | `instagram-ashby` | Warm vintage with golden tones |
| 4 | **Brannan** | `instagram-brannan` | High contrast with muted greens |
| 5 | **Brooklyn** | `instagram-brooklyn` | Cool bluish tint, faded look |
| 6 | **Charmes** | `instagram-charmes` | Rosy warm tones |
| 7 | **Clarendon** | `instagram-clarendon` | Bright, high contrast, cool overlay |
| 8 | **Crema** | `instagram-crema` | Subtle cream warmth |
| 9 | **Dogpatch** | `instagram-dogpatch` | Muted, desaturated tones |
| 10 | **Earlybird** | `instagram-earlybird` | Golden sepia with vignette |
| 11 | **Gingham** | `instagram-gingham` | Soft, washed-out vintage |
| 12 | **Ginza** | `instagram-ginza` | Cool-toned with slight contrast boost |
| 13 | **Hefe** | `instagram-hefe` | Warm saturation boost with vignette |
| 14 | **Helena** | `instagram-helena` | Elegant warm tones |
| 15 | **Hudson** | `instagram-hudson` | Cool blue tint, soft contrast |
| 16 | **Inkwell** | `instagram-inkwell` | Black and white / monochrome |
| 17 | **Juno** | `instagram-juno` | Warm vibrant colors |
| 18 | **Kelvin** | `instagram-kelvin` | Warm golden tones, high brightness |
| 19 | **Lark** | `instagram-lark` | Bright, desaturated blues |
| 20 | **Lo-Fi** | `instagram-lofi` | High saturation and contrast with vignette |
| 21 | **Ludwig** | `instagram-ludwig` | Subtle warm tone shift |
| 22 | **Maven** | `instagram-maven` | Dark, moody tones |
| 23 | **Mayfair** | `instagram-mayfair` | Warm pink tone with vignette |
| 24 | **Moon** | `instagram-moon` | Grayscale with soft sepia |
| 25 | **Nashville** | `instagram-nashville` | Warm vintage with pink overlay |
| 26 | **1977** | `instagram-1977` | Retro warm with faded highlights |
| 27 | **Perpetua** | `instagram-perpetua` | Pastel tones with soft fade |
| 28 | **Poprocket** | `instagram-poprocket` | Vivid pop-art colors |
| 29 | **Reyes** | `instagram-reyes` | Light, dusty vintage |
| 30 | **Rise** | `instagram-rise` | Warm golden glow |
| 31 | **Sierra** | `instagram-sierra` | Soft, warm fade |
| 32 | **Skyline** | `instagram-skyline` | Cool blue tones |
| 33 | **Slumber** | `instagram-slumber` | Desaturated, dreamy |
| 34 | **Stinson** | `instagram-stinson` | Warm subtle vintage |
| 35 | **Sutro** | `instagram-sutro` | Dark, moody vignette |
| 36 | **Toaster** | `instagram-toaster` | Warm with burnt edges |
| 37 | **Valencia** | `instagram-valencia` | Warm golden tones |
| 38 | **Vesper** | `instagram-vesper` | Cool desaturated tones |
| 39 | **Walden** | `instagram-walden` | Warm yellowish tint |
| 40 | **Willow** | `instagram-willow` | Grayscale with purple tint |
| 41 | **X-Pro II** | `instagram-xpro-ii` | High contrast with blue vignette |

## Configuration System

Every effect is configured through a `Config` class that extends `InstagramFilterConfig`. Parameters use the `DynamicRange` / `Range` system from `my-nft-gen` to define animated value ranges.

### Base Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `brightnessRange` | `DynamicRange` | `1.0 – 1.0` | Brightness multiplier range (animated) |
| `brightnessTimes` | `Range` | `1 – 3` | Number of oscillation cycles for brightness |
| `contrastRange` | `DynamicRange` | `1.0 – 1.0` | Contrast multiplier range (animated) |
| `contrastTimes` | `Range` | `1 – 3` | Number of oscillation cycles for contrast |
| `saturationRange` | `DynamicRange` | `1.0 – 1.0` | Saturation multiplier range (animated) |
| `saturationTimes` | `Range` | `1 – 3` | Number of oscillation cycles for saturation |
| `sepiaRange` | `DynamicRange` | `0.0 – 0.0` | Sepia intensity (0 = none, 1 = full) |
| `sepiaTimes` | `Range` | `1 – 3` | Number of oscillation cycles for sepia |
| `hueRotation` | `number` | `0` | Hue shift in degrees |
| `grayscale` | `boolean` | `false` | Convert to grayscale before other adjustments |
| `overlayColor` | `{r, g, b, alpha}` | `null` | Solid color overlay |
| `overlayOpacity` | `number` | `0` | Overlay opacity |
| `overlayBlend` | `string` | `'over'` | Sharp composite blend mode for overlay |
| `vignetteColor` | `{r, g, b}` | `null` | Radial vignette color |
| `vignetteOpacity` | `number` | `0` | Vignette max opacity |
| `vignetteBlend` | `string` | `'multiply'` | Sharp composite blend mode for vignette |
| `vignetteRadius` | `number` | `0.7` | Inner radius ratio (0 = full vignette, 1 = no vignette) |

### DynamicRange Explained

A `DynamicRange` defines a range whose boundaries are themselves randomized:

```javascript
new DynamicRange(
  new Range(1.2, 1.25),   // bottom: lower bound randomized between 1.2–1.25
  new Range(1.25, 1.3)    // top: upper bound randomized between 1.25–1.3
)
```

At construction time, a concrete lower and upper value are sampled. During rendering, `findValue()` oscillates smoothly between these bounds over the specified number of cycles, producing loop-safe animated parameters.

## Presets

Each effect ships with **three preset intensity levels**: `subtle`, `classic`, and `dramatic`. Presets are defined as static arrays on the Effect class and can be accessed via:

```javascript
XproIIEffect.presets;                          // all presets
XproIIEffect.getPreset('classic-xpro-ii');     // specific preset
XproIIEffect.getRandomPreset();                // weighted random selection
```

Preset objects include:
- `name` — Unique preset identifier
- `effect` — Effect internal name
- `percentChance` — Weight for random selection
- `currentEffectConfig` — Config overrides for the preset

## Creating a New Effect

A template is provided at `templates/FinalEffectTemplate.js`.

### Steps

1. **Create the directory**: `src/effects/finalImageEffects/yourFilter/`

2. **Create the Config** (`YourFilterConfig.js`):
   ```javascript
   import { InstagramFilterConfig } from '../instagramBase/InstagramFilterConfig.js';
   import { Range } from 'my-nft-gen/src/core/layer/configType/Range.js';
   import { DynamicRange } from 'my-nft-gen/src/core/layer/configType/DynamicRange.js';

   export class YourFilterConfig extends InstagramFilterConfig {
     constructor({
       brightnessRange = new DynamicRange(new Range(1.1, 1.15), new Range(1.15, 1.2)),
       brightnessTimes = new Range(1, 3),
       contrastRange = new DynamicRange(new Range(1.0, 1.05), new Range(1.05, 1.1)),
       contrastTimes = new Range(1, 3),
       // ...additional parameters
     } = {}) {
       super({ brightnessRange, brightnessTimes, contrastRange, contrastTimes });
     }
   }
   ```

3. **Create the Effect** (`YourFilterEffect.js`):
   ```javascript
   import { InstagramFilterEffect } from '../instagramBase/InstagramFilterEffect.js';
   import { Settings } from 'my-nft-gen/src/core/Settings.js';
   import { YourFilterConfig } from './YourFilterConfig.js';

   export class YourFilterEffect extends InstagramFilterEffect {
     static _name_ = 'instagram-your-filter';
     static configClass = YourFilterConfig;

     static presets = [
       { name: 'subtle-your-filter', effect: 'instagram-your-filter', percentChance: 100, currentEffectConfig: { /* ... */ } },
       { name: 'classic-your-filter', effect: 'instagram-your-filter', percentChance: 100, currentEffectConfig: { /* ... */ } },
       { name: 'dramatic-your-filter', effect: 'instagram-your-filter', percentChance: 100, currentEffectConfig: { /* ... */ } },
     ];

     constructor({
       name = YourFilterEffect._name_,
       requiresLayer = true,
       config = new YourFilterConfig({}),
       additionalEffects = [],
       ignoreAdditionalEffects = false,
       settings = new Settings({}),
     } = {}) {
       super({ name, requiresLayer, config, additionalEffects, ignoreAdditionalEffects, settings });
     }
   }
   ```

4. **Register the export** in `src/effects/finalImageEffects/index.js`:
   ```javascript
   export { YourFilterEffect } from './yourFilter/YourFilterEffect.js';
   ```

The plugin's `register()` function will automatically pick it up on next load.

## Test Rendering

A unified test renderer is included for rendering effects through a real `my-nft-gen` Project pipeline:

```bash
# Basic test
node scripts/testRender.js --effect instagram-clarendon

# Custom resolution and frame count
node scripts/testRender.js --effect instagram-moon --frames 100 --width 2048 --height 2048

# Save rendered frames to disk
node scripts/testRender.js --effect instagram-xpro-ii --save-frames --output ./my-renders

# Verbose output
node scripts/testRender.js --effect instagram-aden -v

# Show all options
node scripts/testRender.js --help
```

### CLI Options

| Flag | Description | Default |
|------|-------------|---------|
| `--effect <name>` | Effect name (required) | — |
| `--preset <name>` | Preset: `default`, `mystical`, `minimal`, `dense`, `organic` | `default` |
| `--frames <n>` | Number of frames to render | `100` |
| `--width <px>` | Canvas width | `1024` |
| `--height <px>` | Canvas height | `1024` |
| `--output <path>` | Output directory | `./output/render-<timestamp>` |
| `--save-frames` | Save rendered frames to disk | `false` |
| `--verbose`, `-v` | Verbose output | `false` |
| `--debug` | Debug logging | `false` |

## Testing

```bash
# Run unit tests
npx jest

# Run with coverage
npx jest --coverage
```

Jest is configured with Babel for ESM support (targeting Node 18) and collects coverage from `src/**/*.js` (excluding index and config files). Coverage threshold is set to 50% across branches, functions, lines, and statements.

## Project Structure

```
my-nft-final-image-effects/
├── my-nft-final-image-effects-plugins.js                          # Entry point for my-nft-gen PluginManager
├── src/
│   ├── index.js                       # Plugin registration logic + re-exports
│   └── effects/
│       └── finalImageEffects/
│           ├── index.js               # Barrel exports for all 40+ effects
│           ├── instagramBase/         # Base classes
│           │   ├── InstagramFilterEffect.js   # Sharp pipeline, vignette, compositing
│           │   └── InstagramFilterConfig.js   # Base parameter schema
│           ├── aden/                  # Each filter follows this pattern:
│           │   ├── AdenEffect.js      #   Effect class with presets
│           │   └── AdenConfig.js      #   Config class with defaults
│           ├── amaro/
│           ├── ashby/
│           ├── brannan/
│           ├── brooklyn/
│           ├── charmes/
│           ├── clarendon/
│           ├── crema/
│           ├── dogpatch/
│           ├── earlybird/
│           ├── gingham/
│           ├── ginza/
│           ├── hefe/
│           ├── helena/
│           ├── hudson/
│           ├── inkwell/
│           ├── juno/
│           ├── kelvin/
│           ├── lark/
│           ├── lofi/
│           ├── ludwig/
│           ├── maven/
│           ├── mayfair/
│           ├── moon/
│           ├── nashville/
│           ├── nineteenSeventySeven/
│           ├── perpetua/
│           ├── poprocket/
│           ├── reyes/
│           ├── rise/
│           ├── sierra/
│           ├── skyline/
│           ├── slumber/
│           ├── stinson/
│           ├── sutro/
│           ├── toaster/
│           ├── valencia/
│           ├── vesper/
│           ├── walden/
│           ├── willow/
│           └── xproII/
├── templates/
│   └── FinalEffectTemplate.js         # Starter template for new effects
├── scripts/
│   └── testRender.js                  # Unified test rendering CLI
├── docs/                              # Architecture and guide documentation
├── jest.config.js
├── package.json
└── LICENSE                            # MIT
```

## License

[MIT](LICENSE)
