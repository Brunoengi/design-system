import {cva, type VariantProps} from "class-variance-authority"
import { SelectStyles } from "./Select.style"
import { SelectVariants } from "./Select.style"


export type SelectProps = VariantProps<typeof SelectVariants> & {
  contents: {
    name?: string
    id?: string
    options: {
      value: string
      label: string
    }[]
  }
} & React.HTMLAttributes<HTMLSelectElement>

const Select = ({ contents, className, ...rest }: SelectProps) => {
  return (
    <>
    <select
    className={`${SelectStyles.select} ${SelectVariants(rest)} ${className}`}
      name={contents.name}
      id={contents.id}
    >
      {contents.options.map(option =>
         <option
          className={SelectStyles.option}
          value={option.value}
         >
          {option.label}
         </option>)}
    </select>
    </>
    )
}

export default Select