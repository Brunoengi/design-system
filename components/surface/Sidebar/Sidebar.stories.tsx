import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Sidebar from './Sidebar'
import {
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Box,
  Collapse,
} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import HubOutlinedIcon from '@mui/icons-material/HubOutlined'
import {
  Home,
  Analytics,
  Settings,
  BarChart,
  TableChart,
  Article,
  Lock,
} from '@mui/icons-material'

const meta: Meta<typeof Sidebar> = {
  title: 'Surface/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false, // Desabilitar controle para children, pois será definido nas estórias
      description: 'Subcomponentes do Sidebar: Header, Content, Footer.',
    },
    sx: {
      control: 'object',
      description: 'Estilos customizados usando a prop sx do MUI.',
    },
    contentPaddingRight: {
      control: { type: 'range', min: 0, max: 8, step: 1 },
      description:
        'Define o espaçamento interno à direita (padding-right) para Header, Content e Footer.',
      table: {
        defaultValue: { summary: '2' },
        category: 'Spacing',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Sidebar>

// --- Data for Stories ---

const simpleMenuData = [
  { id: 'Início', text: 'Início', icon: <Home /> },
  { id: 'Dashboard', text: 'Dashboard', icon: <Analytics /> },
  { id: 'Relatórios', text: 'Relatórios', icon: <BarChart /> },
]

const defaultMenuData = [
  { id: 'Página Inicial', text: 'Página Inicial', icon: <Home /> },
  { id: 'Análises', text: 'Análises', icon: <Analytics /> },
  {
    id: 'Configurações',
    text: 'Configurações',
    icon: <Settings />,
    subItems: [
      { id: 'Perfil', text: 'Perfil' },
      { id: 'Segurança', text: 'Segurança' },
    ],
  },
]

const themedMenuData = [
  {
    title: 'Navigation',
    items: [{ id: 'Dashboard', text: 'Dashboard', icon: <Home /> }],
  },
  {
    title: 'UI Element',
    items: [
      {
        id: 'Components',
        text: 'Components',
        icon: <HubOutlinedIcon />,
        subItems: [
          { id: 'Button', text: 'Button' },
          { id: 'Typography', text: 'Typography' },
        ],
      },
    ],
  },
  {
    title: 'Forms & Table',
    items: [
      {
        id: 'Form elements',
        text: 'Form elements',
        icon: <Article />,
        subItems: [
          { id: 'Input', text: 'Input' },
          { id: 'Select', text: 'Select' },
        ],
      },
      { id: 'Table', text: 'Table', icon: <TableChart /> },
    ],
  },
  {
    title: 'Pages',
    items: [
      {
        id: 'Authentication',
        text: 'Authentication',
        icon: <Lock />,
        subItems: [
          { id: 'Login Page', text: 'Login' },
          { id: 'Register Page', text: 'Register' },
        ],
      },
      { id: 'Sample page', text: 'Sample page', icon: <Article /> },
      {
        id: 'Disabled menu',
        text: 'Disabled menu',
        icon: <Article />,
        disabled: true,
      },
    ],
  },
]

// --- Styles for Stories ---

const lightThemeStyles = {
  active: {
    bgcolor: 'action.selected',
    color: 'primary.main',
    '& .MuiListItemIcon-root': { color: 'primary.main' },
  },
  inactive: {
    color: 'text.primary',
    '&:hover': { bgcolor: 'action.hover' },
    '& .MuiListItemIcon-root': { color: 'action.active' },
  },
}

const darkThemeStyles = {
  active: {
    bgcolor: '#364B73',
    color: 'common.white',
    '&:hover': { bgcolor: '#405680' },
    '& .MuiListItemIcon-root': { color: 'common.white' },
  },
  inactive: {
    color: 'grey.400',
    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)' },
    '& .MuiListItemIcon-root': { color: 'common.white' },
  },
}

export const Floating: Story = {
  name: 'Flutuante',
  render: function Render(args) {
    const [activeItem, setActiveItem] = React.useState('Início')

    return (
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          bgcolor: 'grey.200',
          p: 2,
          boxSizing: 'border-box',
          gap: 2,
        }}
      >
        <Sidebar {...args}>
          <Sidebar.Header>
            <Typography variant="h6">App Flutuante</Typography>
          </Sidebar.Header>
          <Sidebar.Content>
            <List component="nav" dense>
              {simpleMenuData.map(item => (
                <ListItemButton
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  sx={{
                    borderRadius: 1,
                    mb: 0.5,
                    ...(activeItem === item.id
                      ? lightThemeStyles.active
                      : lightThemeStyles.inactive),
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              ))}
            </List>
          </Sidebar.Content>
          <Sidebar.Footer>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar />
              <Box>
                <Typography variant="subtitle2">Usuário</Typography>
              </Box>
            </Box>
          </Sidebar.Footer>
        </Sidebar>
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: '#ffffff',
            borderRadius: 2,
            height: '100%',
            boxShadow: 3,
          }}
        >
          <Typography variant="h4">Conteúdo Principal</Typography>
          <Typography sx={{ mt: 2 }}>
            Esta é a área de conteúdo principal ao lado do Sidebar flutuante.
          </Typography>
        </Box>
      </Box>
    )
  },
  args: {
    sx: {
      height: '100%',
      borderRadius: 2,
      boxShadow: 3,
      borderRight: 'none', // Remove a borda para um visual mais limpo
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Um exemplo do Sidebar com margens, bordas arredondadas e sombra, criando um efeito "flutuante". O layout é construído com os componentes Panel e FlexItem.',
      },
    },
  },
}

