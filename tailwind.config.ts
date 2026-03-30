import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0a0a0f',
        'cyber-dark': '#0d1117',
        'cyber-blue': '#00d4ff',
        'cyber-pink': '#ff00ff',
        'cyber-green': '#00ff88',
        'neon-blue': '#00bfff',
        'neon-pink': '#ff1493',
        'hud-bg': 'rgba(0, 20, 40, 0.6)',
      },
      fontFamily: {
        'tech': ['Orbitron', 'Rajdhani', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #00d4ff',
        'neon-pink': '0 0 5px #ff00ff, 0 0 20px #ff00ff, 0 0 40px #ff00ff',
        'neon-green': '0 0 5px #00ff88, 0 0 20px #00ff88, 0 0 40px #00ff88',
        'glow': '0 0 10px rgba(0, 212, 255, 0.5), 0 0 30px rgba(0, 212, 255, 0.3)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'float': 'float 6s ease-in-out infinite',
        'data-flow': 'data-flow 2s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'data-flow': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)',
        'data-stream': 'linear-gradient(90deg, transparent 0%, rgba(0, 212, 255, 0.1) 50%, transparent 100%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
export default config
