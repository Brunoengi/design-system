import React, { forwardRef } from "react"
import { VariantProps } from "class-variance-authority"
import { InputVariant } from "./Input.style"

// A forma mais limpa de definir as props é estender os atributos padrão do HTML
// e adicionar as variantes do CVA.
export type InputProps = VariantProps<typeof InputVariant> &
  React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, className, onChange, ...rest }, ref) => {
    // Handler customizado para permitir apenas a entrada de números.
    const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      // Permite apenas dígitos (0-9) ou um campo vazio.
      if (value === '' || /^[0-9\b]+$/.test(value)) {
        // Dispara o evento onChange original se a validação passar.
        onChange?.(e)
      }
    }

    const isNumeric = type === 'number'

    return (
      <input
        ref={ref}
        // Para uma melhor experiência mobile, usamos inputMode e mudamos o tipo para 'text'
        // para evitar os controles de seta padrão do navegador.
        type={isNumeric ? 'text' : type}
        inputMode={isNumeric ? 'numeric' : undefined}
        pattern={isNumeric ? '[0-9]*' : undefined}
        // Usa o handler customizado para o tipo numérico
        onChange={isNumeric ? handleNumericChange : onChange}
        className={`${InputVariant(rest as any)} ${className}`}
        {...rest}
      />
    )
  }
)

Input.displayName = 'Input'

export default Input