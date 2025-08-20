import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Sidebar from "./Sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Design System/Organisms/Sidebar",
  component: Sidebar,
  parameters: {
    // O sidebar é um componente de layout, então queremos vê-lo em um contexto maior.
    layout: 'fullscreen',
  },
  // Adicionamos estilos básicos para fins de demonstração na estória.
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Classes CSS para estilizar o container principal do Sidebar.',
    },
    children: {
      control: false, // Desabilitar controle para children, pois será definido nas estórias
      description: 'Subcomponentes do Sidebar: Header, Content, Footer.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

// Estilos base para as estórias para que pareçam apresentáveis.
const sidebarStyle: React.CSSProperties = {
  width: '280px',
  borderRight: '1px solid #e2e8f0',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f8fafc',
};

const headerStyle: React.CSSProperties = {
  padding: '1rem',
  borderBottom: '1px solid #e2e8f0',
  fontWeight: 'bold',
  fontSize: '1.25rem',
};

const contentStyle: React.CSSProperties = {
  flexGrow: 1, // Permite que esta seção preencha o espaço disponível
  overflowY: 'auto', // Habilita a rolagem para conteúdo longo
  padding: '1rem',
};

const footerStyle: React.CSSProperties = {
  padding: '1rem',
  borderTop: '1px solid #e2e8f0',
  fontSize: '0.875rem',
  color: '#64748b',
};

const listStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const listItemStyle: React.CSSProperties = {
  padding: '0.75rem 0',
  cursor: 'pointer',
};

/**
 * Uma estória mostrando um sidebar completo com cabeçalho, conteúdo com uma lista de itens e um rodapé.
 * Este é o caso de uso mais comum.
 */
export const Default: Story = {
  args: {
    style: sidebarStyle,
    children: (
      <>
        <Sidebar.Header style={headerStyle}>
          Meu Aplicativo
        </Sidebar.Header>
        <Sidebar.Content style={contentStyle}>
          <nav>
            <ul style={listStyle}>
              <li style={listItemStyle}>Página Inicial</li>
              <li style={listItemStyle}>Análises</li>
              <li style={listItemStyle}>Relatórios</li>
              <li style={listItemStyle}>Configurações</li>
            </ul>
          </nav>
        </Sidebar.Content>
        <Sidebar.Footer style={footerStyle}>
          <p style={{ margin: 0 }}>© 2024 - Todos os direitos reservados.</p>
        </Sidebar.Footer>
      </>
    ),
  },
};

/**
 * Uma estória demonstrando um sidebar com uma grande quantidade de conteúdo,
 * exibindo a funcionalidade de rolagem vertical. O componente `Sidebar.Content`
 * deve ter `flex-grow: 1` e `overflow-y: auto` para que isso funcione.
 */
export const WithScrollingContent: Story = {
  args: {
    style: { ...sidebarStyle, height: '400px' }, // Altura fixa para demonstrar a rolagem
    children: (
      <>
        <Sidebar.Header style={headerStyle}>
          Menu Extenso
        </Sidebar.Header>
        <Sidebar.Content style={contentStyle}>
          <nav>
            <ul style={listStyle}>
              {Array.from({ length: 25 }, (_, i) => (
                <li key={i} style={listItemStyle}>
                  Item de Menu {i + 1}
                </li>
              ))}
            </ul>
          </nav>
        </Sidebar.Content>
        <Sidebar.Footer style={footerStyle}>
          Fim do Menu
        </Sidebar.Footer>
      </>
    ),
  },
};

/**
 * Uma estória para um sidebar mais simples que contém apenas a área de conteúdo principal,
 * sem um cabeçalho ou rodapé. Isso é útil para cenários de navegação menos complexos.
 */
export const ContentOnly: Story = {
  args: {
    style: sidebarStyle,
    children: (
      <Sidebar.Content style={contentStyle}>
        <nav>
          <ul style={listStyle}>
            <li style={listItemStyle}>Opção 1</li>
            <li style={listItemStyle}>Opção 2</li>
            <li style={listItemStyle}>Opção 3</li>
          </ul>
        </nav>
      </Sidebar.Content>
    ),
  },
};
