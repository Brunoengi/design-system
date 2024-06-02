import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto',]
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
      backgroundColor: {
        'very-dark': 'rgba(var(--bg-very-dark), <alpha-value>)',
        dark: 'rgba(var(--bg-dark), <alpha-value>)',
        middle: 'rgba(var(--bg-middle), <alpha-value>)',
        light: 'rgba(var(--bg-light), <alpha-value>)',
        'very-light': 'rgba(var(--bg-very-light), <alpha-value>)',
        disabled: 'rgba(var(--bg-disabled), <alpha-value>)',
      },
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