export const ThemedWithAccordionMenu: Story = {
  name: 'Layout Temático com Menu Acordeão',
  render: function Render(args) {
    const [activeItem, setActiveItem] = React.useState('Dashboard')
    const [open, setOpen] = React.useState<string | null>(null)

    const handleMenuClick = (menuId: string) => {
      setOpen(prevOpen => (prevOpen === menuId ? null : menuId))
    }

    // A função render é necessária para o estado (activeItem).
    return (
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Sidebar {...args}>
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
              Datta Able
            </Typography>
            <MenuIcon sx={{ ml: 'auto', color: 'grey.500' }} />
          </Sidebar.Header>
          <Sidebar.Content sx={{ py: 1.5, pl: 1.5 }}>
            {themedMenuData.map(section => (
              <List component="nav" dense key={section.title}>
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    px: 2,
                    py: 1,
                    color: 'grey.500',
                    fontSize: '0.65rem',
                  }}
                >
                  {section.title}
                </Typography>
                {section.items.map(item => {
                  const isMenuOpen = open === item.id
                  return (
                    <React.Fragment key={item.id}>
                      <ListItemButton
                        disabled={item.disabled}
                        onClick={() => {
                          if (item.subItems) {
                            handleMenuClick(item.id)
                          } else {
                            setActiveItem(item.id)
                            setOpen(null)
                          }
                        }}
                        sx={{
                          borderRadius: 1,
                          mb: 0.5,
                          ...(activeItem === item.id
                            ? darkThemeStyles.active
                            : darkThemeStyles.inactive),
                          '&.Mui-disabled': {
                            color: '#6C7A92',
                            '& .MuiListItemIcon-root': { color: '#6C7A92' },
                          },
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                        {item.subItems && (
                          <ChevronRightIcon
                            sx={{
                              fontSize: '1rem',
                              transform: isMenuOpen ? 'rotate(90deg)' : 'none',
                              transition: 'transform 0.2s',
                            }}
                          />
                        )}
                      </ListItemButton>
                      <Collapse in={isMenuOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {item.subItems?.map(subItem => (
                            <ListItemButton
                              key={subItem.id}
                              onClick={() => setActiveItem(subItem.id)}
                              sx={{
                                pl: 4.5,
                                borderRadius: 1,
                                mb: 0.5,
                                ...(activeItem === subItem.id
                                  ? darkThemeStyles.active
                                  : darkThemeStyles.inactive),
                              }}
                            >
                              <ListItemText
                                primary={subItem.text}
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    </React.Fragment>
                  )
                })}
              </List>
            ))}
          </Sidebar.Content>
        </Sidebar>
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: 'grey.100',
          }}
        >
          <Typography variant="h4">Conteúdo Principal da Página</Typography>
          <Typography sx={{ mt: 2 }}>O conteúdo da sua página ficaria aqui, ao lado do Sidebar.</Typography>
        </Box>
      </Box>
    )
  },
  args: {
    sx: {
      bgcolor: '#2C3E5D',
      borderColor: 'transparent',
    },
  },
}

export const ThemedFloating: Story = {
  name: 'Layout Temático Flutuante',
  render: function Render(args) {
    const [activeItem, setActiveItem] = React.useState('Dashboard')
    const [open, setOpen] = React.useState<string | null>(null)

    const handleMenuClick = (menuId: string) => {
      setOpen(prevOpen => (prevOpen === menuId ? null : menuId))
    }

    return (
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100vh',
          bgcolor: 'grey.200',
          p: 2,
          boxSizing: 'border-box',
          gap: 2,
        }}
      >
        <Sidebar {...args}>
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
              Datta Able
            </Typography>
            <MenuIcon sx={{ ml: 'auto', color: 'grey.500' }} />
          </Sidebar.Header>
          <Sidebar.Content sx={{ py: 1.5, pl: 1.5 }}>
            {themedMenuData.map(section => (
              <List component="nav" dense key={section.title}>
                <Typography
                  variant="caption"
                  sx={{
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    px: 2,
                    py: 1,
                    color: 'grey.500',
                    fontSize: '0.65rem',
                  }}
                >
                  {section.title}
                </Typography>
                {section.items.map(item => {
                  const isMenuOpen = open === item.id
                  return (
                    <React.Fragment key={item.id}>
                      <ListItemButton
                        disabled={item.disabled}
                        onClick={() => {
                          if (item.subItems) {
                            handleMenuClick(item.id)
                          } else {
                            setActiveItem(item.id)
                            setOpen(null)
                          }
                        }}
                        sx={{
                          borderRadius: 1,
                          mb: 0.5,
                          ...(activeItem === item.id
                            ? darkThemeStyles.active
                            : darkThemeStyles.inactive),
                          '&.Mui-disabled': {
                            color: '#6C7A92',
                            '& .MuiListItemIcon-root': { color: '#6C7A92' },
                          },
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                        {item.subItems && (
                          <ChevronRightIcon
                            sx={{
                              fontSize: '1rem',
                              transform: isMenuOpen ? 'rotate(90deg)' : 'none',
                              transition: 'transform 0.2s',
                            }}
                          />
                        )}
                      </ListItemButton>
                      <Collapse in={isMenuOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {item.subItems?.map(subItem => (
                            <ListItemButton
                              key={subItem.id}
                              onClick={() => setActiveItem(subItem.id)}
                              sx={{
                                pl: 4.5,
                                borderRadius: 1,
                                mb: 0.5,
                                ...(activeItem === subItem.id
                                  ? darkThemeStyles.active
                                  : darkThemeStyles.inactive),
                              }}
                            >
                              <ListItemText
                                primary={subItem.text}
                                primaryTypographyProps={{ variant: 'body2' }}
                              />
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    </React.Fragment>
                  )
                })}
              </List>
            ))}
          </Sidebar.Content>
        </Sidebar>
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: '#ffffff',
            borderRadius: 2,
            height: '100%',
            boxShadow: 3,
          }}
        >
          <Typography variant="h4">Conteúdo Principal</Typography>
          <Typography sx={{ mt: 2 }}>
            Esta é a área de conteúdo principal ao lado do Sidebar temático e flutuante.
          </Typography>
        </Box>
      </Box>
    )
  },
  args: {
    sx: {
      bgcolor: '#2C3E5D',
      borderColor: 'transparent',
      height: '100%',
      borderRadius: 2,
      boxShadow: 3,
      borderRight: 'none',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Combina o estilo visual do "Layout Temático" com o posicionamento "Flutuante". O Sidebar mantém seu tema escuro, mas agora possui bordas arredondadas, sombra e margens em relação à tela.',
      },
    },
  },
}

export const Default: Story = {
  name: 'Padrão',
  // Recriando a estória Padrão a partir da estrutura funcional da estória temática
  // para garantir que o contentPaddingRight funcione corretamente.
  render: function Render(args) {
    const [activeItem, setActiveItem] = React.useState('Página Inicial')
    const [open, setOpen] = React.useState<string | null>(null)

    const handleMenuClick = (menuId: string) => {
      setOpen(prevOpen => (prevOpen === menuId ? null : menuId))
    }

    return (
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Sidebar {...args}>
          <Sidebar.Header>
            <Typography variant="h6">Meu App</Typography>
          </Sidebar.Header>
          <Sidebar.Content>
            <List component="nav" dense>
              {defaultMenuData.map(item => (
                <React.Fragment key={item.id}>
                  <ListItemButton
                    onClick={() => {
                      if (item.subItems) {
                        handleMenuClick(item.id)
                      } else {
                        setActiveItem(item.id)
                        setOpen(null)
                      }
                    }}
                    sx={{
                      borderRadius: 1,
                      mb: 0.5,
                      ...(activeItem === item.id
                        ? lightThemeStyles.active
                        : lightThemeStyles.inactive),
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                    {item.subItems && (
                      <ChevronRightIcon
                        sx={{
                          fontSize: '1rem',
                          transform:
                            open === item.id ? 'rotate(90deg)' : 'none',
                          transition: 'transform 0.2s',
                        }}
                      />
                    )}
                  </ListItemButton>
                  <Collapse
                    in={open === item.id}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.subItems?.map(subItem => (
                        <ListItemButton
                          key={subItem.id}
                          onClick={() => setActiveItem(subItem.id)}
                          sx={{
                            pl: 4.5,
                            borderRadius: 1,
                            mb: 0.5,
                            ...(activeItem === subItem.id
                              ? lightThemeStyles.active
                              : lightThemeStyles.inactive),
                          }}
                        >
                          <ListItemText
                            primary={subItem.text}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              ))}
            </List>
          </Sidebar.Content>
          <Sidebar.Footer>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar />
              <Box>
                <Typography variant="subtitle2">Usuário</Typography>
                <Typography variant="body2" color="text.secondary">
                  user@email.com
                </Typography>
              </Box>
            </Box>
          </Sidebar.Footer>
        </Sidebar>
        <Box
          sx={{
            flexGrow: 1,
            p: 3,
            bgcolor: 'grey.100',
          }}
        >
          <Typography variant="h4">Conteúdo Principal da Página</Typography>
          <Typography sx={{ mt: 2 }}>O conteúdo da sua página ficaria aqui, ao lado do Sidebar.</Typography>
        </Box>
      </Box>
    )
  },
}
