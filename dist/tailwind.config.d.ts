import type { Config } from "tailwindcss";
export declare const myTheme: {
    fontFamily: {
        Roboto: string;
    };
    screens: {
        mobile: string;
        tablet: string;
        desktop: string;
        tv: string;
    };
    fontSize: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        tmd: string;
        tlg: string;
        txl: string;
    };
    extend: {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            quaternary: string;
            quinary: string;
            success: string;
            error: string;
            warning: string;
            disabled: string;
        };
        backgroundColor: {
            light: string;
            dark: string;
            primary: string;
            secondary: string;
            tertiary: string;
            quaternary: string;
            quinary: string;
            success: string;
            error: string;
            warning: string;
            disabled: string;
        };
        textColor: {
            gray: {
                primary: string;
                secondary: string;
                tertiary: string;
            };
            success: string;
            error: string;
            disabled: string;
        };
        boxShadow: {
            sm: string;
            md: string;
            lg: string;
            focus: string;
            outline: string;
            "button-focus": string;
        };
        blur: {
            default: string;
        };
        borderRadius: {
            none: string;
            sm: string;
            md: string;
            lg: string;
        };
        spacing: {
            none: string;
            "4xs": string;
            "2xs": string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            "2xl": string;
            "4xl": string;
        };
    };
};
declare const config: Config;
export default config;
