import React from "react";
import { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
export type BorderRadiusOptions = 'none' | 'sm' | 'md' | 'lg' | 'full';
export type ButtonProps = MuiButtonProps & {
    /**
     * Define o raio da borda do botão.
     * 'sm': 2px, 'md': 4px (padrão do tema), 'lg': 8px, 'full': 9999px.
     * @default 'sm'
     */
    borderRadius?: BorderRadiusOptions | number | string;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
