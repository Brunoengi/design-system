import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import SplitScreen from './SplitScreen'
import classNames from 'classnames'

const meta: Meta<typeof SplitScreen> = {
  title: 'Design System/atoms/SplitScreen',
  component: SplitScreen,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical']
    },
    sizes: {
      control: 'object'
    },
    className: {
      control: 'text'
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta
type Story = StoryObj<typeof SplitScreen>

const Panel = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div
    className={classNames(
      'flex items-center justify-center p-4 border-tertiary h-full min-h-[200px] text-gray-secondary bg-light',
      className
    )}
  >
    {children}
  </div>
)

export const HorizontalEqual: Story = {
  name: 'Horizontal (Divisão Igual)',
  args: {
    direction: 'horizontal',
    children: [<Panel>Painel 1</Panel>, <Panel>Painel 2</Panel>],
  },
}

export const VerticalEqual: Story = {
  name: 'Vertical (Divisão Igual)',
  args: {
    direction: 'vertical',
    children: [<Panel>Painel 1</Panel>, <Panel>Painel 2</Panel>],
  },
}

export const FixedLeftPanel: Story = {
  name: 'Horizontal (Fixo e Fluido)',
  args: {
    direction: 'horizontal',
    sizes: ['250px', 1],
    children: [
      <Panel className="bg-dark text-gray-primary">Painel Fixo (250px)</Panel>,
      <Panel>Painel Fluido</Panel>,
    ],
  },
}

export const ProportionalPanels: Story = {
  name: 'Horizontal (Proporcional 1:2)',
  args: {
    direction: 'horizontal',
    sizes: [1, 2],
    children: [
      <Panel className="bg-success text-white">Proporção 1</Panel>,
      <Panel>Proporção 2</Panel>,
    ],
  },
}

export const ThreePanelsWithPercentage: Story = {
  name: 'Vertical (Com Porcentagens)',
  args: {
    direction: 'vertical',
    sizes: ['33.33%', '33.33%', '33.33%'],
    children: [
      <Panel className="bg-success text-white">33.33%</Panel>,
      <Panel className="bg-warning text-white">33.33%</Panel>,
      <Panel className="bg-error text-white">33.33%</Panel>,
    ],
  },
}

export const ThemedPanels: Story = {
  name: 'Painéis com Tema (Vintage)',
  args: {
    direction: 'horizontal',
    sizes: [1, 1, 1, 1, 1],
    children: [
      <Panel className="bg-primary text-white">Primary</Panel>,
      <Panel className="bg-secondary text-white">Secondary</Panel>,
      <Panel className="bg-tertiary text-white">Tertiary</Panel>,
      <Panel className="bg-quaternary text-black">Quaternary</Panel>,
      <Panel className="bg-quinary text-black">Quinary</Panel>,
    ],
    className: 'theme-vintage',
  },
}

export const DynamicThemedPanel = {
  name: 'Painel com Tema Dinâmico',
  render: (args: any) => (
    <div className={args.theme}>
      <SplitScreen>
        <Panel className={args.panelClassName}>Painel Dinâmico</Panel>
      </SplitScreen>
    </div>
  ),
  args: {
    panelClassName: 'bg-primary text-white',
    theme: 'theme-vintage'
  },
  argTypes: {
    // Ocultamos os controles padrão do SplitScreen que não são relevantes para esta história
    direction: { table: { disable: true } },
    sizes: { table: { disable: true } },
    children: { table: { disable: true } },
    className: { table: { disable: true } },
    panelClassName: {
      name: 'Estilo do Painel',
      description: 'Selecione a cor de fundo do painel usando tokens de tema.',
      control: 'select',
      options: [
        'bg-primary text-white',
        'bg-secondary text-white',
        'bg-tertiary text-white',
        'bg-quaternary text-black',
        'bg-quinary text-black',
        'bg-success text-white',
        'bg-warning text-black',
        'bg-error text-white',
        'bg-dark text-gray-primary',
        'bg-light text-gray-primary'
      ]
    },
    theme: {
      name: 'Tema',
      control: 'radio',
      options: {
        'Padrão (Default)': '',
        'Vintage': 'theme-vintage',
        'Dark': 'theme-dark',
        'Pink': 'theme-pink'
      }
    }
  }
}
