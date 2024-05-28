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
    variant: 'primary'
  }
}

export const SecondaryDark: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    variant: 'secondary'
  }
}

export const DisabledPrimaryDark: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    disabled: true,
    variant: 'primary'
  }
}

export const PrimaryPink: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    variant: 'primary',
    className:'theme-pink'
  }
}

export const SecondaryPink: StoryObj<ButtonProps> = {
  args: {
    children: 'Calcular',
    variant: 'secondary',
    className:'theme-pink'
  }
}



