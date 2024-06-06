import type { Config } from "tailwindcss";

export const myTheme = {
  fontFamily: {
    Roboto: "Roboto",
  },
  screens: {
    mobile: "var(--screen-mobile)",
    tablet: "var(--screen-tablet)",
    desktop: "var(--screen-desktop)",
    tv: "var(--screen-tv)",
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
    colors: {
      primary: "rgba(var(--primary), <alpha-value>)",
      secondary: "rgba(var(--secondary), <alpha-value>)",
      tertiary: "rgba(var(--tertiary), <alpha-value>)",
      quaternary: "rgba(var(--quaternary), <alpha-value>)",
      success: "rgba(var(--success), <alpha-value>)",
      error: "rgba(var(--error), <alpha-value>)",
      warning: "rgba(var(--warning), <alpha-value>)",
      disabled: "rgba(var(--disabled), <alpha-value>)"
    },
    backgroundColor: {
      light: "rgba(var(--bg-light), <alpha-value>)",
      dark: "rgba(var(--bg-dark), <alpha-value>)",
      success: "rgba(var(--text-success), <alpha-value>)",
      error: "rgba(var(--text-error), <alpha-value>)",
    },
    textColor: {
      gray: {
        primary: "rgba(var(--text-primary), <alpha-value>)",
        secondary: "rgba(var(--text-secondary), <alpha-value>)",
        tertiary: "rgba(var(--text-tertiary), <alpha-value>)",
      },
      success: "rgba(var(--text-success), <alpha-value>)",
      error: "rgba(var(--text-error), <alpha-value>)",
    },
    boxShadow: {
      sm: "var(--shadow-sm)",
      md: "var(--shadow-md)",
      lg: "var(--shadow-lg)",
      focus: "var(--shadow-focus)",
      outline: "var(--shadow-outline)",
      "button-focus": "var(--shadow-button-focus)",
    },
    blur: {
      default: "var(--blur)",
    },
    borderRadius: {
      none: "var(--border-radius-none)",
      sm: "var(--border-radius-sm)",
      md: "var(--border-radius-md)",
      lg: "var(--border-radius-lg)",
    },
    spacing: {
      none: "var(--spacing-none) /* 0px */",
      "4xs": "var(--spacing-4xs) /* 8px */",
      "2xs": "var(--spacing-2xs) /* 12px */",
      xs: "var(--spacing-xs) /* 16px */",
      sm: "var(--spacing-sm) /* 20px */",
      md: "var(--spacing-md) /* 24px */",
      lg: "var(--spacing-lg) /* 32px */",
      xl: "var(--spacing-xl) /* 40px */",
      "2xl": "var(--spacing-2xl) /* 48px */",
      "4xl": "var(--spacing-4xl) /* 56px */",
      0: "var(--spacing-none) /* 0px */",
      1: "var(--spacing-4xs) /* 8px */",
      2: "var(--spacing-2xs) /* 12px */",
      3: "var(--spacing-xs) /* 16px */",
      4: "var(--spacing-sm) /* 20px */",
      5: "var(--spacing-md) /* 24px */",
      6: "var(--spacing-lg) /* 32px */",
      7: "var(--spacing-xl) /* 40px */",
      8: "var(--spacing-2xl) /* 48px */",
      9: "var(--spacing-4xl) /* 56px */",
    },
  },
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: myTheme,
  plugins: [],
};
export default config;


