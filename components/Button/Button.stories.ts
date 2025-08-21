import { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonProps } from "./Button"

const meta: Meta<ButtonProps> = {
  title: 'Design System/Atoms/Button',
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
    onClick: {action: 'clicked'},
    width: {
      options: ['full', 'auto', 'fit','w-20', 'w-24', 'w-32', 'w-40', 'w-48', 'w-56', 'w-64'],
      type: "string",
      control: {
        type: "select"
      }
    }
  },
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



