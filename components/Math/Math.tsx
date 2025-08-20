import React from 'react'
import { MathJax } from 'better-react-mathjax'

export interface MathProps {
  /**
   * A expressão matemática a ser renderizada, no formato AsciiMath.
   * Exemplos: "a/b", "sqrt(4)", "x^2 + y_1"
   */
  MathExpression: string
  /**
   * Se true, a expressão será renderizada inline (no meio do texto).
   * Se false, será renderizada como um bloco de exibição.
   * @default false
   */
  inline?: boolean
}

/**
 * Um componente para renderizar expressões matemáticas usando MathJax.
 * Este componente DEVE ser usado dentro de um `MathJaxContext` provider.
 */
const Math: React.FC<MathProps> = ({ MathExpression, inline = false }) => {
  // A expressão é envolvida por crases para ser corretamente interpretada pelo AsciiMath.
  const formattedExpression = `\`${MathExpression}\``

  return (
    // A classe 'sosec-math-container' é usada em 'globals.css' para isolar os estilos do MathJax.
    <span className="sosec-math-container">
      <MathJax inline={inline}>{formattedExpression}</MathJax>
    </span>
  )
}

export default Math