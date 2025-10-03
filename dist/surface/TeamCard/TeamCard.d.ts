import React from 'react';
import { PersonCardProps } from '../PersonCard/PersonCard';
import { type BoxProps } from '@mui/material';
export type TeamCardProps = {
    /**
     * Uma lista de membros da equipe, onde cada membro é um objeto com as props do PersonCard.
     */
    members: PersonCardProps[];
    /**
     * Permite customizar o estilo do container que envolve os membros.
     */
    membersContainerStyle?: React.CSSProperties;
    /**
     * Define o espaçamento entre os membros da equipe.
     * Se não for fornecido, o valor será baseado na prop `size`.
     */
    memberGap?: number | string;
    /**
     * Define o tamanho geral do card e seus elementos internos.
     * @default 'medium'
     */
    size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
    /**
     * Define o alinhamento horizontal dos membros da equipe.
     * @default 'flex-start'
     */
    justifyMembers?: React.CSSProperties['justifyContent'];
    /**
     * Controla o nível de sombra (elevação) de todos os cards de membro.
     * Aceita valores numéricos de 0 a 30.
     * @default 0
     */
    membersElevation?: number;
    /**
     * Controla o nível de sombra (elevação) do container do time.
     * Aceita valores numéricos de 0 a 30.
     * @default 0
     */
    teamElevation?: number;
    /**
     * Permite substituir o preenchimento (padding) de todos os cards de membro.
     * O valor é um multiplicador do espaçamento do tema.
     */
    membersPadding?: number;
    /**
     * Permite aplicar estilos `sx` a cada `PersonCard` filho.
     */
    membersSx?: BoxProps['sx'];
    /**
     * The system prop that allows defining system overrides as well as custom CSS.
     */
    sx?: BoxProps['sx'];
} & BoxProps;
declare const TeamCard: ({ members, membersContainerStyle, memberGap, teamElevation, membersElevation, membersPadding, membersSx, justifyMembers, size, style, sx, ...props }: TeamCardProps) => import("react/jsx-runtime").JSX.Element;
export default TeamCard;
