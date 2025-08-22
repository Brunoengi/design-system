import React, { createContext, useContext, useMemo } from "react"
import classNames from "classnames"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef } from "react"
import Select, { SelectProps } from "../Select/Select"

// --- Contexto para compartilhar props ---
type InputGroupContextType = VariantProps<typeof inputGroupVariants>
const InputGroupContext = createContext<InputGroupContextType | null>(null)

const useInputGroupContext = () => useContext(InputGroupContext)

// --- Variantes com CVA ---
// O container principal. `items-stretch` garante que todos os filhos tenham a mesma altura.
const inputGroupVariants = cva("relative flex items-stretch w-full", {
  variants: {
    size: {
      sm: "h-8 text-sm",
      md: "h-10 text-base",
      lg: "h-12 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const addonVariants = cva(
  "flex items-center justify-center border border-gray-300 bg-gray-50 text-gray-600 disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "px-2",
        md: "px-3",
        lg: "px-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

// Texto simples, sem bordas ou fundo.
const textVariants = cva("flex items-center text-gray-500 whitespace-nowrap", {
  variants: {
    size: {
      sm: "text-sm px-2",
      md: "text-base px-3",
      lg: "text-lg px-4",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const inputVariants = cva(
  "relative w-full border border-gray-300 text-gray-900 placeholder-gray-400 focus:z-10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70",
  {
    variants: {
      size: {
        sm: "px-2",
        md: "px-3",
        lg: "px-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

// --- Subcomponentes ---

const Addon = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const context = useInputGroupContext()
  return (
    <div
      ref={ref}
      className={classNames(addonVariants({ size: context?.size }), className)}
      {...props}
    />
  )
})
Addon.displayName = "InputGroup.Addon"

const Text = forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  const context = useInputGroupContext()
  return (
    <span
      ref={ref}
      className={classNames(textVariants({ size: context?.size }), className)}
      {...props}
    />
  )
})
Text.displayName = "InputGroup.Text"

const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  const context = useInputGroupContext()
  return (
    <input
      ref={ref}
      className={classNames(inputVariants({ size: context?.size }), className)}
      {...props}
    />
  )
})
Input.displayName = "InputGroup.Input"

const SelectComponent = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    // Este componente simplesmente repassa as props para o componente Select principal.
    // A lógica de estilo do InputGroup (bordas, etc.) será aplicada via className.
    return <Select ref={ref} {...props} />
  },
)
SelectComponent.displayName = "InputGroup.Select"

// --- Componente Principal ---
export interface InputGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupVariants> {
  label?: string
  helpText?: string
  error?: boolean
  disabled?: boolean
}

type InputGroupComponent = React.FC<InputGroupProps> & {
  Input: typeof Input
  Addon: typeof Addon
  Text: typeof Text
  Select: typeof SelectComponent
}

const InputGroup: InputGroupComponent = ({
  className,
  size,
  label,
  helpText,
  error,
  disabled,
  children,
  ...props
}) => {
  const context = useMemo(() => ({ size }), [size])
  const childrenArray = React.Children.toArray(children)

  const enhancedChildren = React.Children.map(childrenArray, (child, index) => {
    if (!React.isValidElement(child) || !child.props) {
      return child
    }

    const isBordered = child.type === Input ||
      child.type === Addon ||
      child.type === SelectComponent

    if (!isBordered) {
      return React.cloneElement(child, { disabled })
    }

    const isFirst = index === 0
    const isLast = index === childrenArray.length - 1

    const newClassName = classNames(child.props.className, {
      "rounded-l-md": isFirst,
      "rounded-r-md": isLast,
      "border-l-0 rounded-l-none": !isFirst,
      "rounded-r-none": !isLast,
    })

    return React.cloneElement(child, { disabled, className: newClassName })
  })

  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <InputGroupContext.Provider value={context}>
        <div className={classNames(inputGroupVariants({ size }), className)} {...props}>
          {enhancedChildren}
        </div>
      </InputGroupContext.Provider>
      {helpText && <p className={classNames("mt-1 text-sm", { "text-error": error, "text-gray-500": !error })}>{helpText}</p>}
    </div>
  )
}

InputGroup.Input = Input
InputGroup.Addon = Addon
InputGroup.Text = Text
InputGroup.Select = SelectComponent

export default InputGroup