import React, { forwardRef } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { SxProps, Theme, useTheme } from '@mui/material';

export type BorderRadiusOptions = 'none' | 'sm' | 'md' | 'lg' | 'full';

export type InputProps = Omit<TextFieldProps, 'InputProps' | 'variant'> & {
  /**
   * Adiciona um prefixo ao input. Útil para ícones ou unidades de medida.
   */
  startAdornment?: React.ReactNode;
  /**
   * Adiciona um sufixo ao input. Útil para ícones ou unidades de medida.
   */
  endAdornment?: React.ReactNode;
  /**
   * A variante de estilo a ser usada.
   * 'borderless' remove as bordas, útil para uso dentro de um InputGroup.
   * @default 'outlined'
   */
  variant?: 'standard' | 'outlined' | 'filled' | 'borderless';
  /**
   * Define o raio da borda. Pode ser um valor predefinido ('none', 'sm', 'md', 'lg', 'full') ou um valor customizado (número ou string).
   * 'sm': 2px, 'md': 4px (padrão do tema), 'lg': 8px, 'full': 9999px.
   * Só funciona com a variante 'outlined'.
   * @example 'lg'
   */
  borderRadius?: BorderRadiusOptions | number | string;
  /**
   * Define quais cantos devem ser arredondados.
   * Ex: `['topLeft', 'bottomLeft']`. Só funciona com a variante 'outlined' e se `borderRadius` for fornecido.
   */
  roundedCorners?: ('topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight')[];
  /**
   * Define quais lados devem ter uma borda visível.
   * Por padrão, todos os lados são visíveis.
   * Ex: `['right', 'bottom', 'left']`. Só funciona com a variante 'outlined'.
   */
  borders?: ('top' | 'right' | 'bottom' | 'left')[];
  /**
   * Define o número máximo de caracteres (dígitos) que podem ser inseridos.
   * O input ajustará sua largura automaticamente com base neste valor.
   */
  maxLength?: number;
};

/**
 * O componente Input é uma abstração sobre o TextField do Material-UI,
 * com melhorias para inputs numéricos e fácil adição de prefixos/sufixos.
 */
