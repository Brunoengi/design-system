import type { VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { ButtonVariant } from "./Button.style";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariant> {
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled = false,
      // 1. Desestruturamos as props de variante para removê-las do `...rest`
      backgroundColor,
      borderRadius,
      width,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        // 2. Passamos TODAS as props de variante e a className para o CVA
        className={ButtonVariant({ backgroundColor, borderRadius, width, className })}
        disabled={disabled}
        // 3. O `...rest` agora contém apenas atributos HTML válidos
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
