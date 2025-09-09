import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box } from '@mui/material';
import { AccountCircle, Lock, AttachMoney } from '@mui/icons-material';
import InputGroup from './InputGroup';
import Input from '../Input/Input';

const meta: Meta<typeof InputGroup> = {
  title: 'Input/InputGroup',
  component: InputGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'O tamanho dos inputs no grupo.',
    },
    borderRadius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Define o raio da borda do grupo.',
    },
    direction: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'A direção na qual os inputs serão agrupados.',
    },
    disabled: {
      control: 'boolean',
      description: 'Se `true`, todo o grupo de inputs será desabilitado.',
    },
    error: {
      control: 'boolean',
      description: 'Se `true`, o grupo de inputs indicará um estado de erro.',
    },
    children: {
      control: false,
      description: 'O conteúdo do componente. Espera-se que sejam `Input`s.',
    },
  },
  args: {
    size: 'medium',
    borderRadius: 'md',
    direction: 'horizontal',
    disabled: false,
    error: false,
  },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Sizes: Story = {
  name: 'Tamanhos',
  render: () => (
    <Box display="flex" flexDirection="column" gap={4} width={400}>
      <InputGroup size="small">
        <Input label="Nome (Pequeno)" />
        <Input label="Sobrenome (Pequeno)" />
      </InputGroup>
      <InputGroup size="medium">
        <Input label="Nome (Médio)" />
        <Input label="Sobrenome (Médio)" />
      </InputGroup>
      <InputGroup size="large">
        <Input label="Nome (Grande)" />
        <Input label="Sobrenome (Grande)" />
      </InputGroup>
    </Box>
  ),
  argTypes: {
    size: {
      table: { disable: true },
    },
  },
};

export const BorderRadius: Story = {
  name: 'Raio da Borda',
  render: () => (
    <Box display="flex" flexDirection="column" gap={4} width={400}>
      <InputGroup borderRadius="none">
        <Input label="Borda (none)" />
        <Input label="Sobrenome" />
      </InputGroup>
      <InputGroup borderRadius="sm">
        <Input label="Borda (sm)" />
        <Input label="Sobrenome" />
      </InputGroup>
      <InputGroup borderRadius="md">
        <Input label="Borda (md)" />
        <Input label="Sobrenome" />
      </InputGroup>
      <InputGroup borderRadius="lg">
        <Input label="Borda (lg)" />
        <Input label="Sobrenome" />
      </InputGroup>
      <InputGroup borderRadius="full">
        <Input label="Borda (full)" />
        <Input label="Sobrenome" />
      </InputGroup>
    </Box>
  ),
  argTypes: { borderRadius: { table: { disable: true } } },
};

export const Horizontal: Story = {
  name: 'Horizontal',
  render: (args) => (
    <Box width={400}>
      <InputGroup {...args}>
        <Input label="Nome" />
        <Input label="Sobrenome" />
      </InputGroup>
    </Box>
  ),
};

export const VerticalWithDisabledInput: Story = {
  name: 'Vertical com Input Desabilitado',
  args: {
    direction: 'vertical',
  },
  render: (args) => (
    <Box width={300}>
      <InputGroup {...args}>
        <Input label="Peso" type="number" endAdornment="kg" />
        <Input
          label="Distância (desabilitado)"
          type="number"
          endAdornment="m"
          disabled
        />
        <Input label="Tempo" type="number" endAdornment="s" />
      </InputGroup>
    </Box>
  ),
};

export const HorizontalWithDisabledInput: Story = {
  name: 'Horizontal com Input Desabilitado',
  render: (args) => (
    <Box width={500}>
      <InputGroup {...args}>
        <Input label="Altura" type="number" endAdornment="cm" />
        <Input label="Largura (desabilitado)" type="number" endAdornment="cm" disabled />
        <Input label="Profundidade" type="number" endAdornment="cm" />
      </InputGroup>
    </Box>
  ),
};

export const Vertical: Story = {
  name: 'Vertical',
  args: {
    direction: 'vertical',
  },
  render: (args) => (
    <Box width={300}>
      <InputGroup {...args}>
        <Input label="Endereço" />
        <Input label="Cidade" />
        <Input label="CEP" type="number" />
      </InputGroup>
    </Box>
  ),
};

export const WithAdornments: Story = {
  name: 'Com Adornos',
  render: (args) => (
    <Box width={500}>
      <InputGroup {...args}>
        <Input
          label="Usuário"
          startAdornment={<AccountCircle />}
          defaultValue="bruno.santos"
        />
        <Input
          label="Senha"
          type="password"
          startAdornment={<Lock />}
          defaultValue="123456"
        />
        <Input
          label="Salário"
          type="number"
          startAdornment={<AttachMoney />}
        />
      </InputGroup>
    </Box>
  ),
};

export const WithError: Story = {
  name: 'Com Erro',
  args: {
    error: true,
  },
  render: (args) => (
    <Box width={400}>
      <InputGroup {...args}>
        <Input label="Email" defaultValue="email-invalido" />
        <Input label="Confirme o Email" />
      </InputGroup>
    </Box>
  ),
};

export const Disabled: Story = {
  name: 'Desabilitado',
  args: {
    disabled: true,
  },
  render: (args) => (
    <Box width={400}>
      <InputGroup {...args}>
        <Input label="Campo 1" defaultValue="Valor 1" />
        <Input label="Campo 2" defaultValue="Valor 2" />
      </InputGroup>
    </Box>
  ),
};

export const VerticalWithSuffixes: Story = {
  name: 'Vertical com Sufixos',
  args: {
    direction: 'vertical',
  },
  render: (args) => (
    <Box width={300}>
      <InputGroup {...args}>
        <Input label="Peso" type="number" endAdornment="kg" />
        <Input label="Distância" type="number" endAdornment="m" />
        <Input label="Tempo" type="number" endAdornment="s" />
      </InputGroup>
    </Box>
  ),
};

export const HorizontalWithSuffixes: Story = {
  name: 'Horizontal com Sufixos',
  render: (args) => (
    <Box width={500}>
      <InputGroup {...args}>
        <Input label="Altura" type="number" endAdornment="cm" />
        <Input label="Largura" type="number" endAdornment="cm" />
        <Input label="Profundidade" type="number" endAdornment="cm" />
      </InputGroup>
    </Box>
  ),
};