const Input = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      type,
      startAdornment,
      endAdornment,
      onChange,
      inputProps,
      size,
      variant = 'outlined',
      borderRadius,
      roundedCorners,
      borders,
      maxLength,
      sx,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme();

    const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      // Remove todos os caracteres que não são dígitos, vírgulas ou pontos.
      let filteredValue = value.replace(/[^0-9,.]/g, '');

      // Encontra o primeiro separador decimal (vírgula ou ponto).
      const firstSeparatorIndex = filteredValue.search(/[,.]/);

      if (firstSeparatorIndex !== -1) {
        // Se um separador for encontrado, mantém a parte até ele (inclusive).
        const integerAndFirstSeparator = filteredValue.substring(0, firstSeparatorIndex + 1);
        // Pega o restante da string e remove quaisquer outros separadores.
        const fractionalPart = filteredValue.substring(firstSeparatorIndex + 1).replace(/[,.]/g, '');
        // Reconstrói o valor final.
        filteredValue = integerAndFirstSeparator + fractionalPart;
      }

      // Atualiza o valor do input no evento para o valor filtrado.
      // Isso garante que tanto componentes controlados quanto não controlados
      // reflitam apenas os caracteres válidos.
      e.target.value = filteredValue;
      onChange?.(e);
    };

    const isNumeric = type === 'number';

    const InputProps = {
      startAdornment: startAdornment ? (
        <InputAdornment position="start">{startAdornment}</InputAdornment>
      ) : undefined,
      endAdornment: endAdornment ? (
        <InputAdornment position="end">{endAdornment}</InputAdornment>
      ) : undefined,
    };

    const borderlessStyles: SxProps<Theme> =
      variant === 'borderless'
        ? {
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }
        : {};

    const customBorderSx: SxProps<Theme> = {};
    const fieldsetSx: Record<string, any> = {};

    // Lógica para o raio da borda
    if (borderRadius) {
      let radiusValue: number | string;

      // Mapeia as opções de string para valores reais
      switch (borderRadius) {
        case 'none':
          radiusValue = 0;
          break;
        case 'sm':
          radiusValue = 2;
          break;
        case 'md':
          radiusValue = theme.shape.borderRadius; // ex: 4px
          break;
        case 'lg':
          radiusValue = theme.shape.borderRadius * 2; // ex: 8px
          break;
        case 'full':
          radiusValue = 9999; // Formato "Pill"
          break;
        default:
          // Usa o valor customizado se for número ou string
          radiusValue = borderRadius;
      }

      const allCorners = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
      const cornersToRound = roundedCorners || allCorners;

      if (!roundedCorners) {
        fieldsetSx.borderRadius = radiusValue;
      } else {
        if (cornersToRound.includes('topLeft')) fieldsetSx.borderTopLeftRadius = radiusValue;
        if (cornersToRound.includes('topRight')) fieldsetSx.borderTopRightRadius = radiusValue;
        if (cornersToRound.includes('bottomLeft')) fieldsetSx.borderBottomLeftRadius = radiusValue;
        if (cornersToRound.includes('bottomRight')) fieldsetSx.borderBottomRightRadius = radiusValue;
      }
    }

    // Lógica para os lados da borda
    if (borders) {
      const allSides = ['top', 'right', 'bottom', 'left'];
      allSides.forEach(side => {
        const key = `border${side.charAt(0).toUpperCase() + side.slice(1)}Width`;
        if (!borders.includes(side as (typeof allSides)[number])) {
          fieldsetSx[key] = 0;
        }
      });
    }

    if (Object.keys(fieldsetSx).length > 0) {
      const radiusStyles = {
        ...(fieldsetSx.borderRadius && { borderRadius: fieldsetSx.borderRadius }),
        ...(fieldsetSx.borderTopLeftRadius && { borderTopLeftRadius: fieldsetSx.borderTopLeftRadius }),
        ...(fieldsetSx.borderTopRightRadius && { borderTopRightRadius: fieldsetSx.borderTopRightRadius }),
        ...(fieldsetSx.borderBottomLeftRadius && { borderBottomLeftRadius: fieldsetSx.borderBottomLeftRadius }),
        ...(fieldsetSx.borderBottomRightRadius && { borderBottomRightRadius: fieldsetSx.borderBottomRightRadius }),
      };
      // Aplica o raio da borda ao contêiner raiz para cortar o conteúdo interno
      customBorderSx['& .MuiOutlinedInput-root'] = { ...radiusStyles };
      // Aplica os estilos de borda e raio ao fieldset
      customBorderSx['& .MuiOutlinedInput-notchedOutline'] = { ...fieldsetSx };
    }

    const widthStyle: SxProps<Theme> = {};
    if (maxLength) {
      // Ajusta a largura com base no maxLength.
      // A unidade 'ch' é aproximadamente a largura do caractere '0'.
      // Adicionamos +4ch para acomodar padding interno, adornos e um pequeno espaço extra.
      // Isso é mais eficaz para fontes monoespaçadas, mas funciona bem para números.
      widthStyle.minWidth = `${maxLength + 4}ch`;
    }

    return (
      <TextField
        ref={ref}
        size={size}
        // Se a variante for 'borderless', usamos 'outlined' como base e removemos sua borda via sx.
        // Caso contrário, usamos a variante fornecida.
        variant={variant === 'borderless' ? 'outlined' : variant}
        type={isNumeric ? 'text' : type}
        onChange={isNumeric ? handleNumericChange : onChange}
        // A prop `inputProps` (com 'i' minúsculo) passa atributos para o elemento <input> nativo.
        inputProps={{
          maxLength,
          ...(isNumeric && { inputMode: 'decimal' }),
          ...inputProps,
        }}
        InputProps={InputProps}
        sx={{ ...borderlessStyles, ...customBorderSx, ...widthStyle, ...sx }}
        {...rest}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;