import { jsx as _jsx } from "react/jsx-runtime";
import { InlineMath, BlockMath } from "react-katex";
// Importante: O CSS do KaTeX deve ser importado em algum lugar global da sua aplicação
// (como no App.tsx ou no preview.js do Storybook) para que as fórmulas sejam estilizadas corretamente.
import "katex/dist/katex.min.css";
/**
 * Componente para renderizar expressões matemáticas usando a biblioteca react-katex.
 * Ele renderiza a expressão em formato LaTeX como um elemento inline ou de bloco.
 */
var Math = function (_a) {
    var expression = _a.expression, _b = _a.inline, inline = _b === void 0 ? false : _b;
    if (inline) {
        // Usa <InlineMath> para matemática que flui com o texto.
        return _jsx(InlineMath, { math: expression });
    }
    // Usa <BlockMath> para matemática que ocupa sua própria linha.
    return _jsx(BlockMath, { math: expression });
};
export default Math;
