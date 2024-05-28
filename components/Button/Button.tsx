export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function getVariant(variant: ButtonProps['variant'], disabled: ButtonProps['disabled']) {
  switch (variant) {
    case 'primary':
      return disabled ? 'bg-disabled text-primary' : 'bg-dark text-primary'
    case 'secondary':
      return disabled ? 'bg-disabled text-primary' : 'bg-light text-primary'
    default:
      return disabled ? 'text-disabled' : 'text-primary'
  }
}

const Button = ({ variant = 'primary', children, className, disabled, ...rest }: ButtonProps) => {
  return <button
    className={`hover:contrast-150 rounded-sm px-6 py-2 ${getVariant(variant, disabled)} ${className}`}
    disabled={disabled}
    {...rest}
  >
    { children }
  </button>
}

export default Button