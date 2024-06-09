import { cva } from "class-variance-authority"

export const SelectStyles = {
  select: " py-2 px-2",
  option: " relative cursor-default select-none py-2 pl-10 pr-4 rounded-none "
}

export const SelectVariants = cva("text-center", {
  variants: {
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
    backgroundColor: 'transparent',
    borderWidth: 'none',
  }
})

