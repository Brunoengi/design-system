import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Container,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Link,
} from '@mui/material'
import Button from '../components/input/Button/Button'

const meta: Meta = {
  title: 'Pages/Login',
  parameters: {
    layout: 'fullscreen',
  },
  // Como esta é uma página completa, não precisa dos decorators globais do Sidebar.
  decorators: [Story => <Story />],
  tags: ["autodocs"]
}

export default meta

type Story = StoryObj

export const Default: Story = {
  name: 'Página de Login',
  render: () => (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <Box component="form" sx={{ mt: 1 }} noValidate>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar-me"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Entrar
          </Button>
          <Link href="#" variant="body2">
            Esqueceu a senha?
          </Link>
        </Box>
      </Box>
    </Container>
  ),
}
