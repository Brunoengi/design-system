import React from "react";
import MuiAlert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

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
export const Alert = ({
  severity = "info",
  variant = "standard",
  title,
  children,
  onClose,
}: AlertProps) => {
  return (
    <MuiAlert severity={severity} variant={variant} onClose={onClose} sx={{ minWidth: '320px' }}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </MuiAlert>
  );
};
