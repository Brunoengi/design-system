import React from 'react';
import { Box, BoxProps, useTheme } from '@mui/material';
import type { InputProps } from '../Input/Input';

export type BorderRadiusOptions = 'none' | 'sm' | 'md' | 'lg' | 'full';

export type InputGroupProps = Omit<BoxProps, 'children'> & {
  /**
   * O conteúdo do componente. Espera-se que sejam componentes `Input`.
   */
  children: React.ReactNode;
  /**
   * A direção na qual os inputs serão agrupados.
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * Se `true`, todo o grupo de inputs será desabilitado.
   * @default false
   */
  disabled?: boolean;
  /**
   * Se `true`, o grupo de inputs indicará um estado de erro.
   * @default false
   */
  error?: boolean;
  /**
   * O tamanho dos inputs no grupo.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Define o raio da borda do grupo.
   * 'sm': 2px, 'md': 4px (padrão do tema), 'lg': 8px, 'full': 9999px.
   * @default 'md'
   */
  borderRadius?: BorderRadiusOptions | number | string;
  /**
   * Estilos CSS customizados para aplicar a cada componente `Input` filho.
   */
  inputSx?: InputProps['sx'];
};

/**
 * InputGroup é um contêiner que agrupa múltiplos componentes Input,
 * tratando as bordas e os estados (foco, erro, desabilitado) de forma unificada.
 * Ideal para criar campos de formulário compostos.
 */
const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  (
    {
      children,
      direction = 'horizontal',
      disabled = false,
      error = false,
      size = 'medium',
      borderRadius = 'md',
      inputSx,
      sx,
      ...rest
    },
    ref,
  ) => {
    const theme = useTheme();
    const childrenArray = React.Children.toArray(children);

    // Lógica para resolver o valor do raio da borda
    let radiusValue: number | string;
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
        radiusValue = (theme.shape.borderRadius as number) * 2; // ex: 8px
        break;
      case 'full':
        radiusValue = 9999; // Formato "Pill"
        break;
      default:
        // Usa o valor customizado se for número ou string
        radiusValue = borderRadius;
    }

    // Define as cores da borda com base nos estados
    const normalBorderColor = theme.palette.action.active;
    const hoverBorderColor = theme.palette.text.primary;
    const focusedBorderColor = error
      ? theme.palette.error.main
      : theme.palette.primary.main;
    const errorBorderColor = theme.palette.error.main;
    const disabledBorderColor = theme.palette.action.disabled;

    const groupSx: BoxProps['sx'] = {
      display: 'flex',
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
      borderRadius: radiusValue,
      border: `1px solid ${
        disabled
          ? disabledBorderColor
          : error
          ? errorBorderColor
          : normalBorderColor
      }`,
      transition: theme.transitions.create(['border-color', 'box-shadow']),

      // Estilo ao passar o mouse, exceto quando desabilitado
      ...(!disabled && {
        '&:hover': {
          borderColor: error ? errorBorderColor : hoverBorderColor,
        },
      }),

      // Estilo de foco usando o pseudo-seletor :has() para verificar se algum filho está focado
      '&:has(.Mui-focused)': {
        borderColor: focusedBorderColor,
        // Adiciona um "glow" similar ao do TextField focado
        boxShadow: `0 0 0 1px ${focusedBorderColor}`,
      },

      // Garante que os inputs filhos preencham o espaço
      '& > .MuiTextField-root': {
        flex: 1,
      },

      ...sx,
    };

    return (
      <Box sx={groupSx} ref={ref} {...rest}>
        {childrenArray.map((child, index) => {
          if (!React.isValidElement(child)) {
            return child;
          }

          const isLastChild = index === childrenArray.length - 1;

          const largeSizeSx =
            size === 'large'
              ? {
                  '& .MuiInputBase-input': {
                    // Aumenta o padding para simular um input 'large'
                    padding: '24.5px 14px',
                  },
                  // Ajusta a posição do label para o tamanho 'large' quando não está encolhido.
                  // O valor de 24px na vertical alinha o label com o padding aumentado.
                  '& .MuiInputLabel-root:not(.MuiInputLabel-shrink)': {
                    transform: 'translate(14px, 24px) scale(1)',
                  },
                }
              : {};

          // Clona o elemento filho para injetar as props necessárias
          return React.cloneElement(child as React.ReactElement<InputProps>, {
            variant: 'borderless', // Usa a variante sem borda
            size: size === 'large' ? 'medium' : size,
            disabled: disabled || child.props.disabled,
            error: error || child.props.error,
            sx: {
              ...largeSizeSx,
              ...inputSx, // Aplica os estilos passados para os inputs
              ...child.props.sx,
              // Adiciona um separador entre os inputs
              ...(!isLastChild &&
                direction === 'horizontal' && {
                  borderRight: `1px solid ${theme.palette.divider}`,
                }),
              ...(!isLastChild &&
                direction === 'vertical' && {
                  borderBottom: `1px solid ${theme.palette.divider}`,
                }),
              // Adiciona um "entalhe" para o label não ser sobreposto pela borda.
              // Quando o label encolhe, damos a ele um fundo da cor do papel e
              // um padding, fazendo com que ele cubra a borda do grupo.
              '& .MuiInputLabel-shrink': {
                background: theme.palette.background.paper,
                paddingLeft: '4px',
                paddingRight: '4px',
              },
            },
          });
        })}
      </Box>
    );
  },
);

InputGroup.displayName = 'InputGroup';

export default InputGroup;