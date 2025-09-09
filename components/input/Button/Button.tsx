import React from "react";
import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { useTheme } from '@mui/material/styles'

export type BorderRadiusOptions = 'none' | 'sm' | 'md' | 'lg' | 'full'

export type ButtonProps = MuiButtonProps & {
  /**
   * Define o raio da borda do botão.
   * 'sm': 2px, 'md': 4px (padrão do tema), 'lg': 8px, 'full': 9999px.
   * @default 'sm'
   */
  borderRadius?: BorderRadiusOptions | number | string
}

const Button: React.FC<ButtonProps> = ({
  borderRadius = 'sm',
  sx,
  ...props
}) => {
  const theme = useTheme()

  const getBorderRadius = () => {
    if (!borderRadius) return undefined

    switch (borderRadius) {
      case 'none':
        return 0
      case 'sm':
        return '2px'
      case 'md':
        return '4px' // Typically 4px
      case 'lg':
        return '8px'
      case 'full':
        return '9999px'
      default:
        return borderRadius
    }
  }

  return (
    <MuiButton
      {...props}
      // Usamos '&&' para aumentar a especificidade do seletor CSS.
      // Isso garante que nosso borderRadius sobrescreva os padrões do MuiButtonBase.
      sx={{ ...sx, borderRadius: undefined, '&&': { borderRadius: getBorderRadius() } }}
    >
      {props.children || 'Text'}
    </MuiButton>
  )
}

export default Button