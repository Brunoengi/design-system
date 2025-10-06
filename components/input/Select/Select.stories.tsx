import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"
import Select, {
  isOptionGroup,
  SelectOption,
  SelectOptionGroup,
} from "./Select"
import { SelectChangeEvent } from "@mui/material"

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

const meta: Meta<typeof Select> = {
  title: "Input/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    helperText: { control: "text" },
    fullWidth: { control: "boolean" },
    variant: {
      options: ["outlined", "filled", "standard"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    value: { control: false },
    onChange: { control: false },
    options: { control: false },
  },
  args: {
    label: "Categoria",
    disabled: false,
    error: false,
    fullWidth: true,
    variant: "outlined",
    size: "medium",
  },
}
export default meta

type Story = StoryObj<typeof Select>

const SelectTemplate: Story["render"] = args => {
  // Garante que o valor inicial seja uma das opções válidas
  const initialValue =
    args.value ||
    (args.options.find(
      o => !isOptionGroup(o) && !o.disabled,
    ) as SelectOption)?.value ||
    ""

  const [value, setValue] = useState(initialValue)

  const handleChange = (event: SelectChangeEvent<string | number>) => {
    setValue(event.target.value as string | number)
  }

  return (
    <div style={{ width: "320px" }}>
      <Select {...args} value={value} onChange={handleChange} />
    </div>
  )
}

export const Default: Story = {
  name: "Padrão com Opções Simples",
  args: {
    options: simpleOptions,
    id: "simple-select",
  },
  render: SelectTemplate,
}

export const WithComplexLabel: Story = {
  name: "Com Label Complexo",
  args: {
    label: (
      <>
        f<sub>ck</sub>
      </>
    ),
    options: simpleOptions,
    id: "complex-label-select",
  },
  render: SelectTemplate,
}

export const WithOptgroup: Story = {
  name: "Com Grupos (optgroup)",
  args: {
    label: "Comida",
    options: groupedOptions,
    id: "grouped-select",
  },
  render: SelectTemplate,
}

export const WithError: Story = {
  name: "Com Erro",
  args: {
    options: simpleOptions,
    id: "error-select",
    error: true,
    helperText: "Este campo é obrigatório.",
  },
  render: SelectTemplate,
}

export const Disabled: Story = {
  name: "Desabilitado",
  args: {
    options: simpleOptions,
    id: "disabled-select",
    disabled: true,
    label: "Campo Desabilitado",
  },
  render: SelectTemplate,
}
