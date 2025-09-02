import type { Meta, StoryObj } from "@storybook/react";
import Math from "./Math";

// Com react-katex, você só precisa importar o CSS.
// O ideal é fazer isso uma vez no seu .storybook/preview.js ou .storybook/preview.tsx
import "katex/dist/katex.min.css";

const meta: Meta<typeof Math> = {
  title: "Design System/Atoms/Math Text",
  component: Math,
  // O decorator com MathJaxContext não é mais necessário!
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof Math>;

export const Primary: Story = {
  args: { expression: "\\frac{10}{4x} \\approx 2^{12}" },
};
export const BasicOperators: Story = {
  args: { expression: "1 + 1 = 2 - 0 = 8/4 = 2 \\times 1" },
};
export const RelationsSymbols: Story = {
  args: { expression: "= \\neq < > \\leq \\geq \\in \\notin \\subset \\supset" },
};
export const Arrows: Story = {
  args: {
    expression:
      "\\uparrow \\downarrow \\rightarrow \\leftarrow \\leftrightarrow \\Rightarrow \\Leftarrow \\Leftrightarrow",
  },
};
export const GreekLetters: Story = {
  args: {
    expression:
      "\\alpha, \\beta, \\gamma, \\Gamma, \\delta, \\Delta, \\epsilon, \\zeta, \\eta, \\theta, \\Theta",
  },
};
export const Indices: Story = {
  args: {
    // Note o uso de chaves {} para agrupar múltiplos caracteres em super/subscritos
    expression: "x^2, e^{2x}, x_\\alpha, x_{10}, \\omega_{cd}",
  },
};
export const Functions: Story = {
  args: {
    // Funções em LaTeX usam uma barra invertida para garantir o espaçamento correto
    expression:
      "\\sin(x), \\cos(x), \\tan(x), \\log(x), \\ln(x), \\lim_{x \\to \\infty} f(x)",
  },
};
