import { cva } from "class-variance-authority";

export const DividerVariants = cva('', {
  variants: {
    height: {
      "1px": "h-[1px]",
      "2px": "h-[2px]",
    },
    backgroundColor: {
      'primary': 'bg-primary',
      'secondary': 'bg-secondary',
      'tertiary': 'bg-tertiary',
      'quaternary': 'bg-quaternary',
      'success': 'bg-success',
      'error': 'bg-error',
      'warning': 'bg-warning',
    }
  },
  defaultVariants: {
    height: "1px",
    backgroundColor: "primary"
  }
})