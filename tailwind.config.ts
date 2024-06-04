import type { Config } from "tailwindcss";

const themeColors = {
  'very-dark': 'rgba(var(--very-dark), <alpha-value>)',
  dark: 'rgba(var(--dark), <alpha-value>)',
  middle: 'rgba(var(--middle), <alpha-value>)',
  light: 'rgba(var(--light), <alpha-value>)',
  'very-light': 'rgba(var(--very-light), <alpha-value>)',
  disabled: 'rgba(var(--status-disabled), <alpha-value>)',
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto']
    },
    fontSize: {
      xs: "var(--text-xs)",
      sm: "var(--text-sm)",
      md: "var(--text-md)",
      lg: "var(--text-lg)",
      xl: "var(--text-xl)",
      tmd: "var(--title-md)",
      tlg: "var(--title-lg)",
      txl: "var(--title-xl)",
    },
    extend: {
      borderColor: themeColors,
      textColor: themeColors,
      colors: themeColors,
      backgroundColor: themeColors,
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        focus: 'var(--shadow-focus)',
        outline: 'var(--shadow-outline)',
        'button-focus': 'var(--shadow-button-focus)',
      },
      blur: {
        default: 'var(--blur)',
      },
      borderRadius: {
        none: 'var(--border-radius-none)',
        sm: 'var(--border-radius-sm)',
        md: 'var(--border-radius-md)',
        lg: 'var(--border-radius-lg)',
      },
    },
  },
  plugins: [],
};
export default config;

