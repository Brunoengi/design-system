import { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonProps } from "./Button"

const meta: Meta<ButtonProps> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    children: {
      type: "string"
    },
    backgroundColor: {
      type: "string",
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'error', 'warning', 'disabled', 'transparent'],
      control: {
        type: "select"
      }
    },
    borderRadius: {
      options: ['none', 'sm', 'md', 'lg'],
      control: {
        type: 'select'
      }
    },
    disabled: {
      type: "boolean"
    },
    className: {
      type: "string"
    },
  }
}

export default meta

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    borderRadius: 'none',
    className: 'font-medium text-xs'
  }
}

export const Sucess: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    backgroundColor: 'success'
  }
}

export const Warning: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    backgroundColor: 'warning',
    borderRadius: 'none'
  }
}

export const Error: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    backgroundColor: 'error',
    borderRadius: 'lg'
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    backgroundColor: 'disabled',
    borderRadius: 'none'
  }
}

export const SecondaryThemeVintage: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    className:'theme-vintage',
    backgroundColor: 'secondary'
  }
}



