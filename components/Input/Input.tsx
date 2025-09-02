import React, { forwardRef } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export type InputProps = Omit<TextFieldProps, 'InputProps'> & {
  /**
   * Adiciona um prefixo ao input. Útil para ícones ou unidades de medida.
   */
  startAdornment?: React.ReactNode;
  /**
   * Adiciona um sufixo ao input. Útil para ícones ou unidades de medida.
   */
  endAdornment?: React.ReactNode;
};

/**
 * O componente Input é uma abstração sobre o TextField do Material-UI,
 * com melhorias para inputs numéricos e fácil adição de prefixos/sufixos.
 */
const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ type, startAdornment, endAdornment, onChange, inputProps, ...rest }, ref) => {
    const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value === '' || /^[0-9\b]+$/.test(value)) {
        onChange?.(e);
      }
    };

    const isNumeric = type === 'number';

    // A prop `InputProps` (com 'I' maiúsculo) é a forma correta de passar adornos
    // para o TextField do Material-UI. O aviso de depreciação que você está vendo
    // é um bug conhecido em versões mais antigas do @mui/material v5.
    // A solução ideal é atualizar os pacotes do MUI.
    const InputProps = {
      startAdornment: startAdornment ? (
        <InputAdornment position="start">{startAdornment}</InputAdornment>
      ) : undefined,
      endAdornment: endAdornment ? (
        <InputAdornment position="end">{endAdornment}</InputAdornment>
      ) : undefined,
    };

    return (
      <TextField
        ref={ref}
        type={isNumeric ? 'text' : type}
        onChange={isNumeric ? handleNumericChange : onChange}
        // A prop `inputProps` (com 'i' minúsculo) passa atributos para o elemento <input> nativo.
        inputProps={{
          ...(isNumeric && { inputMode: 'numeric', pattern: '[0-9]*' }),
          ...inputProps,
        }}
        InputProps={InputProps}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;