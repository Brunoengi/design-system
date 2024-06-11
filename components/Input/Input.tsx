import { VariantProps } from "class-variance-authority"
import { InputVariant } from "./Input.style"

export type InputProps = VariantProps<typeof InputVariant> & {
  minValue?: number
  maxValue?: number
  minDigits?: number
  maxDigits?: number
  value?:number
}  
  & React.InputHTMLAttributes<HTMLInputElement>


const Input = ({ type='number', value, className, ...rest }: InputProps) => {
  return ( 
    <input
      type={type}
      className={`${InputVariant(rest)} ${className}`}
      value={value}
      min={rest.minValue}
      max={rest.maxValue}
    >
    </input>
  )
}

export default Input