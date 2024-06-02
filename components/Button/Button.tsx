import {cva, type VariantProps} from "class-variance-authority"
import classNames from "classnames";

const ButtonVariants = cva(['text-white', 'rounded-sm', 'px-6', 'py-2'], {
  variants: {
      colorType: {
        primary: 'bg-very-dark',
        secondary: 'bg-dark',
        disabled: 'bg-disabled'
      },
    kind: {
      solid: '',
      outline: `bg-opacity-0 border-2 border-gray-500 text-gray-500`,
    }
  },
  defaultVariants: {
    colorType: 'primary',
    kind: 'solid'
  }
})

export type ButtonProps = VariantProps<typeof ButtonVariants> & {
  children: React.ReactNode;
  colorType?: 'primary' | 'secondary' | 'disabled';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


const Button = ({ children, className, disabled = false, ...rest }: ButtonProps) => {
  
  return <button
    className={` ${classNames({
      'hover:contrast-150' : `${rest.colorType !== 'disabled'}`,
    })} ${ButtonVariants(rest)} ${className}`}
    disabled={disabled}
    {...rest}
  >
    { children }
  </button>
}

export default Button