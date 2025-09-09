import React from "react"
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from "@mui/material"

// A prop `component` do MUI substitui a antiga `element`.
// A prop `variant` do MUI substitui a antiga `size`.
// A prop `sx` do MUI pode ser usada para `fontWeight` e outras customizações.
export type TypographyProps = MuiTypographyProps

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (props, ref) => {
    return <MuiTypography ref={ref} {...props} />
  },
)

Typography.displayName = "Typography"

export default Typography