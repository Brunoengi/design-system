import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Box,
  Typography,
  Avatar,
} from '@mui/material'
import Sidebar from '../components/surface/Sidebar/Sidebar'
import Select from '../components/input/Select/Select'
import InputGroup  from '../components/input/InputGroup/InputGroup'
import Button from '../components/input/Button/Button'
import Title from '../components/dataDisplay/Title/Title'
import Input from '../components/input/Input/Input'




const meta: Meta = {
  title: 'Pages/Página com Inputs',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [Story => <Story />],
}

export default meta

type Story = StoryObj

export const Default: Story = {
  name: 'Página com Sidebar e Conteúdo',
  render: () => {
    const [selectedValue, setSelectedValue] = React.useState('500')

    const selectOptions = [
      {
        label: '500 (CA-50)',
        value: '500'
      },
      {
        label: '600 (CA-60)',
        value: '600'
      },
      {
        label: 'Opção Desabilitada',
        value: 'disabled'
      },
    ]

    // Estilos reutilizáveis para componentes de input em fundo escuro
    const darkInputGroupSx = {
      width:'100%',
      // Cor da borda do grupo
      borderColor: 'rgba(255, 255, 255, 0.5)',
      '&:hover': {
        borderColor: 'common.white',
      },
      // Cor da borda e "glow" quando um input interno está focado
      '&:has(.Mui-focused)': {
        borderColor: 'common.white',
        boxShadow: '0 0 0 1px #fff',
      },
      // Cor do texto, labels e adornos de todos os inputs filhos
      // Alvejamos o texto do input e a tipografia DENTRO do adorno
      '& .MuiInputBase-input, & .MuiInputAdornment-root .MuiTypography-root': {
        color: 'common.white', 
      },
      '& .MuiInputLabel-root': {
        color: 'rgba(255, 255, 255, 0.7)',
      },
      // Cor do label quando focado
      '& .MuiInputLabel-root.Mui-focused': {
        color: 'black',
      },
      // Estilos para o estado desabilitado
      '& .Mui-disabled': {
        color: 'rgba(255, 255, 255, 0.5) !important', // !important para garantir a sobreposição
        WebkitTextFillColor: 'rgba(255, 255, 255, 0.5)',
      },
    };

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
        {/* --- Sidebar --- */}
        <Sidebar
          sx={{
            bgcolor: '#2C3E5D',
            height: '100%',
            minWidth: 250,
            borderRadius: 2,
            boxShadow: 3,
            borderRight: 'none',
          }}
        >
          <Sidebar.Header
            sx={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{ ml: 1.5, color: 'common.white', fontWeight: 'bold'}}
            >
              Dados de Entrada
            </Typography>
          </Sidebar.Header>
          <Sidebar.Content sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2, alignItems:'center'}}>
            <Select
              label="Selecione uma opção"
              options={selectOptions}
              value={selectedValue}
              onChange={e => setSelectedValue(e.target.value as string)}
              sx={{
                // Estiliza o label
                '& .MuiInputLabel-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
                // Estiliza o label quando focado
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'common.white',
                },
                // Estiliza o texto do valor selecionado
                '& .MuiSelect-select': {
                  color: 'common.white',
                },
                // Estiliza o ícone do dropdown
                '& .MuiSelect-icon': {
                  color: 'rgba(255, 255, 255, 0.7)',
                },
                // Estiliza a borda
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                },
                // Estiliza a borda no hover
                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'common.white',
                },
              }}
            
            />

            <Title sx={{color: '#ffffffaf'}}>Pesos</Title>
            <InputGroup
                size='small'
                borderRadius="md"
                direction="vertical"
                sx={darkInputGroupSx}
            >
                <Input
                endAdornment="kN/m"
                label="Peso Próprio (desabilitado)"
                disabled
                type="number"
                />
                <Input
                endAdornment="kN/m"
                label="Distância (desabilitado)"
                type="number"
                />
                <Input
                endAdornment="kN/m"
                label="Tempo"
                type="number"
                />
            </InputGroup>
            <Title sx={{color: '#ffffffaf'}}>Coeficientes de Ponderação</Title>
            <InputGroup
                borderRadius="md"
                direction="vertical"
                size='small'
                sx={darkInputGroupSx}
            >
                <Input
                
                label="Peso Próprio (desabilitado)"
                disabled
                type="number"
                />
                <Input
                
                label="Distância (desabilitado)"
                type="number"
                />
                <Input
                
                label="Tempo"
                type="number"
                />
            </InputGroup>
            <Title sx={{color: '#ffffffaf'}}>Coeficientes de Majoração</Title>
            <InputGroup
                borderRadius="md"
                direction="vertical"
                size='small'
                sx={darkInputGroupSx}
            >
                <Input
                
                label="Peso Próprio (desabilitado)"
                disabled
                type="number"
                />
                <Input
                
                label="Distância (desabilitado)"
                type="number"
                />
                <Input
                
                label="Tempo"
                type="number"
                />
            </InputGroup>
            <Box
            sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
                gap:'10px'
            }
            }
            >
                <Button variant='contained'>Calcular</Button>
                <Button variant='contained'>Salvar</Button>
            </Box>
          </Sidebar.Content>
          <Sidebar.Footer>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar />
              <Box>
                <Typography variant="subtitle2" sx={{ color: 'common.white' }}>Usuário</Typography>
                <Typography variant="body2" sx={{ color: 'grey.500' }}>
                  user@email.com
                </Typography>
              </Box>
            </Box>
          </Sidebar.Footer>
        </Sidebar>

        {/* --- Área de Conteúdo Principal --- */}
        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: 2,
            boxShadow: 3,
            flexGrow: 1,
            p: 3,
          }}
        >
          <Typography variant="h4">Título da Página</Typography>
          <Typography sx={{ mt: 2 }} paragraph>
            Este é um layout de página padrão com um Sidebar à esquerda e uma área de conteúdo principal à direita.
          </Typography>
        </Box>
      </Box>
    )
  },
}
