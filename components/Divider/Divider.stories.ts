import { Meta, StoryObj } from "@storybook/react";

import Divider, { type DividerProps } from "./Divider";

const meta: Meta<DividerProps> = {
  title: "Atoms/Divider",
  component: Divider,
  argTypes: {
    height: {
      options: ["1px", "2px"],
      control: {
        type: "select"
      }
    },
    backgroundColor: {
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'success', 'error', 'warning'],
      control: {
        type: "select"
      }
    },
    children: { 
      type: "string" 
    },
  },
};

export default meta;

export const Primary: StoryObj<DividerProps> = {
  args: {},
};

export const Default: StoryObj<DividerProps> = {
  args: {},
};

export const DivisorWithProps: StoryObj<DividerProps> = {
  args: {
    children: "Olá mundo",
  },
};