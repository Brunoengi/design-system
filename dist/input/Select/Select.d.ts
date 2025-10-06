import React from "react";
import { SelectChangeEvent, SxProps, Theme } from "@mui/material";
export interface SelectOption {
    value: string | number;
    label: React.ReactNode;
    disabled?: boolean;
}
export interface SelectOptionGroup {
    label: string;
    options: SelectOption[];
}
export declare function isOptionGroup(option: SelectOption | SelectOptionGroup): option is SelectOptionGroup;
export interface RenderOptionProps {
    key: string | number;
    value: string | number;
    disabled?: boolean;
}
export interface SelectProps {
    label?: React.ReactNode;
    options: (SelectOption | SelectOptionGroup)[];
    value: string | number;
    onChange: (event: SelectChangeEvent<string | number>) => void;
    name?: string;
    id?: string;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    fullWidth?: boolean;
    variant?: "standard" | "outlined" | "filled";
    size?: "small" | "medium";
    className?: string;
    /**
     * The system prop that allows defining system overrides as well as custom CSS.
     */
    sx?: SxProps<Theme>;
    /**
     * Função para customizar a renderização de cada opção na lista suspensa.
     * Recebe as propriedades do `MenuItem` e o objeto da opção.
     * @param props - Propriedades essenciais (`key`, `value`, `disabled`) a serem aplicadas no `MenuItem`.
     * @param option - O objeto da opção a ser renderizada.
     */
    renderOption?: (props: RenderOptionProps, option: SelectOption) => React.ReactNode;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;
export default Select;
