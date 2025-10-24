import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import PersonCard from './PersonCard'

const meta: Meta<typeof PersonCard> = {
  title: 'Surface/PersonCard',
  component: PersonCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'Jane Doe',
        'John Smith',
        'Alex Ray',
        'Chris Green',
        'Sam Wilson',
        'Carlos Silva',
      ],
    },
    title: { control: 'object' },
    avatarUrl: { control: 'text' },
    socials: { control: 'object' },
    showAvatar: { control: 'boolean' },
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
    },
    size: {
      options: ['xx-small', 'x-small', 'small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    padding: {
      control: 'select',
      options: [0, 1, 1.5, 2, 3, 4],
      description: 'Substitui o padding padrão do card (multiplicador do tema).',
    },
    backgroundColor: {
      control: 'color',
      description: 'Define a cor de fundo do card.',
    },
  },
}

export default meta
type Story = StoryObj<typeof PersonCard>

export const Default: Story = {
  name: 'Padrão',
  args: {
    name: 'Jane Doe',
    title: ['Engenheira de Software'],
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    socials: [
      { network: 'linkedin', url: 'https://linkedin.com' },
      { network: 'github', url: 'https://github.com' },
    ],
  },
}

export const AllSocials: Story = {
  name: 'Com Todas as Redes Sociais',
  args: {
    ...Default.args,
    name: 'John Smith',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705e',
    socials: [
      { network: 'linkedin', url: 'https://linkedin.com' },
      { network: 'github', url: 'https://github.com' },
      { network: 'twitter', url: 'https://twitter.com' },
      { network: 'website', url: 'https://example.com' },
      { network: 'youtube', url: 'https://youtube.com' },
    ],
  },
}

export const WithYouTube: Story = {
  name: 'Com Link do YouTube',
  args: {
    name: 'Criador de Conteúdo',
    title: ['YouTuber', 'Influencer'],
    avatarUrl: 'https://i.pravatar.cc/150?u=youtuber',
    socials: [
      { network: 'youtube', url: 'https://youtube.com' },
      { network: 'twitter', url: 'https://twitter.com' },
    ],
  },
}

export const WithAvatarFallback: Story = {
  name: 'Com Avatar de Fallback',
  args: {
    name: 'Alex Ray',
    title: ['Designer de UX/UI'],
    avatarUrl: '', // URL vazia mostra o fallback
    socials: [{ network: 'website', url: 'https://example.com' }],
  },
}

export const WithoutAvatar: Story = {
  name: 'Sem Componente Avatar',
  args: {
    name: 'Chris Green',
    title: ['Product Manager'],
    showAvatar: false,
    socials: [{ network: 'linkedin', url: 'https://linkedin.com' }],
  },
}

export const NoSocials: Story = {
  name: 'Sem Redes Sociais',
  args: {
    ...Default.args,
    name: 'Sam Wilson',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706f',
    socials: [],
  },
}

export const WithoutShadow: Story = {
  name: 'Sem Sombra',
  args: {
    ...Default.args,
    elevation: 0,
  },
}

export const WithTwoTitles: Story = {
  name: 'Com Dois Títulos',
  args: {
    ...Default.args,
    name: 'Carlos Silva',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026708e',
    title: ['Arquiteto de Soluções', 'Especialista em Cloud'],
  },
}

export const WithMultipleTitles: Story = {
  name: 'Com Múltiplos Títulos',
  args: {
    ...Default.args,
    name: 'Maria Souza',
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026707d',
    title: ['Desenvolvedora Full-Stack', 'Mentora de Carreira', 'Palestrante'],
  },
}

export const LargeSize: Story = {
  name: 'Tamanho Grande',
  args: {
    ...Default.args,
    size: 'large',
    name: 'Dr. Evelyn Reed',
    title: ['Diretora de Pesquisa'],
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026709f',
  },
}

export const SmallSize: Story = {
  name: 'Tamanho Pequeno',
  args: {
    ...Default.args,
    size: 'small',
    name: 'Leo Barnes',
    title: ['Estagiário'],
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026710a',
  },
}

export const WithCustomPadding: Story = {
  name: 'Com Padding Customizado',
  args: {
    ...Default.args,
    padding: 0,
    name: 'No Padding',
  },
}
