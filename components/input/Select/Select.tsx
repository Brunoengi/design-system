import React, { forwardRef } from "react"
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  ListSubheader,
  FormHelperText,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material"

// Define a estrutura de uma opção e de um grupo de opções
export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
}

export interface SelectOptionGroup {
  label: string
  options: SelectOption[]
}

// Função para verificar se um item é um grupo de opções
export function isOptionGroup(
  option: SelectOption | SelectOptionGroup,
): option is SelectOptionGroup {
  return "options" in option
}

export interface RenderOptionProps {
  key: string | number;
  value: string | number;
  disabled?: boolean;
}

// Novas props baseadas no Material-UI
export interface SelectProps {
  label?: React.ReactNode
  options: (SelectOption | SelectOptionGroup)[]
  value: string | number
  onChange: (event: SelectChangeEvent<string | number>) => void
  name?: string
  id?: string
  disabled?: boolean
  error?: boolean
  helperText?: string
  fullWidth?: boolean
  variant?: "standard" | "outlined" | "filled"
  size?: "small" | "medium"
  className?: string
  /**
   * The system prop that allows defining system overrides as well as custom CSS.
   */
  sx?: SxProps<Theme>
  /**
   * Função para customizar a renderização de cada opção na lista suspensa.
   * Recebe as propriedades do `MenuItem` e o objeto da opção.
   * @param props - Propriedades essenciais (`key`, `value`, `disabled`) a serem aplicadas no `MenuItem`.
   * @param option - O objeto da opção a ser renderizada.
   */
  renderOption?: (props: RenderOptionProps, option: SelectOption) => React.ReactNode;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      label,
      options,
      value,
      onChange,
      name,
      id,
      disabled = false,
      error = false,
      helperText,
      fullWidth = true,
      variant = "outlined",
      size = "medium",
      className,
      sx,
      renderOption,
    },
    ref,
  ) => {
    const labelId = label ? `${id}-label` : undefined

    const renderOptions = () => {
      const elements: React.ReactNode[] = []
      options.forEach((item, index) => {
        if (isOptionGroup(item)) {
          elements.push(
            <ListSubheader key={`${item.label}-${index}`}>
              {item.label}
            </ListSubheader>,
          )
          item.options.forEach(option => {
            const props: RenderOptionProps = {
              key: option.value,
              value: option.value,
              disabled: option.disabled,
            };
            if (renderOption) {
              elements.push(renderOption(props, option));
            } else {
              elements.push(<MenuItem {...props}>{option.label}</MenuItem>);
            }
          })
        } else {
          const option = item as SelectOption;
          const props: RenderOptionProps = {
            key: option.value,
            value: option.value,
            disabled: option.disabled,
          };

          if (renderOption) {
            // Passa as props do MenuItem e o objeto da opção para a função customizada
            elements.push(renderOption(props, option));
          } else {
            elements.push(<MenuItem {...props}>{option.label}</MenuItem>);
          }
        }
      })
      return elements
    }

    return (
      <FormControl
        variant={variant}
        fullWidth={fullWidth}
        disabled={disabled}
        error={error}
        size={size}
        className={className}
        sx={sx}
        ref={ref}
      >
        {label && <InputLabel id={labelId}>{label}</InputLabel>}
        <MuiSelect
          labelId={labelId}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          label={label}
        >
          {renderOptions()}
        </MuiSelect>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    )
  },
)

Select.displayName = "Select"
export default Select