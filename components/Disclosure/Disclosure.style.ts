import { cva } from "class-variance-authority"

export const DisclosureStyles = {
  container: '',
  button: 'p-2 group w-full flex justify-between items-center',
  icon: 'w-5 group-data-[open]:rotate-180',
  painel: 'p-2'
}

export const DisclosureVariants = cva('', {
  variants: {
    textAlign: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify'
    },
    width: {
      'w-12': 'w-12',
      'w-16': 'w-16',
      'w-20': 'w-20',
      'w-24': 'w-24',
      'w-28': 'w-28',
      'w-32': 'w-32',
      'w-40': 'w-40',
      'full': 'w-full',
      'max': 'w-max',
      'min': 'w-min',
      '1/2': 'w-1/2',
      '1/3': 'w-1/3',
      '2/3': 'w-2/3',
      '1/4': 'w-1/4',
      '2/4': 'w-2/4',
      '3/4': 'w-3/4',
    },
    borderRadius: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg'
    },
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
      'black': 'bg-black',
      'white': 'bg-white',
      'transparent': 'bg-transparent'
    },
    borderWidth: {
      'none': 'border-0',
      'border-1': 'border',
      'border-2': 'border-2' 
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
    }
  },  
  defaultVariants: {
    width: 'full',
    borderWidth: 'none',
    borderColor: 'primary'
  }
})

