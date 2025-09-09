import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Popover from './Popover';
import { Typography, Box, Avatar, MenuList, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const meta: Meta<typeof Popover> = {
  title: 'Util/Popover',
  component: Popover,
  argTypes: {
    children: {
      control: 'text',
    },
    buttonLabel: {
      control: 'text',
    },
    anchorOrigin: {
      control: 'object',
    },
    transformOrigin: {
      control: 'object',
    },
    disablePadding: {
      control: 'boolean',
    },
  },
  tags: ["autodocs"],
  args: {
    buttonLabel: 'Open Popover',
    children: <Typography>The content of the Popover.</Typography>,
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left',
    },
  },
};

export const Placement: Story = {
  name: 'Posicionamento Customizado',
  args: {
    children: (
      <Typography sx={{ p: 1 }}>
        Use os controles para testar as diferentes posições.
      </Typography>
    ),
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center',
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center',
    },
  },
  argTypes: {
    children: { table: { disable: true } },
    'anchorOrigin.vertical': { options: ['top', 'center', 'bottom'], control: { type: 'select' } },
    'anchorOrigin.horizontal': { options: ['left', 'center', 'right'], control: { type: 'select' } },
    'transformOrigin.vertical': { options: ['top', 'center', 'bottom'], control: { type: 'select' } },
    'transformOrigin.horizontal': { options: ['left', 'center', 'right'], control: { type: 'select' } },
    anchorOrigin: { table: { disable: true } },
    transformOrigin: { table: { disable: true } },
  } as any,
};

export const WithCustomContent: Story = {
  name: 'Com Conteúdo Customizado',
  args: {
    buttonLabel: 'Ver Perfil',
    anchorOrigin: {
      vertical: 'center',
      horizontal: 'right',
    },
    transformOrigin: {
      vertical: 'center',
      horizontal: 'left',
    },
    children: (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 220 }}>
        <Avatar>
          <AccountCircleIcon />
        </Avatar>
        <Box>
          <Typography variant="subtitle1">John Doe</Typography>
          <Typography variant="body2" color="text.secondary">
            Engenheiro de Software
          </Typography>
        </Box>
      </Box>
    ),
  },
  argTypes: {
    children: { table: { disable: true } },
  },
};

export const AsAMenu: Story = {
  name: 'Como um Menu Simples',
  args: {
    buttonLabel: 'Abrir Menu',
    children: (
      <MenuList dense>
        <MenuItem onClick={() => alert('Perfil clicado!')}>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Perfil</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => alert('Configurações clicado!')}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Configurações</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => alert('Sair clicado!')}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Sair</ListItemText>
        </MenuItem>
      </MenuList>
    ),
    disablePadding: true,
    anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
    transformOrigin: { vertical: 'top', horizontal: 'right' },
  },
  argTypes: {
    children: { table: { disable: true } },
  },
};