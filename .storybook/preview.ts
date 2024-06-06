import type { Preview } from "@storybook/react";
import "../styles/globals.css"

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
};

export default preview;
