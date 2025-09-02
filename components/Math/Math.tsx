import React from "react";
import { InlineMath, BlockMath } from "react-katex";

// Importante: O CSS do KaTeX deve ser importado em algum lugar global da sua aplicação
// (como no App.tsx ou no preview.js do Storybook) para que as fórmulas sejam estilizadas corretamente.
import "katex/dist/katex.min.css";

export interface MathProps {
  /**
   * A expressão matemática a ser renderizada, no formato LaTeX.
   * Exemplo: "\\frac{1}{2}", "x^2 + y_1"
   */
  expression: string;
  /**
   * Se true, a expressão será renderizada inline (no meio do texto).
   * Se false, será renderizada como um bloco separado, geralmente centralizado.
   * @default false
   */
  inline?: boolean;
}

/**
 * Componente para renderizar expressões matemáticas usando a biblioteca react-katex.
 * Ele renderiza a expressão em formato LaTeX como um elemento inline ou de bloco.
 */
const Math = ({ expression, inline = false }: MathProps) => {
  if (inline) {
    // Usa <InlineMath> para matemática que flui com o texto.
    return <InlineMath math={expression} />;
  }

  // Usa <BlockMath> para matemática que ocupa sua própria linha.
  return <BlockMath math={expression} />;
};

export default Math;