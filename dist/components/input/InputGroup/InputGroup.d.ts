import React from 'react';
import { BoxProps } from '@mui/material';
import type { InputProps } from '../Input/Input';
export type BorderRadiusOptions = 'none' | 'sm' | 'md' | 'lg' | 'full';
export type InputGroupProps = Omit<BoxProps, 'children'> & {
    /**
     * O conteúdo do componente. Espera-se que sejam componentes `Input`.
     */
    children: React.ReactNode;
    /**
     * A direção na qual os inputs serão agrupados.
     * @default 'horizontal'
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * Se `true`, todo o grupo de inputs será desabilitado.
     * @default false
     */
    disabled?: boolean;
    /**
     * Se `true`, o grupo de inputs indicará um estado de erro.
     * @default false
     */
    error?: boolean;
    /**
     * O tamanho dos inputs no grupo.
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Define o raio da borda do grupo.
     * 'sm': 2px, 'md': 4px (padrão do tema), 'lg': 8px, 'full': 9999px.
     * @default 'md'
     */
    borderRadius?: BorderRadiusOptions | number | string;
    /**
     * Estilos CSS customizados para aplicar a cada componente `Input` filho.
     */
    inputSx?: InputProps['sx'];
};
/**
 * InputGroup é um contêiner que agrupa múltiplos componentes Input,
 * tratando as bordas e os estados (foco, erro, desabilitado) de forma unificada.
 * Ideal para criar campos de formulário compostos.
 */
declare const InputGroup: React.ForwardRefExoticComponent<Omit<InputGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export default InputGroup;
