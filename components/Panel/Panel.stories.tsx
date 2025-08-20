import type { Meta, StoryObj } from '@storybook/react'
import Panel from './Panel'

const meta: Meta<typeof Panel> = {
  title: 'Design System/atoms/Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Conteúdo do painel.'
    },
    className: {
      control: 'text',
      description: 'Classes CSS adicionais.'
    }
  },
  parameters: {
    layout: 'centered'
  }
}

export default meta
type Story = StoryObj<typeof Panel>

export const Default: Story = {
  name: 'Padrão',
  args: {
    children: 'Este é um painel.'
  }
}

export const WithCustomClass: Story = {
  name: 'Com Estilo Customizado',
  args: {
    children: 'Painel com fundo primário.',
    className: 'bg-primary text-white'
  }
}