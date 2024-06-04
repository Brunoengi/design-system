import { Meta, StoryObj } from "@storybook/react"

import Button, { ButtonProps } from "./Button"

const meta: Meta<ButtonProps> = {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    children: {
      type: "string"
    },
    disabled: {
      type: "boolean"
    },
    colorType: {
      control: {
        type: "select"
      }
    },
    size: {
      control: {
        type: "select"
      }
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
  }
}

export const PrimaryDark: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
  }
}

export const SecondaryDark: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    colorType: 'secondary',
  }
}

export const DisabledPrimaryDark: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    disabled: true,
    colorType: "disabled",
    className: 'default disabled'
  }
}

export const PrimaryPink: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    colorType: 'primary',
    className:'theme-pink'
  }
}

export const SecondaryPink: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    colorType: 'secondary',
    className:'theme-pink'
  }
}

export const PrimaryVintage: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    colorType: 'primary',
    className:'theme-vintage'
  }
}

export const SecondaryVintage: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    colorType: 'secondary',
    className:'theme-vintage'
  }
}



