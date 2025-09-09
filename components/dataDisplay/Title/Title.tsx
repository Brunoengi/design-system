// components/Title/Title.tsx
import React from "react"
import classNames from "classnames"

import Typography, { TypographyProps } from "../Typography/Typography"

// O componente Title é um wrapper em torno do Typography,
// com o objetivo principal de fornecer um padrão semântico (como `h2`).
// A estilização customizada deve ser feita através da prop `sx` ou `className`.
export type TitleProps = TypographyProps

function Title({
  children,
  component = "h2",
  className,
  ...rest
}: TitleProps) {
  return (
    <Typography component={component} className={className} {...rest}>
      {children}
    </Typography>
  )
}

export default Title