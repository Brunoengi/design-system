import React, { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import classNames from "classnames"

// Define os estilos base e as variantes do componente usando class-variance-authority
const selectVariants = cva(
  "p-2 border rounded-md bg-white text-gray-primary focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-200",
  {
    variants: {
      width: {
        "w-12": "w-12",
        "w-16": "w-16",
        "w-20": "w-20",
        "w-24": "w-24",
        "w-28": "w-28",
        "w-32": "w-32",
        "w-40": "w-40",
        "w-64": "w-64",
        full: "w-full",
        max: "w-max",
        min: "w-min",
        "1/2": "w-1/2",
        "1/3": "w-1/3",
        "2/3": "w-2/3",
        "1/4": "w-1/4",
        "2/4": "w-2/4",
        "3/4": "w-3/4",
      },
      backgroundColor: {
        "gray-100": "bg-gray-100",
        "gray-200": "bg-gray-200",
        "gray-800": "bg-gray-800 text-white",
        "gray-900": "bg-gray-900 text-white",
        black: "bg-black text-white",
        white: "bg-white",
        transparent: "bg-transparent",
      },
      borderRadius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
      },
      borderColor: {
        primary: "border-primary",
        secondary: "border-secondary",
        tertiary: "border-tertiary",
        quaternary: "border-quaternary",
        success: "border-success",
        error: "border-error",
        warning: "border-warning",
        disabled: "border-disabled",
      },
      borderWidth: {
        none: "border-0",
        "border-1": "border",
        "border-2": "border-2",
      },
    },
    defaultVariants: {
      width: "full",
      borderRadius: "md",
      borderColor: "primary",
      borderWidth: "border-1",
    },
  },
)

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
function isOptionGroup(
  option: SelectOption | SelectOptionGroup,
): option is SelectOptionGroup {
  return "options" in option
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {
  contents: {
    name: string
    id: string
    options: (SelectOption | SelectOptionGroup)[]
  }
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ contents, className, width, ...props }, ref) => {
    const { name, id, options } = contents

    return (
      <select
        name={name}
        id={id}
        ref={ref}
        className={classNames(selectVariants({ width, ...props }), className)}
        {...props}
      >
        {options.map((item, index) => {
          if (isOptionGroup(item)) {
            return (
              <optgroup key={`${item.label}-${index}`} label={item.label}>
                {item.options.map(option => (
                  <option
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </option>
                ))}
              </optgroup>
            )
          }
          // Renderiza uma opção simples
          return (
            <option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {item.label}
            </option>
          )
        })}
      </select>
    )
  },
)

Select.displayName = "Select"
export default Select