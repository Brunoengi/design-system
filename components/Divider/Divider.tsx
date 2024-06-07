import React from "react";
import { DividerVariants } from "./Divider.style";
import { VariantProps } from "class-variance-authority";
import classNames from "classnames";

export type DividerProps = VariantProps<typeof DividerVariants> & {
  width?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;


const Divider = ({
  width = '',
  children,
  height,
  backgroundColor,
  ...rest
}: DividerProps) => {
  
  const barClass = classNames('flex-1', DividerVariants({height, backgroundColor}));

  return (
    <div 
      className={classNames(width, "flex items-center")
    }>
      <div className={barClass}></div>
      {children && <div className="px-2">{children}</div>}
      <div className={barClass}></div>
    </div>
  );
};

export default Divider;