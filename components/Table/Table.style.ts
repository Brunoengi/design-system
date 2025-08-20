import { cva } from "class-variance-authority";

export const tableVariant = cva("min-w-full border border-gray-200 rounded", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
    striped: {
      true: "",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    striped: false,
  },
});

export const theadVariant = cva("bg-gray-100", {
  variants: {
    sticky: {
      true: "sticky top-0 z-10",
      false: "",
    },
  },
  defaultVariants: {
    sticky: false,
  },
});

export const thVariant = cva("px-4 py-2 text-left font-semibold border-b");

export const trVariant = cva("", {
  variants: {
    striped: {
      true: "even:bg-gray-50",
      false: "",
    },
  },
  defaultVariants: {
    striped: false,
  },
});

export const tdVariant = cva("px-4 py-2 border-b");