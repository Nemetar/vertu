import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      primary: '#2B3A67',
      secondary: '#496A81',
      accent: '#85D1A5',
      neutral: '#F4F4F4',
      dark: '#1A1A1A',
      highlight: '#FFCE6E',
    },
  },
  shortcuts: [
    ['btn-primary', 'px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary'],
    ['btn-secondary', 'px-4 py-2 bg-secondary text-white rounded-lg hover:bg-primary'],
    ['text-accent', 'text-accent'],
    ['no-underline', 'no-underline text-current'],
    ['link-hover', 'hover:text-accent hover:underline'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/', // CDN pour les icônes
    }),
    presetTypography(), // Typographie améliorée
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,700', // Police sans-serif élégante
        serif: 'Playfair Display:400,700', // Police serif classique
        mono: 'Fira Code:400,700', // Police monospace moderne
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
