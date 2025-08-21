// components/Title/Title.stories.tsx
import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import Title, { TitleProps } from "./Title"

const meta: Meta<TitleProps> = {
  title: "Design System/Atoms/Title",
  component: Title,
  argTypes: {
    children: {
      control: "text",
      description: "O texto a ser exibido no título.",
    },
    element: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "div"],
      control: { type: "select" },
      description: "A tag HTML a ser usada para o título.",
    },
    backgroundType: {
      options: ["full", "inline", undefined],
      control: { type: "radio" },
      description:
        "Define o tipo de fundo: 'full' para largura total, 'inline' para envolver o texto.",
    },
    backgroundColor: {
      options: [
        "bg-blue-100",
        "bg-green-100",
        "bg-purple-100",
        "bg-red-100",
        "bg-yellow-100",
        "bg-gray-100",
        "bg-indigo-100",
        "bg-pink-100",
        undefined,
      ],
      control: { type: "select" },
      description:
        "Classes de CSS (Tailwind) para a cor de fundo e do texto. Funciona em conjunto com `backgroundType`.",
    },
    borderRadius: {
      options: [
        undefined,
        "rounded-sm",
        "rounded",
        "rounded-md",
        "rounded-lg",
        "rounded-xl",
        "rounded-full",
      ],
      control: { type: "select" },
      description:
        "Classes CSS para o arredondamento das bordas (ex: 'rounded-md').",
    },
    padding: {
      options: [
        undefined,
        "p-1",
        "p-2",
        "p-4",
        "p-6",
        "px-4 py-2",
        "px-8 py-4",
      ],
      control: { type: "select" },
      description: "Classes CSS para o preenchimento (ex: 'p-4').",
    },
    textColor: {
      options: [
        undefined,
        "text-slate-900",
        "text-red-600",
        "text-blue-600",
        "text-green-600",
        "text-purple-600",
        "text-yellow-600",
      ],
      control: { type: "select" },
      description: "Classes CSS para a cor do texto (ex: 'text-red-500').",
    },
    align: {
      options: ["left", "center", "right", "justify"],
      control: { type: "select" },
    },
    size: {
      options: ["xxs", "xs", "sm", "md", "xl", "title3", "title2", "title1"],
      control: { type: "select" },
    },
    weight: {
      options: ["normal", "medium", "bold"],
      control: { type: "select" },
    },
  },
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof Title>

export const Default: Story = {
  name: "Padrão (Sem Fundo)",
  args: {
    children: "Este é um Título Padrão",
    element: "h1",
    size: "title1",
    weight: "bold",
  },
}

export const WithFullBackground: Story = {
  name: "Com Fundo de Largura Total",
  args: {
    children: "Título com Fundo Total",
    element: "h2",
    size: "title2",
    weight: "bold",
    backgroundType: "full",
    backgroundColor: "bg-blue-100",
  },
  decorators: [
    Story => (
      <div style={{ border: "1px dashed #ccc" }}>
        <Story />
      </div>
    ),
  ],
}

export const WithInlineBackground: Story = {
  name: "Com Fundo Envolvendo o Texto",
  args: {
    children: "Título com Fundo Inline",
    element: "h2",
    size: "title2",
    weight: "bold",
    backgroundType: "inline",
    backgroundColor: "bg-green-100",
  },
}

export const CenteredTitle: Story = {
  name: "Título Centralizado com Fundo Total",
  args: {
    ...WithFullBackground.args,
    children: "Título Centralizado",
    align: "center",
    backgroundColor: "bg-purple-100 text-purple-800",
  },
  decorators: WithFullBackground.decorators,
}

export const DifferentElement: Story = {
  name: "Como H3 com Fundo Inline",
  args: {
    ...WithInlineBackground.args,
    children: "Subtítulo (H3)",
    element: "h3",
    size: "title3",
    backgroundColor: "bg-red-100",
  },
}

export const WithPaddingAndRadius: Story = {
  name: "Com Padding e Borda Arredondada",
  args: {
    children: "Título com Estilos Extras",
    element: "h2",
    size: "title2",
    weight: "bold",
    align: "center",
    backgroundType: "full",
    backgroundColor: "bg-yellow-100",
    padding: "p-4",
    borderRadius: "rounded-xl",
  },
  decorators: [
    Story => (
      <div style={{ border: "1px dashed #ccc", padding: "1rem" }}>
        <Story />
      </div>
    ),
  ],
}

export const WithTextColor: Story = {
  name: "Com Cor de Texto Customizada",
  args: {
    children: "Título com Texto Vermelho",
    element: "h2",
    size: "title2",
    weight: "bold",
    backgroundType: "inline",
    textColor: "text-red-600",
  },
}
