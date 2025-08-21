import { cva } from "class-variance-authority";

export const ButtonVariant = cva('text-white py-2 px-6', {
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
    },
    width: {
      full: 'w-full',
      auto: 'w-auto',
      fit: 'w-fit',
      'w-20': 'w-20',
      'w-24': 'w-24',
      'w-32': 'w-32',
      'w-40': 'w-40', 
      'w-48': 'w-48',
      'w-56': 'w-56',
      'w-64': 'w-64',
    },
    
  },
  defaultVariants: {
    backgroundColor: 'primary',
    borderRadius: 'sm',
  },
  
}) 