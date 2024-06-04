import { cva, type VariantProps } from "class-variance-authority"

const ButtonVariants = cva(['rounded-sm', 'px-6', 'py-2'], {
  variants: {
    colorType: {
      primary: 'bg-very-dark hover:contrast-150 text-white',
      secondary: 'bg-dark hover:contrast-150 text-white',
      disabled: 'bg-disabled text-white',
      'outline-primary': 'text-very-dark bg-opacity-0 border-2 border-very-dark',
      'outline-secondary': 'text-dark bg-opacity-0 border-2 border-dark',
      'outline-disabled': 'text-disabled bg-opacity-0 border-2 border-disabled'
    },
    size:{
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
    }
  },
  defaultVariants: {
    colorType: 'primary',
    size: 'md'
  }
})

export type ButtonProps = VariantProps<typeof ButtonVariants> & {
  children: React.ReactNode;
  colorType: 'primary' | 'secondary' | 'disabled' | 'outline-primary' | 'outline-secondary' | 'outline-disabled'
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


const Button = ({ children, className, disabled = false, ...rest }: ButtonProps) => {

  return <button
    className={`${ButtonVariants(rest)} ${className}`}
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
}

export default Button