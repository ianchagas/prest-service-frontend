/** @type {import('tailwindcss').Config} */
const { blue, white, gray } = require('tailwindcss/colors');

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        waves: "url('/waves-background.png')",
        'gradient-feat-lp4': 'linear-gradient(90deg, #000000 0%, #69FFF614 20%, #FF2BAA14 80%,#000000 100%)',
        'gradient-hero-lp4': 'linear-gradient(75deg, #000000 0%, #69FFF614 20%, #FF2BAA14 80%,#000000 100%)',
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        lp2: {
          primary: '#ff4c25ff',
          secondary: '#374151',
        },
        lp5: {
          primary: '#ff4c25ff',
          secondary: '#787878',
        },
        lp7: {
          primary: '#167befff',
          secondary: '#3E3E3E',
          sub: '#53535C',
        },
        lp9: {
          primary: '#0B3721',
          secondary: '#1C1C1C',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        tremor: {
          brand: {
            faint: blue[50],
            muted: blue[200],
            subtle: blue[400],
            DEFAULT: blue[500],
            emphasis: blue[700],
            inverted: white,
          },
          background: {
            muted: gray[50],
            subtle: gray[100],
            DEFAULT: white,
            emphasis: gray[700],
          },
          border: {
            DEFAULT: gray[200],
          },
          ring: {
            DEFAULT: gray[200],
          },
          content: {
            subtle: gray[400],
            DEFAULT: gray[500],
            emphasis: gray[700],
            strong: gray[900],
            inverted: white,
          },
        },
        'dark-tremor': {
          brand: {
            faint: '#0B1229',
            muted: blue[950],
            subtle: blue[800],
            DEFAULT: blue[500],
            emphasis: blue[400],
            inverted: blue[950],
          },
          background: {
            muted: '#131A2B',
            subtle: gray[800],
            DEFAULT: gray[900],
            emphasis: gray[300],
          },
          border: {
            DEFAULT: gray[800],
          },
          ring: {
            DEFAULT: gray[800],
          },
          content: {
            subtle: gray[600],
            DEFAULT: gray[500],
            emphasis: gray[200],
            strong: gray[50],
            inverted: gray[950],
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
        'tremor-full': '9999px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'dark-tremor-card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'dark-tremor-dropdown': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      fontSize: {
        'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
        'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
        'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
        'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg|text|border|ring|stroke|fill)-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/,
      variants: ['hover', 'ui-selected'],
    },
  ],
  plugins: [require('tailwindcss-animate'), require('@headlessui/tailwindcss')],
};
