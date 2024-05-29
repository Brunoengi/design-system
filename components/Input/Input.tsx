import {cva, type VariantProps} from 'class-variance-authority'

const InputVariants = cva('', {
  variants: {
    status: {
      success: '',
      error: ''
    }
  }
})

export type InputProps = VariantProps<typeof InputVariants> & {
  value?: number
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = ({}: InputProps) => {

}