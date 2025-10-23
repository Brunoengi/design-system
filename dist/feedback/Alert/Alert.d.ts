import React from "react";
export interface AlertProps {
    /**
     * A severidade do alerta. Define a cor e o ícone.
     * @default 'info'
     */
    severity?: "success" | "info" | "warning" | "error";
    /**
     * A variante a ser usada.
     * @default 'standard'
     */
    variant?: "standard" | "filled" | "outlined";
    /**
     * O título opcional a ser exibido acima do conteúdo.
     */
    title?: string;
    /**
     * O conteúdo do alerta.
     */
    children: React.ReactNode;
    /**
     * Função chamada quando o componente solicita ser fechado.
     * Quando fornecida, um ícone de fechar é exibido.
     */
    onClose?: () => void;
}
/**
 * Alertas são usados para comunicar informações importantes ao usuário
 * através de mensagens contextuais.
 */
export declare const Alert: ({ severity, variant, title, children, onClose, }: AlertProps) => import("react/jsx-runtime").JSX.Element;
