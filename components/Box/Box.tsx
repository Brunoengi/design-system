import React from "react"
import { BoxVariants } from "./Box.style"
import { VariantProps } from "class-variance-authority"

export type BoxProps = VariantProps<typeof BoxVariants> & {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Box = ({ children, className, ...rest }: BoxProps) => {
  return (
    <div className={`${BoxVariants(rest)} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Box;