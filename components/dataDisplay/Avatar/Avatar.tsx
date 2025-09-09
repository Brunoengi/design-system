import React from 'react';
import MuiAvatar, { type AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import { type SxProps, type Theme } from '@mui/material/styles';

// Define um mapa de tamanhos customizados que serão convertidos para a prop `sx` do MUI.
const sizeMap = {
  xs: { width: 20, height: 20, fontSize: '0.625rem' }, // 20px
  sm: { width: 24, height: 24, fontSize: '0.75rem' },  // 24px
  md: { width: 32, height: 32, fontSize: '0.875rem' },  // 32px
  lg: { width: 40, height: 40, fontSize: '1rem' },      // 40px (padrão do MUI)
};

// Define as props para o nosso componente customizado de Avatar.
// Ele herda as props do Avatar do Material-UI, mas omite `src` e `alt` para
// substituí-los por `image` e `description` para manter a consistência.
export interface AvatarProps extends Omit<MuiAvatarProps, 'src' | 'alt'> {
  /**
   * O caminho para a imagem.
   */
  image?: string;
  /**
   * O texto alternativo para a imagem. Também usado para gerar as iniciais se a imagem falhar.
   */
  description?: string;
  /**
   * O tamanho do avatar.
   * @default 'md'
   */
  size?: keyof typeof sizeMap;
}

/**
 * Componente Avatar construído sobre o Avatar do Material-UI.
 * Suporta imagens, ícones ou letras como conteúdo.
 */
const Avatar: React.FC<AvatarProps> = ({
  image,
  description = '',
  size = 'md',
  children,
  sx,
  ...rest
}) => {
  // Combina os estilos de tamanho customizados com qualquer `sx` prop passada.
  const combinedSx: SxProps<Theme> = { ...sizeMap[size], ...sx };

  // Se `children` não for fornecido, tenta gerar iniciais a partir da `description`.
  const avatarChildren = children || (description ? description.charAt(0).toUpperCase() : null);

  return <MuiAvatar src={image} alt={description} sx={combinedSx} {...rest}>{avatarChildren}</MuiAvatar>;
}

export default Avatar