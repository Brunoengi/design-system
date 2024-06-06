import React from "react";
import { DividerVariant } from "./Divider.style";
import { VariantProps } from "class-variance-authority";
import classNames from "classnames";

export type DividerProps = VariantProps<typeof DividerVariant> & {
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
  
  const barClass = classNames('flex-1', DividerVariant({height, backgroundColor}));

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