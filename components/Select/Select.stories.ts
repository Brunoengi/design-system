import { Meta, StoryObj } from "@storybook/react"
import Select, { SelectProps } from "./Select"

const meta: Meta<SelectProps> = {
  title: "Molecules/Select",
  component: Select,
  argTypes: {
    
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
