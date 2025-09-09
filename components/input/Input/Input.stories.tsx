import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Input from "./Input";
import { AccountCircle, Search } from "@mui/icons-material";

const meta: Meta<typeof Input> = {
  title: "Input/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
      options: ["standard", "outlined", "filled", "borderless"],
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
    borderRadius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full', 20],
      description:
        "Define o raio da borda. Pode ser um valor predefinido ('none', 'sm', 'md', 'lg', 'full') ou um valor customizado. Só funciona com a variante 'outlined'.",
    },
    roundedCorners: {
      control: 'check',
      options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
      description:
        "Define quais cantos devem ser arredondados. Só funciona com a variante 'outlined' e se `borderRadius` for fornecido.",
    },
    borders: {
      control: 'check',
      options: ['top', 'right', 'bottom', 'left'],
      description:
        "Define quais lados devem ter uma borda visível. Só funciona com a variante 'outlined'.",
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
    size: {
      control: "radio",
      options: ["small", "medium"],
      description: "O tamanho (densidade) do input.",
    },
    maxLength: {
      control: 'number',
      description:
        'Define o número máximo de caracteres. A largura do input será ajustada automaticamente.',
    },
  },
  args: {
    label: "Label",
    type: "text",
    variant: "outlined",
    disabled: false,
    error: false,
    helperText: "",
    size: "medium",
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

export const Decimal: Story = {
  name: 'Decimal',
  args: {
    label: 'Preço',
    type: 'number',
    startAdornment: 'R$',
    helperText: 'Permite números e um separador decimal (ponto ou vírgula).',
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

export const WithMaxLength: Story = {
  name: 'Com Limite de Dígitos (maxLength)',
  args: {
    label: 'CVC',
    type: 'number',
    maxLength: 3,
    helperText: 'Largura ajustada e limite de 3 dígitos.',
  },
};

export const WithCustomBorderRadius: Story = {
  name: 'Com Raio de Borda (Large)',
  args: {
    label: 'Borda Arredondada (lg)',
    borderRadius: 'lg',
  },
};

export const WithSpecificRoundedCorners: Story = {
  name: 'Com Cantos Arredondados Específicos',
  args: {
    label: 'Cantos Esquerdos',
    borderRadius: 16,
    roundedCorners: ['topLeft', 'bottomLeft'],
  },
};

export const WithCustomBorders: Story = {
  name: 'Com Bordas Customizadas',
  args: {
    label: 'Apenas Borda Inferior',
    borders: ['bottom'],
    helperText: "Estilo 'underline' usando a variante 'outlined'",
  },
};

export const WithCombinedStyles: Story = {
  name: 'Com Estilos Combinados',
  args: {
    label: 'Sem Borda Superior',
    borders: ['right', 'bottom', 'left'],
    borderRadius: 12,
    roundedCorners: ['bottomLeft', 'bottomRight'],
  },
};

export const Borderless: Story = {
  name: "Sem Bordas (Borderless)",
  args: {
    label: "Busca",
    variant: "borderless",
    defaultValue: "Input sem bordas",
  },
};

export const BorderlessWithAdornment: Story = {
  name: "Sem Bordas com Prefixo",
  args: {
    label: "Usuário",
    variant: "borderless",
    startAdornment: <AccountCircle />,
  },
};

export const Small: Story = {
  name: "Pequeno (Small)",
  args: {
    label: "Campo Pequeno",
    size: "small",
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

export const PillShape: Story = {
  name: 'Com Borda "Pill" (Full)',
  args: {
    label: 'Busca...',
    borderRadius: 'full',
    startAdornment: <Search />,
  },
};
