import { Meta, StoryObj } from "@storybook/react"
import Input, { InputProps } from "./Input"


const meta: Meta<InputProps> = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: 'centered'
  },
  argTypes: { 
    type: {
      control: {
        type: "number"
      }
    },
    width: {
      options: ['full', 'max', 'min', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4', 'w-12', 'w-16', 'w-20', 'w-24', 'w-28', 'w-32'],
      control: "select"
    },
    backgroundColor: {
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'error', 'warning', 'disabled', 'gray-100', 'gray-200', 'gray-800', 'gray-900', 'black', 'white', 'none'],
      control: {
        type: 'select'
      }
    },
    borderRadius: {
      options: ['none', 'sm', 'md', 'lg'],
      control: {
        type: 'select'
      }
    },
    borderColor: {
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'error', 'warning', 'disabled'],
      control: {
        type: 'select'
      }
    },
    borderWidth: {
      options: ['none', 'border-1', 'border-2'],
      control: {
        type: 'select'
      }
    }
  },
};

export const Primary:StoryObj<InputProps> = {
  args: {
    type: 'number',
    width: 'w-12',
    borderWidth: 'border-1',
    borderColor: 'primary'
  }
}

export const w12:StoryObj<InputProps> = {
  args: {
    type: 'number',
    width: 'w-12',
    borderWidth: 'border-1',
    borderColor: 'secondary',
    borderRadius: 'md',
    value: 12
  }
}

export const w16:StoryObj<InputProps> = {
  args: {
    type: 'number',
    width: 'w-16',
    borderWidth: 'border-1',
    borderColor: 'secondary',
    borderRadius: 'md',
    value: 16
  }
}

export const w20:StoryObj<InputProps> = {
  args: {
    type: 'number',
    width: 'w-20',
    borderWidth: 'border-1',
    borderColor: 'secondary',
    borderRadius: 'md',
    value: 20
  }
}



export default meta;