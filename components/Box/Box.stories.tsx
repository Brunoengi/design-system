import { Meta, StoryObj } from "@storybook/react";

import Box, {type BoxProps} from "./Box"
import Typography from "../Typography/Typography";

const meta: Meta<BoxProps> = {
  title: "Atoms/Box",
  component: Box,
  argTypes: {
    children: { type: "string" },
    className: { type: "string" },
    borderRadius: {
      type: "string",
      options: ["none", "sm", "md", "lg"],
      control: { type: "select" }
    },
    textColor: {
      type: "string",
      options: ["primary", "secondary", "tertiary", "quaternary", "success", "error", "warning", "disabled", "gray-100", "gray-200", "gray-800", "gray-900", "black", "white", "transparent"],
      control: { type: "select" }
    },
    backgroundColor: {
      type: "string",
      options: ["primary", "secondary", "tertiary", "quaternary", "success", "error", "warning", "disabled", "gray-100", "gray-200", "gray-800", "gray-900", "white", "black", "transparent"],
      control: { type: "select" }
    },
    borderColor: {
      type: "string",
      options: ["primary", "secondary", "tertiary", "quaternary", "success", "error", "warning", "disabled"],
      control: { type: "select" }
    },
    width: {
      type: "string",
      options: ["w-12", "w-16", "w-20", "w-24", "w-28", "w-32", "full", "max", "min", "1/2", "1/3", "2/3", "1/4", "2/4", "3/4"],
      control: { type: "select" }
    },
    borderWidth: {
      type: "string",
      options: ["none", "border-1", "border-2"],
      control: { type: "select" }
    }
  },
};

export default meta;

export const Primary: StoryObj<BoxProps> = {
  args: {},
};

export const Default: StoryObj<BoxProps> = {
  args: {
    children: "Este é uma Box Padrão",
    borderWidth: "border-1",
    className: "px-4"
  },
};

export const BoxAlert: StoryObj<BoxProps> = {
  args: {
    children: "Este é um alerta!",
    borderColor: "warning",
    borderWidth: "border-1",
    className: "px-4",
    borderRadius: "lg"
    
  },
};

export const BoxError: StoryObj<BoxProps> = {
  args: {
    children: "Ocorreu um erro durante a operação.",
    borderColor: "error",
    borderWidth: "border-1",
    className: "text-center"
  },
}

export const BoxSuccess: StoryObj<BoxProps> = {
  args: {
    children: <Typography>Sucesso</Typography>,
    borderColor: "success",
    borderWidth: "border-1",
    className: "px-4"
  },
}