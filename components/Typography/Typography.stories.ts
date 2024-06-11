// Typography.stories.ts
import { Meta, StoryObj } from "@storybook/react"

import Typography, { type TypographyProps } from "./Typography"

const meta: Meta<TypographyProps> = {
  title: "Design System/Atoms/Typography",
  component: Typography,
  argTypes: {
    element:{
      options:["p", "h1", "h2", "h3", "div"]
    },
    className: {
      type: "string",
    },
    children: {
      type: "string"
      },
      align: {
        type: "string",
        options: ["left", "center", "right", "justify"],
        control: {
          type: "select"
        }
      },
      size:{
        options: ["xxs", "xs", "sm", "md", "xl", "title3", "title2", "title1"],
        control: { type:"select" }
      },
      weight: {
        options: ["normal", "medium", "bold"],
        control: { type: "select" }
      }
  },
}

export default meta

export const Primary: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
  },
}

export const TextHeadingH1: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
    element: "h1",
    size: "title1",
    className: "font-extrabold",
  },
}

export const TextHeadingH2: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
    element: "h2",
    size: "title2",
    className: "font-extrabold",
  },
}

export const TextHeadingH3: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
    element: "h3",
    size: "title3",
    className: "font-extrabold",
  },
}

export const TextParagraph: StoryObj<TypographyProps> = {
  args: {
    children: "Texto",
    element: "p",
    size: "md",
  },
}