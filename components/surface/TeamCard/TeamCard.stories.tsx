import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import TeamCard from './TeamCard'
import { PersonCardProps } from '../PersonCard/PersonCard'
import { Box } from '@mui/material'

const meta: Meta<typeof TeamCard> = {
  title: 'Surface/TeamCard',
  component: TeamCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    members: { control: 'object' },
    membersContainerStyle: { control: 'object' },
    memberGap: {
      control: 'select',
      options: ['0px', '4px', '8px', '16px', '32px'],
    },
    size: {
      options: ['xx-small', 'x-small', 'small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    justifyMembers: {
      control: 'select',
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    membersElevation: {
      control: { type: 'range', min: 0, max: 30, step: 1 },
      description:
        'Controla a elevação (sombra) de todos os cards de membro.',
    },
    teamElevation: {
      control: { type: 'range', min: 0, max: 30, step: 1 },
      description:
        'Controla a elevação (sombra) do container do time.',
    },
    membersPadding: {
      control: 'select',
      options: [0, 1, 1.5, 2, 3, 4],
      description: 'Substitui o padding de todos os cards de membro.',
    },
  },
}

export default meta
type Story = StoryObj<typeof TeamCard>

const programmers: PersonCardProps[] = [
  {
    name: 'Jane Doe',
    title: ['Engenheira de Software Sênior'],
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    socials: [
      { network: 'linkedin', url: 'https://linkedin.com' },
      { network: 'github', url: 'https://github.com' },
    ],
  },
  {
    name: 'John Smith',
    title: ['Desenvolvedor Frontend'],
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026705e',
    socials: [
      { network: 'github', url: 'https://github.com' },
      { network: 'twitter', url: 'https://twitter.com' },
    ],
  },
]

const consultants: PersonCardProps[] = [
  {
    name: 'Alex Ray',
    title: ['Consultor de UX'],
    avatarUrl: '',
    socials: [{ network: 'website', url: 'https://example.com' }],
  },
  {
    name: 'Sam Wilson',
    title: ['Consultor de Negócios'],
    avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026706f',
    socials: [],
  },
  {
    name: 'Chris Green',
    title: ['Consultor de Acessibilidade'],
    showAvatar: false,
    socials: [{ network: 'linkedin', url: 'https://linkedin.com' }],
  },
]

const orientadores: PersonCardProps[] = [
  {
    name: 'Dr. Alan Grant',
    title: ['Professor de Paleontologia'],
    avatarUrl: 'https://i.pravatar.cc/150?u=alan_grant',
    socials: [{ network: 'linkedin', url: 'https://linkedin.com' }],
  },
  {
    name: 'Dra. Ellie Sattler',
    title: ['Paleobotânica'],
    avatarUrl: 'https://i.pravatar.cc/150?u=ellie_sattler',
    socials: [{ network: 'website', url: 'https://example.com' }],
  },
]

const apoio: PersonCardProps[] = [
  {
    name: 'Ian Malcolm',
    title: [], // Sem título
    avatarUrl: 'https://i.pravatar.cc/150?u=ian_malcolm',
    socials: [], // Sem redes sociais
  },
  {
    name: 'John Hammond',
    title: [], // Sem título
    avatarUrl: 'https://i.pravatar.cc/150?u=john_hammond',
    socials: [], // Sem redes sociais
  },
]

const programmersWithoutAvatar: PersonCardProps[] = programmers.map((member) => ({
  ...member,
  showAvatar: false,
}))

const consultantsWithoutAvatar: PersonCardProps[] = consultants.map((member) => ({
  ...member,
  showAvatar: false,
}))

const singleTeamArgs = {
  members: programmers,
}

export const Default: Story = {
  name: 'Padrão (Interativo)',
  args: {
    ...singleTeamArgs,
  },
}

export const LargeSize: Story = {
  name: 'Tamanho Grande',
  args: {
    ...singleTeamArgs,
    size: 'large',
  },
}

export const SmallSize: Story = {
  name: 'Tamanho Pequeno',
  args: {
    ...singleTeamArgs,
    size: 'small',
  },
}

export const LargeTeam: Story = {
  name: 'Time Grande',
  args: {
    members: consultants,
  },
}

export const EmptyTeam: Story = {
  name: 'Time Vazio',
  args: {
    members: [],
  },
}

export const CustomMemberGap: Story = {
  name: 'Com Espaçamento de Membro Customizado',
  args: {
    ...singleTeamArgs,
    memberGap: '32px',
  },
}


export const WithMembersElevation: Story = {
  name: 'Com Elevação nos Membros',
  args: {
    ...singleTeamArgs,
    membersElevation: 4,
  },
}

export const WithCustomMemberPadding: Story = {
  name: 'Com Padding de Membro Customizado',
  args: {
    ...singleTeamArgs,
    membersPadding: 0,
  },
}

export const WithTeamElevation: Story = {
  name: 'Com Elevação no Time',
  args: {
    ...singleTeamArgs,
    teamElevation: 4,
  },
}

export const WithCustomBackgroundColor: Story = {
  name: 'Com Cor de Fundo Customizada',
  args: {
    ...singleTeamArgs,
    sx: {
      backgroundColor: 'rgba(232, 245, 255, 0.8)',
    },
    teamElevation: 2,
  },
}

export const MultipleTeams: Story = {
  name: 'Múltiplos Times',
  argTypes: {
    teamGap: {
      control: 'select',
      options: ['0px', '4px', '8px', '16px', '32px'],
      description:
        'Espaçamento entre múltiplos TeamCards (controlado no container pai).',
    },
  } as any,
  render: (args: any) => {
    const { teamGap, ...teamCardArgs } = args
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: teamGap,
          width: '100%',
        }}
      >
        <TeamCard {...teamCardArgs} members={programmers} />
        <TeamCard {...teamCardArgs} members={consultants} />
      </Box>
    )
  },
  args: {
    teamGap: '32px',
    size: 'medium',
  } as any,
  parameters: {},
}

