import { Meta, StoryObj } from "@storybook/react";

import Divider, { type DividerProps } from "./Divider";

const meta: Meta<DividerProps> = {
  title: "Atoms/Divider",
  component: Divider,
  argTypes: {
    children: { type: "string" },
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