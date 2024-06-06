import { Meta, StoryObj, StoryFn } from "@storybook/react"
import Select, { SelectProps } from "./Select"
import defaultTheme from "tailwindcss/defaultTheme";



const meta: Meta<SelectProps> = {
  title: "Molecules/Select",
  component: Select,
  argTypes: {
    width: {
      options: ['full', 'max', 'min', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4'],
      control: "select"
    },
    opacity: {
      options: Object.keys(defaultTheme.opacity),
      control: "select"
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
