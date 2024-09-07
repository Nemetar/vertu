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
      primary: '#1C3A6F', // Bleu foncé pour la stabilité et la confiance
      secondary: '#567792', // Bleu gris doux, évoquant la tranquillité
      accent: '#81A69B', // Vert pâle, symbole de calme et de réconfort
      neutral: '#D8CBBF', // Beige doux pour des arrières-plans chaleureux
      highlight: '#FFD18C', // Jaune chaud pour attirer l'attention en douceur
      error: '#E57373', // Rouge doux pour les messages d’erreur ou d'alerte
      success: '#81C784', // Vert clair pour les actions réussies ou les messages positifs
    },
  },
  shortcuts: [
    ['btn-primary', 'px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary'],
    ['btn-secondary', 'px-4 py-2 bg-secondary text-white rounded-lg hover:bg-primary'],
    ['text-accent', 'text-accent'],
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
