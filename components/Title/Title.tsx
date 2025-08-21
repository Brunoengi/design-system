// components/Title/Title.tsx
import React from "react"
import classNames from "classnames"

import Typography, { TypographyProps } from "../Typography/Typography"

// Reutilizamos a maioria das props de Typography, mas adicionamos as nossas.
export type TitleProps = TypographyProps & {
  /**
   * Define o tipo de fundo a ser aplicado ao título.
   * 'full' - o fundo ocupa toda a largura disponível.
   * 'inline' - o fundo envolve apenas o texto.
   */
  backgroundType?: "full" | "inline"
  /**
   * Classes CSS para a cor de fundo. Ex: 'bg-blue-100'.
   * Requer que `backgroundType` seja definido.
   */
  backgroundColor?: string
  /**
   * Classes CSS para o arredondamento das bordas. Ex: 'rounded-md'.
   */
  borderRadius?: string
  /**
   * Classes CSS para o preenchimento. Ex: 'p-4'.
   */
  padding?: string

  textColor?: string
}

function Title({
  children,
  element = "h2",
  backgroundType,
  backgroundColor,
  borderRadius,
  padding,
  className,
  textColor,
  ...rest
}: TitleProps) {
  // Se o fundo for 'inline', envolvemos o texto com um <span> que recebe a cor de fundo.
  if (backgroundType === "inline" && backgroundColor) {
    const spanClasses = classNames(
      padding || "px-2 py-1", // Usa a prop de padding ou um valor padrão
      borderRadius,
      backgroundColor,
    )
    const typographyClassesForInline = classNames(className, textColor)
    return (
      <Typography element={element} className={typographyClassesForInline} {...rest}>
        <span className={spanClasses}>{children}</span>
      </Typography>
    )
  }

  // Para fundo 'full', aplicamos as classes diretamente no Typography.
  const fullBackgroundClasses =
    backgroundType === "full" && backgroundColor
      ? classNames(
          "w-full",
          padding || "p-2", // Usa a prop de padding ou um valor padrão
          borderRadius,
          backgroundColor,
        )
      : ""

  const typographyClasses = classNames(
    className,
    fullBackgroundClasses,
    textColor,
  )

  return (
    <Typography element={element} className={typographyClasses} {...rest}>
      {children}
    </Typography>
  )
}

export default Title