import { cva } from "class-variance-authority";

export const ButtonVariant = cva('text-white py-1 px-3', {
  variants: {
    backgroundColor: {
      'primary': 'bg-primary',
      'secondary': 'bg-secondary',
      'tertiary': 'bg-tertiary',
      'quaternary': 'bg-quaternary',
      'success': 'bg-success',
      'error': 'bg-error',
      'warning': 'bg-warning',
      'disabled': 'bg-disabled',
      'transparent': 'bg-transparent'
    },
    borderRadius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg'
    }
  },
  defaultVariants: {
    backgroundColor: 'primary',
    borderRadius: 'sm'
  }
}) 