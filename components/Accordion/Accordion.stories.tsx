import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AddCircleOutline } from "@mui/icons-material";
// O caminho foi corrigido para apontar para o componente correto.
import Accordion from "./Accordion";
 
const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    // Adiciona um pouco de espaço ao redor do componente para melhor visualização
    layout: "padded",
  },
  argTypes: {
    allContent: {
      description:
        "Array de objetos contendo o título e o conteúdo de cada painel.",
      control: "object",
    },
    allowMultiple: {
      control: "boolean",
      description: "Permite que múltiplos painéis fiquem abertos ao mesmo tempo.",
    },
    expandIcon: {
      control: false, // Ícones não são facilmente controláveis via props do Storybook
      description:
        "Ícone customizado para expandir/recolher. Veja a história 'Com Ícone Customizado'.",
    },
  },
};
 
export default meta;
 
type Story = StoryObj<typeof Accordion>;
 
export const Default: Story = {
  name: "Padrão",
  args: {
    allContent: [
      {
        title: "Painel 1",
        content:
          "Conteúdo do primeiro painel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        title: "Painel 2",
        content:
          "Conteúdo do segundo painel. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
      },
    ],
    allowMultiple: true,
    style: { width: "100%", maxWidth: "600px" }, // Adicionando largura para melhor visualização
  },
};
 
export const WithRichContent: Story = {
  name: "Com Conteúdo Rico",
  args: {
    ...Default.args,
    allContent: [
      {
        title: <strong>Painel com Título em Negrito</strong>,
        content: (
          <div>
            <p>Este painel contém elementos HTML mais complexos.</p>
            <ul>
              <li>Item de lista 1</li>
              <li>Item de lista 2</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Outro Painel",
        content: "Apenas um texto simples aqui.",
      },
    ],
  },
};

export const SinglePanelOpen: Story = {
  name: "Apenas um Painel Aberto",
  args: {
    ...Default.args,
    allowMultiple: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Com `allowMultiple={false}`, abrir um painel automaticamente fecha qualquer outro que esteja aberto.",
      },
    },
  },
};

export const WithDisabledPanel: Story = {
  name: "Com Painel Desabilitado",
  args: {
    ...Default.args,
    allContent: [
      {
        title: "Painel 1 (Habilitado)",
        content: "Este painel pode ser aberto.",
      },
      {
        title: "Painel 2 (Desabilitado)",
        content: "Este conteúdo não pode ser visto pois o painel está desabilitado.",
        disabled: true,
      },
      {
        title: "Painel 3 (Habilitado)",
        content: "Este também pode ser aberto.",
      },
    ],
  },
};

export const WithCustomIcon: Story = {
  name: "Com Ícone Customizado",
  args: {
    ...Default.args,
    expandIcon: <AddCircleOutline />,
  },
  parameters: {
    docs: {
      description: {
        story: "Você pode passar qualquer `React.ReactNode` como ícone de expansão.",
      },
    },
  },
};
