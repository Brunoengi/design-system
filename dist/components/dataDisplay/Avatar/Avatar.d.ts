import React from 'react';
import { type AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
declare const sizeMap: {
    xs: {
        width: number;
        height: number;
        fontSize: string;
    };
    sm: {
        width: number;
        height: number;
        fontSize: string;
    };
    md: {
        width: number;
        height: number;
        fontSize: string;
    };
    lg: {
        width: number;
        height: number;
        fontSize: string;
    };
};
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
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
