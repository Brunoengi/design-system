import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const textVariants = cva("", {
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify"
    },
    size: {
      xxs: "text-xxs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      xl: "text-xl",
      title1: "text-txl",
      title2: "text-tlg",
      title3: "text-tmd",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold"
    },
    defaultVariants: {
      size: "sm",
    },
  },
})

export type TypographyProps = VariantProps<typeof textVariants> & {
  children?: React.ReactNode
  element?: keyof JSX.IntrinsicElements
} & JSX.IntrinsicElements["p"]

const Typography = ({
  children,
  element = "p",
  className,
  ...rest
}: TypographyProps) => {
  const Element = element as any
  return (
    <Element className={`${textVariants(rest)} ${className}`} {...rest}>
      {children}
    </Element>
  )
}

export default Typography