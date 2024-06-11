import { Meta, StoryObj } from "@storybook/react";

import Avatar, { type AvatarProps } from "./Avatar";

const meta: Meta<AvatarProps> = {
  title: "Design System/Atoms/Avatar",
  component: Avatar,
  argTypes: {
    className: { type: "string" },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: "select"
      }
    }
  },
};

export default meta;

export const Primary: StoryObj<AvatarProps> = {
  args: {},
};

export const Xsmall: StoryObj<AvatarProps> = {
  args: {
    size: "xs",
    image: "https://placehold.co/400x400.png",
  }
}

  export const Large: StoryObj<AvatarProps> = {
    args: {
      size: "lg",
    },
};