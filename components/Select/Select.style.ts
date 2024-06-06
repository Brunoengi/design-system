import { cva } from "class-variance-authority"
import { theme } from "@/tailwind.config"

export const SelectStyles = {
  select: "text-gray-800 py-2 mt-1 max-h-60 overflow-auto rounded-md py-1 text-sm shadow-lg pl-3 pr-3",
  option: "text-gray-800 relative cursor-default select-none py-2 pl-10 pr-4 rounded-none "
}

export const SelectVariants = cva("", {
  variants: {
    width: {
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
    background: {
      'white': 'bg-white',
      'gray-100': 'bg-gray-100',
      'gray-200': 'bg-gray-200',
      'gray-900': 'bg-gray-900',
    },
    'opacity': theme.opacity,
    'border-color': theme.colors
  },  
  defaultVariants: {
    width: 'full',
    background: 'gray-200'
  }
})

