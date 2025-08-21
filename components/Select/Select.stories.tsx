import type { Meta, StoryObj } from "@storybook/react"
import Select, {
  SelectProps,
  SelectOption,
  SelectOptionGroup,
} from "./Select"

const simpleOptions: SelectOption[] = [
  { value: "500", label: "500 (CA-50)" },
  { value: "600", label: "600 (CA-60)" },
  { value: "disabled", label: "Opção Desabilitada", disabled: true },
]

const groupedOptions: (SelectOption | SelectOptionGroup)[] = [
  {
    label: "Frutas",
    options: [
      { value: "apple", label: "Maçã" },
      { value: "banana", label: "Banana" },
    ],
  },
  {
    label: "Vegetais",
    options: [
      { value: "carrot", label: "Cenoura" },
      { value: "broccoli", label: "Brócolis", disabled: true },
    ],
  },
  { value: "other", label: "Outro" },
]

const meta: Meta<SelectProps> = {
  title: "Design System/Molecules/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  // Fornecer args padrão no nível do meta garante que o componente sempre
  // receba as props necessárias, evitando crashes na página de documentação
  // ou ao alternar entre estórias.
  args: {
    contents: {
      name: "default-select",
      id: "default-select",
      options: simpleOptions, // Usando as opções simples como padrão
    },
  },
  argTypes: {
    contents: {
      control: "object",
      description:
        "Objeto contendo nome, id e as opções (simples ou agrupadas).",
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o campo de seleção.",
    },
    width: {
      options: [
        "w-32",
        "w-40",
        "w-64",
        "full",
        "max",
        "min",
        "1/2",
        "1/3",
        "1/4",
      ],
      control: "select",
      description: "Controla a largura do componente.",
    },
    backgroundColor: {
      options: ["white", "gray-100", "gray-200", "transparent"],
      control: {
        type: "select",
      },
      description: "Controla a cor de fundo.",
    },
    borderRadius: {
      options: ["none", "sm", "md", "lg"],
      control: {
        type: "select",
      },
      description: "Controla o arredondamento das bordas.",
    },
    borderColor: {
      options: ["primary", "secondary", "error", "disabled"],
      control: {
        type: "select",
      },
      description: "Controla a cor da borda.",
    },
    borderWidth: {
      options: ["none", "border-1", "border-2"],
      control: {
        type: "select",
      },
      description: "Controla a espessura da borda.",
    },
  },
}
export default meta

export const Default: StoryObj<SelectProps> = {
  name: "Padrão com Opções Simples",
  args: {
    width: "w-64",
    contents: {
      name: "steel",
      id: "steel",
      options: simpleOptions,
    },
  },
}

export const WithOptgroup: StoryObj<SelectProps> = {
  name: "Com Grupos (optgroup)",
  args: {
    width: "w-64",
    contents: {
      name: "food",
      id: "food",
      options: groupedOptions,
    },
  },
}
