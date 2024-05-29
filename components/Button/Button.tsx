import {cva, type VariantProps} from "class-variance-authority"
import classNames from "classnames";

const colorVariantsMap = {
  primary: 'dark',
  secondary: 'light'
}

const ButtonVariants = cva(['text-primary', 'rounded-sm', 'px-6', 'py-2'], {
  variants: {
      colorType: {
        primary: `bg-${colorVariantsMap['primary']}`,
        secondary: `bg-${colorVariantsMap['secondary']}`,
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
      'hover:contrast-150' : `${disabled!}`,
    })} ${ButtonVariants(rest)} ${className}`}
    disabled={disabled}
    {...rest}
  >
    { children }
  </button>
}

export default Button