import React from 'react';
import { TextFieldProps } from '@mui/material/TextField';
export type BorderRadiusOptions = 'none' | 'sm' | 'md' | 'lg' | 'full';
export type InputProps = Omit<TextFieldProps, 'InputProps' | 'variant'> & {
    /**
     * Adiciona um prefixo ao input. Útil para ícones ou unidades de medida.
     */
    startAdornment?: React.ReactNode;
    /**
     * Adiciona um sufixo ao input. Útil para ícones ou unidades de medida.
     */
    endAdornment?: React.ReactNode;
    /**
     * A variante de estilo a ser usada.
     * 'borderless' remove as bordas, útil para uso dentro de um InputGroup.
     * @default 'outlined'
     */
    variant?: 'standard' | 'outlined' | 'filled' | 'borderless';
    /**
     * Define o raio da borda. Pode ser um valor predefinido ('none', 'sm', 'md', 'lg', 'full') ou um valor customizado (número ou string).
     * 'sm': 2px, 'md': 4px (padrão do tema), 'lg': 8px, 'full': 9999px.
     * Só funciona com a variante 'outlined'.
     * @example 'lg'
     */
    borderRadius?: BorderRadiusOptions | number | string;
    /**
     * Define quais cantos devem ser arredondados.
     * Ex: `['topLeft', 'bottomLeft']`. Só funciona com a variante 'outlined' e se `borderRadius` for fornecido.
     */
    roundedCorners?: ('topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight')[];
    /**
     * Define quais lados devem ter uma borda visível.
     * Por padrão, todos os lados são visíveis.
     * Ex: `['right', 'bottom', 'left']`. Só funciona com a variante 'outlined'.
     */
    borders?: ('top' | 'right' | 'bottom' | 'left')[];
    /**
     * Define o número máximo de caracteres (dígitos) que podem ser inseridos.
     * O input ajustará sua largura automaticamente com base neste valor.
     */
    maxLength?: number;
};
/**
 * O componente Input é uma abstração sobre o TextField do Material-UI,
 * com melhorias para inputs numéricos e fácil adição de prefixos/sufixos.
 */
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default Input;
