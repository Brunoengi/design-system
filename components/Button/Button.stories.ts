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
    className: {
      type: "string"
    },
  }
}

export default meta

export const PrimaryDark: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    kind:'solid'
  }
}

export const SecondaryDark: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    colorType: 'secondary',
    kind:'solid'
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



