import { VariantProps } from "class-variance-authority"
import Box, { BoxProps } from "../Box/Box"
import Input, { InputProps } from "../Input/Input"
import Select, { SelectProps } from "../Select/Select"
import { InputGroupVariants, InputGroupStyles } from "./InputGroup.style"

export type InputGroupProps = VariantProps<typeof InputGroupVariants> & {
  leftBox: BoxProps
  rightBox: BoxProps
  type: 'select' | 'input'
  DataElement: InputProps | SelectProps
} & React.InputHTMLAttributes<HTMLInputElement>

const InputGroup = ({ leftBox, rightBox, type, DataElement, className, ...rest}: InputGroupProps) => {
  
  return (
    <div
    className={`${InputGroupStyles.container} ${InputGroupVariants(rest)} ${className}`}
      {...rest}
    >
    <Box
      {...leftBox}
    />
    { type == 'select' ? 
    <Select
      {...DataElement as SelectProps}  
    /> 
    : 
    <Input
    {...DataElement as InputProps} 
    /> }
    <Box 
    {...rightBox}
    />
    </div>
  )
}

export default InputGroup