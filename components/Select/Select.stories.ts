import { Meta, StoryObj, StoryFn } from "@storybook/react"
import Select, { SelectProps } from "./Select"

const meta: Meta<SelectProps> = {
  title: "Molecules/Select",
  component: Select,
  argTypes: {
    width: {
      options: ['full', 'max', 'min', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4'],
      control: "select"
    },
    backgroundColor: {
      options: ['white', 'gray-100', 'gray-200', 'gray-800', 'gray-900', 'black'],
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
export default meta;

export const Primary: StoryObj<SelectProps> = {
  args: {
    contents: {
      name: 'steel',
      id: 'steel',
      options: [{
        value: '500',
        label: '500 (CA-50)'
      },
      {
        value: '600',
        label: '600 (CA-60)'
      }]
    }
  }
}
