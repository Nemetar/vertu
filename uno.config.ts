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
    [
      'btn-primary',
      'bg-[#ffc482] text-[#0d0d0d] px-6 py-3 rounded-md text-[1rem] uppercase font-[600] font-sans transition-transform duration-300 ease hover:scale-105',
    ],
    [
      'btn-secondary',
      'bg-[#1a1a1a] text-white px-6 py-3 rounded-md text-[1rem] uppercase font-[600] font-sans transition-transform duration-300 ease hover:scale-105',
    ],
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
