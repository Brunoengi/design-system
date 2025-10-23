import { CardProps } from '@mui/material';
export type SocialLink = {
    network: 'linkedin' | 'github' | 'twitter' | 'website';
    url: string;
};
export type PersonCardProps = {
    name?: string;
    title?: string[];
    avatarUrl?: string;
    socials?: SocialLink[];
    /**
     * Se `false`, o componente Avatar não será renderizado.
     * @default true
     */
    showAvatar?: boolean;
    /**
     * Controla o nível de sombra (elevação) do card.
     * Um valor de 0 remove a sombra.
     * @default 1
     */
    elevation?: number;
    /**
     * Define o tamanho geral do card e seus elementos internos.
     * @default 'medium'
     */
    size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large';
    /**
     * Permite substituir o preenchimento (padding) padrão do card.
     * O valor é um multiplicador do espaçamento do tema (ex: 2 = theme.spacing(2)).
     */
    padding?: number;
    /**
     * @deprecated Use a prop `sx` para definir a cor de fundo. Ex: `sx={{ backgroundColor: 'red' }}`
     */
    backgroundColor?: string;
    /**
     * The system prop that allows defining system overrides as well as custom CSS.
     */
    sx?: CardProps['sx'];
} & Omit<CardProps, 'title' | 'children' | 'sx'>;
declare const PersonCard: ({ name, title, avatarUrl, socials, showAvatar, elevation, size, padding, backgroundColor, sx, ...rest }: PersonCardProps) => import("react/jsx-runtime").JSX.Element;
export default PersonCard;
