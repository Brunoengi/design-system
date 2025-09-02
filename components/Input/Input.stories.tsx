import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Input from "./Input";
import { AccountCircle } from "@mui/icons-material";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "number", "password", "email"],
      description: "O tipo do input.",
    },
    label: {
      control: "text",
      description: "O conteúdo do rótulo (label).",
    },
    variant: {
      control: "select",
      options: ["standard", "outlined", "filled"],
      description: "A variante de estilo a ser usada.",
    },
    disabled: {
      control: "boolean",
      description: "Se `true`, o input fica desabilitado.",
    },
    error: {
      control: "boolean",
      description: "Se `true`, o input indicará um estado de erro.",
    },
    helperText: {
      control: "text",
      description: "O texto de ajuda exibido abaixo do input.",
    },
    startAdornment: {
      control: false,
      description: "Conteúdo para exibir no início do input (prefixo).",
    },
    endAdornment: {
      control: false,
      description: "Conteúdo para exibir no final do input (sufixo).",
    },
  },
  args: {
    label: "Label",
    type: "text",
    variant: "outlined",
    disabled: false,
    error: false,
    helperText: "",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  name: "Padrão",
  args: {
    label: "Nome de Usuário",
  },
};

export const Numeric: Story = {
  name: "Numérico",
  args: {
    label: "Idade",
    type: "number",
  },
};

export const WithStartAdornment: Story = {
  name: "Com Prefixo (Start Adornment)",
  args: {
    label: "Preço",
    type: "number",
    startAdornment: "R$",
  },
};

export const WithEndAdornment: Story = {
  name: "Com Sufixo (End Adornment)",
  args: {
    label: "Peso",
    type: "number",
    endAdornment: "kg",
  },
};

export const WithIcon: Story = {
  name: "Com Ícone",
  args: {
    label: "Usuário",
    startAdornment: <AccountCircle />,
  },
};

export const Disabled: Story = {
  name: "Desabilitado",
  args: {
    label: "Campo Desabilitado",
    defaultValue: "Não pode editar",
    disabled: true,
  },
};

export const WithError: Story = {
  name: "Com Erro",
  args: {
    label: "Email",
    type: "email",
    error: true,
    helperText: "Endereço de email inválido.",
  },
};

export const WithGreekLetterSuffix: Story = {
  name: "Com Sufixo de Letra Grega",
  args: {
    label: "Resistência",
    type: "number",
    endAdornment: "Ω",
  },
};

export const WithSubscriptSuffix: Story = {
  name: "Com Sufixo em Subscrito",
  args: {
    label: "Fórmula",
    type: "text",
    defaultValue: "CO",
    endAdornment: <sub>2</sub>,
  },
};

export const WithComplexPrefix: Story = {
  name: "Com Prefixo Grego e Subscrito",
  args: {
    label: "Coeficiente",
    type: "number",
    startAdornment: (
      <>
        α<sub>2</sub>
      </>
    ),
  },
};

export const WithComplexLabel: Story = {
  name: "Com Label Complexo",
  args: {
    label: (
      <>
        μ<sub>s</sub>
      </>
    ),
    // Ao remover o defaultValue, o label começa dentro do campo.
    helperText: "Clique no campo para ver o label flutuar.",
  },
};

export const WithComplexLabelAndSuffix: Story = {
  name: "Com Label Complexo e Sufixo",
  args: {
    label: (
      <>
        ω<sub>t</sub>
      </>
    ),
    endAdornment: "cm",
  },
};

export const DisabledWithSuffix: Story = {
  name: "Desabilitado com Sufixo",
  args: {
    label: "Peso (Desabilitado)",
    defaultValue: "-",
    disabled: true,
    endAdornment: "kg",
  },
};
