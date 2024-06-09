import { VariantProps } from "class-variance-authority"
import Box, { BoxProps } from "../Box/Box"
import Input, { InputProps } from "../Input/Input"
import Select, { SelectProps } from "../Select/Select"
import { InputGroupVariants, InputGroupStyles } from "./InputGroup.style"

export type InputGroupProps = VariantProps<typeof InputGroupVariants> & {
  leftBox: BoxProps
  rightBox: BoxProps
  type: 'select' | 'input'
  DataElement?: InputProps | SelectProps
} & React.InputHTMLAttributes<HTMLInputElement>

const InputGroup = ({ leftBox, rightBox, type, DataElement, className, internalBorderRadius, internalBorderWidth, borderColor, ...rest}: InputGroupProps) => {
  
  const middleComponent = ({type, DataElement}: {type: InputGroupProps['type'], DataElement: any}) => {
    const Component = type == 'select' ? Select : Input
    
    return (
    <Component
    {...DataElement}
    className={`${InputGroupVariants({internalBorderRadius, internalBorderWidth, borderColor})} ${DataElement?.className}`}
      
    />
    )
  }

  return (
    <div
    className={`${InputGroupStyles.container} ${InputGroupVariants({...rest, borderColor})} ${className}`}
      {...rest}
    >
    <Box
      {...leftBox}
      className={`${InputGroupStyles.leftElement} ${leftBox.className}`}
    />
    {middleComponent({type, DataElement})}
    <Box 
    {...rightBox}
    className={`${InputGroupStyles.rightElement} ${rightBox.className}`}
    />
    </div>
  )
}

export default InputGroup