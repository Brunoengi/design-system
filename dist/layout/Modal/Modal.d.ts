import React from "react";
import { DialogProps as MuiDialogProps } from "@mui/material";
export type ModalProps = {
    /**
     * O conteúdo a ser exibido dentro do modal.
     */
    children: React.ReactNode;
    /**
     * Se `true`, o modal é exibido.
     */
    isOpen: boolean;
    /**
     * O título exibido no cabeçalho do modal.
     */
    title: string;
    /**
     * Função de callback disparada quando o modal solicita ser fechado.
     */
    onClose: () => void;
    /**
     * Determina a largura máxima do modal.
     * @default 'sm'
     */
    maxWidth?: MuiDialogProps["maxWidth"];
};
/**
 * O componente Modal exibe conteúdo em uma camada sobre o aplicativo,
 * desativando a interação com a página principal.
 */
declare const Modal: ({ children, isOpen, onClose, title, maxWidth, }: ModalProps) => import("react/jsx-runtime").JSX.Element;
export default Modal;