export const TwoTeamsFlexStart: Story = {
  name: 'Duas Equipes em Linha (Flex Start)',
  render: (args) => (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-start', width: '100%', flexWrap: 'wrap' }}>
      <TeamCard {...args} members={programmers} />
      <TeamCard {...args} members={consultants} />
    </Box>
  ),
  args: {
    size: 'medium',
  },
  parameters: {},
}

export const TeamsWithoutAvatars: Story = {
  name: 'Times Sem Avatares (Flex End)',
  render: (args) => (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', width: '100%' }}>
      <TeamCard {...args} members={programmersWithoutAvatar} />
      <TeamCard {...args} members={consultantsWithoutAvatar} />
    </Box>
  ),
  args: {
    size: 'medium',
  },
  parameters: {},
}

export const SideBySideTeams: Story = {
  name: 'Times Lado a Lado',
  render: (args) => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', p: 2 }}>
      <Box sx={{ flex: 1 }}>
        <TeamCard {...args} members={programmers} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <TeamCard {...args} members={consultants} />
      </Box>
    </Box>
  ),
  args: {
    size: 'medium',
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const SingleRowLayout: Story = {
  name: 'Layout em Linha Única',
  args: {
    members: [...programmers, ...consultants],
    membersContainerStyle: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      overflowX: 'auto',
      paddingBottom: '16px',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export const ThreeColumnLayout: Story = {
  name: 'Layout de Três Colunas',
  render: (args) => (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', p: 2 }}>
      <Box sx={{ flex: 1 }}>
        <TeamCard {...args} members={[programmers[0]]} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <TeamCard {...args} members={orientadores} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <TeamCard {...args} members={apoio} />
      </Box>
    </Box>
  ),
  args: {
    size: 'medium',
  },
  parameters: {
    layout: 'fullscreen',
  },
}
