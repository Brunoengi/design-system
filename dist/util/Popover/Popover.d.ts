import React from 'react';
import type { PopoverOrigin } from '@mui/material';
export type PopoverProps = {
    /**
     * O conteúdo a ser exibido dentro do popover.
     */
    children: React.ReactNode;
    /**
     * O rótulo do botão que aciona o popover.
     */
    buttonLabel?: string;
    /**
     * Este é o ponto na âncora ao qual o `transformOrigin` do popover se anexará.
     */
    anchorOrigin?: PopoverOrigin;
    /**
     * Este é o ponto no popover que se anexará ao `anchorOrigin` da âncora.
     */
    transformOrigin?: PopoverOrigin;
    /**
     * Se `true`, o preenchimento interno do popover será removido.
     * @default false
     */
    disablePadding?: boolean;
};
declare const PopoverComponent: ({ children, buttonLabel, anchorOrigin, transformOrigin, disablePadding, }: PopoverProps) => import("react/jsx-runtime").JSX.Element;
export default PopoverComponent;
