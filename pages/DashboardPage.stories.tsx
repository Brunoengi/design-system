import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Typography,
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  alpha,
  Collapse,
} from '@mui/material'
import { Home, BarChart, Analytics } from '@mui/icons-material'
import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Button from '../components/input/Button/Button'
import TeamCard from '@/components/surface/TeamCard/TeamCard'
import Sidebar from '@/components/surface/Sidebar/Sidebar'

const meta: Meta = {
  title: 'Pages/Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [Story => <Story />],
}

export default meta

type Story = StoryObj

export const FloatingSidebarWithTeamPanel: Story = {
  name: 'Dashboard com Painel de Equipes',
  render: () => {
    const [activeItem, setActiveItem] = React.useState('Dashboard')
    const [open, setOpen] = React.useState<string | null>(null)
    const [highlightedCard, setHighlightedCard] = React.useState<string | null>(null)

    const devTeam = [
      {
        name: 'Ana Costa',
        title: ['Líder de', 'Desenvolvimento'],
        showAvatar: false,
        socials: [
          { network: 'linkedin', url: '#' },
          { network: 'github', url: '#' },
        ],
      },
    ]

    const advisorsTeam = [
      {
        name: 'Carlos Souza',
        title: ['Orientador', 'Técnico'],
        showAvatar: false,
        socials: [
          { network: 'linkedin', url: '#' },
          { network: 'website', url: '#' },
        ],
      },
      {
        name: 'Mariana Silva',
        title: ['Orientadora', 'Acadêmica'],
        showAvatar: false,
        socials: [{ network: 'linkedin', url: '#' }],
      },
    ]

    const supportTeam = [
      {
        name: 'Beatriz Lima',
        title: ['Apoio e', 'QA'],
        showAvatar: false,
        socials: [{ network: 'linkedin', url: '#' }],
      },
      {
        name: 'Lucas Pereira',
        title: ['Suporte', 'Técnico'],
        showAvatar: false,
        socials: [{ network: 'linkedin', url: '#' }],
      },
    ]

    const handleHighlight = (team: string) => {
      setHighlightedCard(team)
      setTimeout(() => {
        setHighlightedCard(null)
      }, 2000)
    }

    const menuData = [
      { id: 'PropriedadesGeometricas', text: 'Propriedades Geométricas', icon: <Home /> },
      { id: 'Combinacoes', text: 'Combinações', icon: <Analytics /> },
      { id: 'Combinacoes', text: 'Combinações', icon: <Analytics /> },
    ]

    const activeStyles = {
      bgcolor: '#364B73',
      color: 'common.white',
      '&:hover': { bgcolor: '#405680' },
      '& .MuiListItemIcon-root': { color: 'common.white' },
    }

    const inactiveStyles = {
      color: 'grey.400',
      '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)' },
      '& .MuiListItemIcon-root': { color: 'common.white' },
    }

    return (
      <Box
        sx={{
          p: 2,
          height: '100vh',
          bgcolor: 'grey.200',
          display: 'flex',
          gap: 2,
          boxSizing: 'border-box',
        }}
      >
        {/* --- Sidebar Flutuante --- */}
        <Sidebar
          sx={{
            bgcolor: '#2C3E5D',
            borderColor: 'transparent',
            height: '100%',
            borderRadius: 2,
            boxShadow: 3,
            borderRight: 'none',
          }}
        >
          <Sidebar.Header
            sx={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ bgcolor: '#1ABC9C', width: 32, height: 32 }}>
              <AdbIcon sx={{ fontSize: '1.2rem' }} />
            </Avatar>
            <Typography
              variant="h6"
              sx={{ ml: 1.5, color: 'common.white', fontWeight: 'bold' }}
            >
              Meu Projeto
            </Typography>
            <MenuIcon sx={{ ml: 'auto', color: 'grey.500' }} />
          </Sidebar.Header>
          <Sidebar.Content sx={{ py: 1.5, pl: 1.5 }}>
            <List component="nav" dense>
              {menuData.map(item => (
                <ListItemButton
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  sx={{
                    borderRadius: 1,
                    mb: 0.5,
                    ...(activeItem === item.id ? activeStyles : inactiveStyles),
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              ))}
            </List>
          </Sidebar.Content>
        </Sidebar>

        {/* --- Área de Conteúdo Principal --- */}
        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: 2,
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1, // Garante que este container ocupe o resto da largura
            p: 3, // Adiciona um padding interno para o conteúdo
          }}
        >
          {/* Conteúdo superior */}
          <Box>
            <Typography variant="h4">Conteúdo Principal</Typography>
            <Typography sx={{ mt: 2 }}>
              Este é o conteúdo que fica na parte de cima.
            </Typography>
          </Box>

          {/* Conteúdo inferior (rodapé) */}
          <Box sx={{ marginTop: 'auto', display: 'flex', flexDirection: 'column'}}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center', // Adicionado para centralizar verticalmente
                mb: 2,
                gap: 2, // Adicionado para espaçamento
              }}
            >
              <Typography variant="h6">Equipes do Projeto:</Typography>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => handleHighlight('dev')}
              >
                Desenvolvedor
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleHighlight('advisors')}
              >
                Orientadores
              </Button>
              <Button variant="outlined" color="success" onClick={() => handleHighlight('support')}>
                Financiamento
              </Button>
            </Box>
            
            
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 2,
              }}
            >
              <TeamCard
                size="medium"
                members={devTeam}
                sx={theme => ({
                  p: 2,
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  transition: 'background-color 0.3s ease-in-out',
                  backgroundColor:
                    highlightedCard === 'dev'
                      ? alpha(theme.palette.primary.light, 0.3)
                      : 'transparent',
                })}
              />
              <TeamCard
                size="medium"
                members={advisorsTeam}
                sx={theme => ({
                  p: 2,
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  transition: 'background-color 0.3s ease-in-out',
                  backgroundColor:
                    highlightedCard === 'advisors'
                      ? alpha(theme.palette.secondary.light, 0.3)
                      : 'transparent',
                })}
              />
              <TeamCard
                size="medium"
                members={supportTeam}
                sx={theme => ({
                  p: 2,
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  transition: 'background-color 0.3s ease-in-out',
                  backgroundColor:
                    highlightedCard === 'support'
                      ? alpha(theme.palette.success.light, 0.3)
                      : 'transparent',
                })}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    )
  },
}
