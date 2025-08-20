import type { Preview } from "@storybook/react";
import "../styles/globals.css"
import React from "react";
import { MathJaxContext } from "better-react-mathjax";

// Configuração global para o MathJax que será usada em todo o Storybook
const mathJaxConfig = {
  loader: { load: ['input/asciimath', 'output/svg'] },
  svg: { fontCache: 'global' },
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: "alphabetical",
        locales: "pt-BR"
      }
    }
  },
  decorators: [
    (Story) => React.createElement(MathJaxContext, { config: mathJaxConfig }, React.createElement(Story)),
  ],
};

export default preview;
