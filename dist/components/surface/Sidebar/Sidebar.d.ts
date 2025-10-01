import React from 'react';
import { type BoxProps } from '@mui/material';
export interface SidebarProps extends BoxProps {
    /**
     * Define o espaçamento interno à direita para os subcomponentes (Header, Content, Footer).
     * O valor é um multiplicador do tema de espaçamento do MUI (theme.spacing).
     * @default 2
     */
    contentPaddingRight?: number;
}
interface SidebarSubcomponentProps extends BoxProps {
    contentPaddingRight?: number;
}
declare const Sidebar: React.FC<SidebarProps> & {
    Header: React.FC<SidebarSubcomponentProps>;
    Content: React.FC<SidebarSubcomponentProps>;
    Footer: React.FC<SidebarSubcomponentProps>;
};
export default Sidebar;
