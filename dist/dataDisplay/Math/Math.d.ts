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
declare const Math: ({ expression, inline }: MathProps) => import("react/jsx-runtime").JSX.Element;
export default Math;
