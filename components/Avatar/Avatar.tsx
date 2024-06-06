import {cva, type VariantProps} from "class-variance-authority"
import AvatarIcon from "./AvatarIcon";
import AvatarImage from "./AvatarImage";
import classNames from "classnames";

const AvatarVariants = cva('', {
  variants: {
    size: {
      xs: ['w-5', 'h-5'],
      sm: ['w-6', 'h-6'],
      md: ['w-7', 'h-7'],
      lg: ['w-8', 'h-8']
    }
  },
  defaultVariants: {
    size: 'xs'
  }
})

export type AvatarProps = VariantProps<typeof AvatarVariants> & {
  image?: string,
  description?: string
} & React.HTMLAttributes<HTMLDivElement>

const Icon = ({ size = 'sm',image, description='', className, ...rest }: AvatarProps) => {

  const avatarComponent = image ? (
    <AvatarImage src={image} altDescription={description}/>
  ) : (
    <AvatarIcon />
  )

  return <div
  {...rest}
  className={`${AvatarVariants({ size })} ${classNames(['rounded-full', 'flex', 'justify-center', 'text-slate-400'])} ${className}`}
  >
    {avatarComponent}
  </div>
}

export default Icon