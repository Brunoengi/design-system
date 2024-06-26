import { cva } from "class-variance-authority"

export const InputGroupStyles = {
  container: 'flex items-center',
  leftElement: 'flex-1 px-2 min-w-14',
  centralElement: 'flex-1',
  rightElement: 'flex-1 px-2 min-w-14'
}

export const InputGroupVariants = cva('py-0 shadow-lg text-center', {
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
      'gray-100': 'bg-gray-100',
      'gray-200': 'bg-gray-200',
      'gray-800': 'bg-gray-800',
      'gray-900': 'bg-gray-900',
      'white': 'bg-white',
      'black': 'bg-black',
      'transparent': 'bg-transparent'
    },
    textColor: {
      'primary': 'text-primary',
      'secondary': 'text-secondary',
      'tertiary': 'text-tertiary',
      'quaternary': 'text-quaternary',
      'success': 'text-success',
      'error': 'text-error',
      'warning': 'text-warning',
      'disabled': 'text-disabled',
      'gray-100': 'text-gray-100',
      'gray-200': 'text-gray-200',
      'gray-800': 'text-gray-800',
      'gray-900': 'text-gray-900',
      'black': 'text-black',
      'white': 'text-white',
      'transparent': 'text-transparent'
    },
    externalBorderRadius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg'
    },
    internalBorderRadius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg'
    },
    externalBorderWidth: {
      'none': 'border-0',
      'border-1': 'border',
      'border-2': 'border-2' 
    },
    internalBorderWidth: {
      'none': 'border-0',
      'border-1': 'border-r border-l',
      'border-2': 'border-x-2' 
    },
    borderColor: {
      'primary': 'border-primary',
      'secondary': 'border-secondary',
      'tertiary': 'border-tertiary',
      'quaternary': 'border-quaternary',
      'success': 'border-success',
      'error': 'border-error',
      'warning': 'border-warning',
      'disabled': 'border-disabled'
    },
    width: {
      'w-60': 'w-60',
      'w-64': 'w-64',
      'w-72': 'w-72',
      'w-80': 'w-80',
      'w-96': 'w-96',
      'full': 'w-full',
      'max': 'w-max',
      'min': 'w-min',
      '1/2': 'w-1/2',
      '1/3': 'w-1/3',
      '2/3': 'w-2/3',
      '1/4': 'w-1/4',
      '2/4': 'w-2/4',
      '3/4': 'w-3/4'
    },
  },
  defaultVariants: {
    externalBorderRadius: 'sm',
    externalBorderWidth: 'border-1',
    internalBorderRadius: 'sm',
    internalBorderWidth: 'border-1',
    borderColor: 'primary'
  }
})
