import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'


const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      colors: {
        bg: '#E0E7F1',
        main: '#A3E636',
        mainAccent: '#4d80e6', // not needed for shadcn
    
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        base: '5px'

      },
      boxShadow: {
        base: '4px 4px 0px 0px rgba(0,0,0,1)',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },
      keyframes: {
        'shake': {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' },
        },
        'open-sidebar': {
          from: { width: '60px' },
          to: { width: '300px' },
        },
        'close-sidebar': {
          from: { width: '300px' },
          to: { width: '60px' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
      },
        

      },
      animation: {
        // backgroundPositionSpin: {
        //   '0%': { backgroundPosition: '0% 50%' },
        //   '100%': { backgroundPosition: '100% 50%' },
        // },
        'shake': 'shake 1s ease-in-out infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
        'open-sidebar': 'open-sidebar 0.2s ease-out',
        'close-sidebar': 'close-sidebar 0.2s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'border-beam': 'border-beam calc(var(--duration) * 1s) infinite linear',
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
        backgroundPositionSpin:
        "background-position-spin 3000ms infinite alternate",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    

    
  

      screens: {
        w900: { raw: '(max-width: 900px)' },
        w500: { raw: '(max-width: 500px)' },
      },
    },
  },
  plugins: [tailwindAnimate],

} 

export default config