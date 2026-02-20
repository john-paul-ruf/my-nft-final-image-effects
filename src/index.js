export const name = 'my-nft-final-image-effects';
export const version = '1.0.0';

export async function register(EffectRegistry, PositionRegistry) {
  try {
    const { EffectCategories } = await import('my-nft-gen/src/core/registry/EffectCategories.js');

    const instagramFilters = await import('./effects/finalImageEffects/index.js');

    const filterEntries = Object.entries(instagramFilters);
    let registeredCount = 0;

    for (const [name, EffectClass] of filterEntries) {
      if (EffectClass._name_ && !(EffectRegistry.hasGlobal && EffectRegistry.hasGlobal(EffectClass._name_))) {
        EffectRegistry.registerGlobal(EffectClass, EffectCategories.FINAL_IMAGE, {
          displayName: EffectClass._name_,
          description: `Instagram-style ${EffectClass._name_} filter effect with animated parameters`,
          version: '1.0.0',
          author: 'Instagram Filters Plugin Pack',
          tags: ['effect', 'final', 'instagram', 'filter', 'color-grading']
        });
        registeredCount++;
      }
    }

    console.log(`✅ [Plugin] Registered ${registeredCount} Instagram filter effects as FINAL_IMAGE`);

  } catch (error) {
    console.error('❌ [Plugin] Error during registration:', error);
    throw error;
  }
}

export * from './effects/finalImageEffects/index.js';
