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
    fontFamily: {},
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
      provider: 'google',
      fonts: {
        sans: 'Poppins:400,500,600,700',
        serif: 'Merriweather',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
