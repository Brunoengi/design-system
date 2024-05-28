import React from "react";
import classNames from "classnames";

export type DividerProps = {
  width?: string;
  height?: string;
  bgColor?: "light" | "dark" 
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const colorClassMap = {
  light: "bg-light",
  dark: "bg-dark",
 
};

const Divider = ({
  width,
  height = "h-[1px]",
  children,
  bgColor = "dark",
  ...rest
}: DividerProps) => {
  const colorClass = colorClassMap[bgColor];

  const barClass = classNames('grow', height, colorClass);

  return (
    <div className={classNames(width, "flex items-center justify-center")}>
      <div className={barClass}></div>
      {children && <div className="px-2">{children}</div>}
      <div className={barClass}></div>
    </div>
  );
};

export default Divider;