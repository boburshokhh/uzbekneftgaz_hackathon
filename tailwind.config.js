/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3b82f6', // Основной синий
        'primary-dark': '#0a58ca',
        'secondary': '#64748b', // Серый
        'success': '#10b981', // Зеленый
        'danger': '#ef4444', // Красный
        'warning': '#f59e0b', // Желтый
        'info': '#38bdf8', // Бирюзовый
        'light': '#f8f9fa', // Очень светлый
        'dark': '#212529', // Темный
        'background': '#0f1535', // Фон страницы (темно-синий)
        'surface': '#181f4a', // Фон карточек и элементов интерфейса
        'surface-dark': '#070c29', // Более темный фон
        'text-primary': '#e6ecf0', // Основной цвет текста
        'text-secondary': '#d3d7dc', // Вторичный цвет текста
        'border-color': 'rgba(255, 255, 255, 0.15)', // Цвет границ
        'custom-blue': {
          light: 'rgba(59, 130, 246, 0.15)', // Светло-голубой для акцентов
          DEFAULT: '#3b82f6',
          dark: '#0a58ca',
        },
        'custom-gray': {
          light: '#4b5481',
          DEFAULT: '#64748b',
          dark: '#475569',
        }
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 