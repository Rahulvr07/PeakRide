/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        'primary-light': 'hsl(var(--color-primary-light) / <alpha-value>)',
        'primary-dark': 'hsl(var(--color-primary-dark) / <alpha-value>)',
        
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        'secondary-light': 'hsl(var(--color-secondary-light) / <alpha-value>)',
        'secondary-dark': 'hsl(var(--color-secondary-dark) / <alpha-value>)',
        
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        'accent-light': 'hsl(var(--color-accent-light) / <alpha-value>)',
        'accent-dark': 'hsl(var(--color-accent-dark) / <alpha-value>)',
        
        text: 'hsl(var(--color-text) / <alpha-value>)',
        background: 'hsl(var(--color-background) / <alpha-value>)',
        card: 'hsl(var(--color-card) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',
        
        success: 'hsl(var(--color-success) / <alpha-value>)',
        warning: 'hsl(var(--color-warning) / <alpha-value>)',
        error: 'hsl(var(--color-error) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'soft': '0 5px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};