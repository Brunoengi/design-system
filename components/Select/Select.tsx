import {cva, type VariantProps} from "class-variance-authority"

const SelectVariants = cva('', {
  variants: {
    width: {
      default: 'w-min',
      
    }
  }
})

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
    <select
    className={className}
      name={contents.name}
      id={contents.id}
      {...rest}
    >
      {contents.options.map(option =>
         <option
          value={option.value}
         >
          {option.label}
         </option>)}
    </select>
  )
}

export default Select