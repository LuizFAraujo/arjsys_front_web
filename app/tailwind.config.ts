import type { Config } from 'tailwindcss';  // Importa o tipo Config do Tailwind

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue-1': '#346CB0', // rgb(52, 108, 176)
        'custom-blue-2': '#4D7EBA', // rgb(77, 126, 186)
      },
    },
  },
  plugins: [],
};

export default config;  // Exporta a configuração como ESM
