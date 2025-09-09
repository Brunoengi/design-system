// Typography.stories.ts
import { Meta, StoryObj } from "@storybook/react"
import Typography from "./Typography"

const meta: Meta<typeof Typography> = {
  title: "Data Display/Typography",
  component: Typography,
  argTypes: {
    children: {
      control: "text",
    },
    variant: {
      control: { type: "select" },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "button",
        "caption",
        "overline",
      ],
    },
    align: {
      control: { type: "select" },
      options: ["inherit", "left", "center", "right", "justify"],
    },
    gutterBottom: {
      control: "boolean",
    },
    noWrap: {
      control: "boolean",
    },
    paragraph: {
      control: "boolean",
    },
    component: {
      control: "text",
      description: "O elemento HTML a ser renderizado (ex: 'h1', 'p', 'span').",
    },
  },
}

export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  name: "Interativo",
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
    variant: "body1",
  },
}

export const Heading1: Story = {
  args: {
    children: "Heading 1",
    variant: "h1",
    gutterBottom: true,
  },
}

export const Heading2: Story = {
  args: {
    children: "Heading 2",
    variant: "h2",
    gutterBottom: true,
  },
}

export const Subtitle: Story = {
  name: "Subtítulo com GutterBottom",
  args: {
    children: "I am a subtitle, and I have a bottom margin.",
    variant: "subtitle1",
    gutterBottom: true,
  },
}

export const BodyAsParagraph: Story = {
  name: "Corpo de Texto como Parágrafo",
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
    variant: "body1",
    paragraph: true,
  },
}

export const Overline: Story = {
  args: {
    children: "Overline text",
    variant: "overline",
  },
}