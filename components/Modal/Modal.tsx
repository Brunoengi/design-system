import React from "react";
import {
  Dialog as MuiDialog,
  DialogTitle,
  DialogContent,
  IconButton,
  DialogProps as MuiDialogProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
const Modal = ({
  children,
  isOpen,
  onClose,
  title,
  maxWidth = "sm",
}: ModalProps) => {
  return (
    <MuiDialog onClose={onClose} open={isOpen} fullWidth maxWidth={maxWidth}>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        {title}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </MuiDialog>
  );
};

export default Modal;