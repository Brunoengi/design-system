import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    severity: {
      control: "select",
      options: ["success", "info", "warning", "error"],
      description: "A severidade do alerta, que define a cor e o ícone.",
    },
    variant: {
      control: "select",
      options: ["standard", "filled", "outlined"],
      description: "A variante de estilo do alerta.",
    },
    title: {
      control: "text",
      description: "Título opcional para o alerta.",
    },
    children: {
      control: "text",
      description: "O conteúdo principal do alerta.",
    },
    onClose: {
      action: "closed",
      description:
        "Função chamada ao clicar no ícone de fechar. Renderiza um botão de fechar se for fornecida.",
    },
  },
  args: {
    children: "Esta é uma mensagem de alerta.",
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    severity: "success",
    children: "Isto é um alerta de sucesso — confira!",
  },
};

export const Info: Story = {
  args: {
    severity: "info",
    children: "Isto é um alerta de informação — confira!",
  },
};

export const Warning: Story = {
  args: {
    severity: "warning",
    children: "Isto é um alerta de aviso — confira!",
  },
};

export const Error: Story = {
  args: {
    severity: "error",
    children: "Isto é um alerta de erro — confira!",
  },
};

export const WithTitle: Story = {
  name: "Com Título",
  args: {
    severity: "success",
    title: "Sucesso",
    children: "A operação foi concluída com sucesso.",
  },
};

export const WithCloseAction: Story = {
  name: "Com Ação de Fechar",
  args: {
    severity: "warning",
    title: "Aviso",
    children: "Este alerta pode ser fechado pelo usuário.",
    onClose: () => {}, // Forneça uma função vazia para o Storybook renderizar o botão
  },
};

export const Filled: Story = {
  name: "Variante: Filled",
  args: {
    variant: "filled",
    severity: "info",
    children: "Isto é um alerta 'filled' de informação.",
  },
};