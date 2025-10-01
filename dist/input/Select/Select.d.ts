import React from "react";
import { SelectChangeEvent, SxProps, Theme } from "@mui/material";
export interface SelectOption {
    value: string | number;
    label: string;
    disabled?: boolean;
}
export interface SelectOptionGroup {
    label: string;
    options: SelectOption[];
}
export declare function isOptionGroup(option: SelectOption | SelectOptionGroup): option is SelectOptionGroup;
export interface SelectProps {
    label?: string;
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
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;
export default Select;
