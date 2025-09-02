import { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"
// É melhor inferir as props diretamente do componente para garantir a consistência.

const meta: Meta<typeof Button> = {
  title: 'Design System/Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      type: "string"
    },
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: {
        type: 'radio'
      }
    },
    color: {
      options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
      control: {
        type: 'select'
      }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio'
      }
    },
    disabled: {
      type: "boolean"
    },
    className: {
      type: "string"
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Button',
    variant: 'contained',
    color: 'primary',
    size: 'medium',
    disabled: false,
  },
}

export default meta

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
  }
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  }
}

export const Text: Story = {
  args: {
    variant: 'text',
  }
}

export const Success: Story = {
  args: {
    color: 'success'
  }
}

export const Warning: Story = {
  args: {
    color: 'warning',
  }
}

export const Error: Story = {
  args: {
    color: 'error',
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
  }
}

export const Large: Story = {
  args: {
    size: 'large',
  }
}

export const Small: Story = {
  args: {
    size: 'small',
  }
}
