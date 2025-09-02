import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { Button, Typography, DialogActions } from "@mui/material";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: {
      control: false,
      description: "Controla a visibilidade do modal. Gerenciado pela história.",
    },
    onClose: {
      control: false,
      description: "Função para fechar o modal. Gerenciada pela história.",
    },
    title: {
      control: "text",
      description: "O título exibido no cabeçalho do modal.",
    },
    children: {
      control: false,
      description: "O conteúdo a ser exibido dentro do modal.",
    },
    maxWidth: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", false],
      description: "Determina a largura máxima do modal.",
    },
  },
  args: {
    title: "Título do Modal",
    maxWidth: "sm",
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// Template para gerenciar o estado de abertura do modal em cada história
const ModalTemplate: Story["render"] = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setIsOpen(true)}>
        Abrir Modal
      </Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default: Story = {
  name: "Padrão",
  args: {
    children: (
      <Typography>
        Este é o conteúdo do modal. Você pode colocar qualquer componente React
        aqui dentro.
      </Typography>
    ),
  },
  render: ModalTemplate,
};

export const WithLongContent: Story = {
  name: "Com Conteúdo Longo",
  args: {
    title: "Termos de Serviço",
    children: (
      <>
        <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </Typography>
        <Typography gutterBottom>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        </Typography>
        <Typography>
          Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
          magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Typography>
      </>
    ),
  },
  render: ModalTemplate,
};

export const WithActions: Story = {
  name: "Com Ações no Rodapé",
  args: {
    title: "Confirmar Ação",
    children: (
      <>
        <Typography>
          Você tem certeza que deseja executar esta ação? Esta operação não pode
          ser desfeita.
        </Typography>
        <DialogActions>
          <Button>Cancelar</Button>
          <Button variant="contained">Confirmar</Button>
        </DialogActions>
      </>
    ),
  },
  render: ModalTemplate,
};

export const Large: Story = {
  name: "Tamanho Grande (lg)",
  args: {
    ...Default.args,
    title: "Modal Grande",
    maxWidth: "lg",
  },
  render: ModalTemplate,
};