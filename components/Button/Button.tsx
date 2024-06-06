import { VariantProps } from "class-variance-authority"
import { ButtonVariant } from "./Button.style"

export type ButtonProps = VariantProps<typeof ButtonVariant> & {
} & React.ButtonHTMLAttributes<HTMLButtonElement>


const Button = ({ children, className, disabled = false, ...rest }: ButtonProps) => {

  return <button
    className={`${ButtonVariant(rest)} ${className}`}
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
}

export default Button