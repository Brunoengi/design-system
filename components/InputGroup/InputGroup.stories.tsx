import React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import InputGroup, { InputGroupProps } from "./InputGroup"
import { EnvelopeIcon, UserIcon } from "@heroicons/react/24/solid"

const meta: Meta<InputGroupProps> = {
  title: "Design System/Molecules/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Define o tamanho do grupo de input.",
    },
    label: {
      control: "text",
      description: "Rótulo exibido acima do grupo.",
    },
    helpText: {
      control: "text",
      description: "Texto de ajuda ou erro exibido abaixo do grupo.",
    },
    error: {
      control: "boolean",
      description: "Define o estado de erro.",
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o grupo de input e seus addons.",
    },
    children: {
      control: false,
      description: "Os componentes filhos: Input, Addon, Text, Select.",
    },
  },
  args: {
    size: "md",
    label: "Label",
    helpText: "",
    error: false,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof InputGroup>

export const Default: Story = {
  name: "Padrão",
  args: {
    label: "Nome de usuário",
  },
  render: args => (
    <div style={{ width: "320px" }}>
      <InputGroup {...args}>
        <InputGroup.Input placeholder="seu.nome" />
      </InputGroup>
    </div>
  ),
}

export const WithPrefix: Story = {
  name: "Com Prefixo",
  args: {
    label: "Website",
  },
  render: args => (
    <div style={{ width: "320px" }}>
      <InputGroup {...args}>
        <InputGroup.Addon>https://</InputGroup.Addon>
        <InputGroup.Input placeholder="meusite.com" />
      </InputGroup>
    </div>
  ),
}

export const WithSuffix: Story = {
  name: "Com Sufixo",
  args: {
    label: "Peso",
  },
  render: args => (
    <div style={{ width: "320px" }}>
      <InputGroup {...args}>
        <InputGroup.Input type="number" placeholder="70" />
        <InputGroup.Addon>kg</InputGroup.Addon>
      </InputGroup>
    </div>
  ),
}

export const WithIcon: Story = {
  name: "Com Ícone",
  args: {
    label: "Email",
  },
  render: args => (
    <div style={{ width: "320px" }}>
      <InputGroup {...args}>
        <InputGroup.Addon>
          <EnvelopeIcon className="h-5 w-5" />
        </InputGroup.Addon>
        <InputGroup.Input type="email" placeholder="voce@email.com" />
      </InputGroup>
    </div>
  ),
}

export const HorizontalGroup: Story = {
  name: "Grupo Horizontal (Texto + Input)",
  args: {
    label: "Dimensões (Largura x Altura)",
  },
  render: args => (
    <div style={{ width: "320px" }}>
      <InputGroup {...args}>
        <InputGroup.Input type="number" placeholder="10.0" />
        <InputGroup.Text>x</InputGroup.Text>
        <InputGroup.Input type="number" placeholder="20.0" />
        <InputGroup.Addon>cm</InputGroup.Addon>
      </InputGroup>
    </div>
  ),
}

export const WithSelect: Story = {
  name: "Com Componente Select",
  args: {
    label: "Buscar por Categoria",
  },
  render: args => (
    <div style={{ width: "420px" }}>
      <InputGroup {...args}>
        <InputGroup.Input placeholder="Nome do produto..." />
        <InputGroup.Select
          width="w-64" // Propriedade do componente Select para definir uma largura
          contents={{
            name: "category",
            id: "category",
            options: [
              { value: "all", label: "Todas as Categorias" },
              { value: "eletronicos", label: "Eletrônicos" },
              { value: "livros", label: "Livros" },
            ],
          }}
        />
      </InputGroup>
    </div>
  ),
}

export const WithError: Story = {
  name: "Com Erro",
  args: {
    ...Default.args,
    error: true,
    helpText: "O nome de usuário é obrigatório.",
  },
  render: Default.render,
}

export const Disabled: Story = {
  name: "Desabilitado",
  args: {
    label: "Usuário",
    disabled: true,
  },
  render: args => (
    <div style={{ width: "320px" }}>
      <InputGroup {...args}>
        <InputGroup.Addon>
          <UserIcon className="h-5 w-5" />
        </InputGroup.Addon>
        <InputGroup.Input placeholder="Não pode editar" />
      </InputGroup>
    </div>
  ),
}