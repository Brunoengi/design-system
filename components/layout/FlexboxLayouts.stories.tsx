import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Box as MuiBox,
  Typography as MuiTypography,
  Paper,
  BoxProps,
  TypographyProps,
} from '@mui/material'

const meta: Meta<typeof MuiBox> = {
  title: 'Layout/Flexbox Examples',
  component: MuiBox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    // Container props
    flexDirection: {
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      table: { category: 'Container Props' },
    },
    justifyContent: {
      control: 'select',
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      table: { category: 'Container Props' },
    },
    alignItems: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      table: { category: 'Container Props' },
    },
    flexWrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      table: { category: 'Container Props' },
    },
    alignContent: {
      control: 'select',
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'stretch',
      ],
      description: 'Requires flex-wrap: wrap and multiple lines of items.',
      table: { category: 'Container Props' },
    },
    gap: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
      table: { category: 'Container Props' },
    },
    // Item props
    flexGrow: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description: 'Applied to the second item for demonstration.',
      table: { category: 'Item Props' },
    },
    flexShrink: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description: 'Applied to all items for demonstration.',
      table: { category: 'Item Props' },
    },
    flexBasis: {
      control: 'text',
      description: 'Applied to the third item for demonstration (e.g., "150px").',
      table: { category: 'Item Props' },
    },
  },
}

export default meta
type Story = StoryObj<typeof MuiBox>

// Wrapper components to ensure Storybook displays the correct name in the code preview.
// This is a common workaround for MUI components that use forwardRef.
const Box = (props: BoxProps) => <MuiBox {...props} />
const Typography = (props: TypographyProps) => <MuiTypography {...props} />

const StyledBox = (props: { children: React.ReactNode; sx?: object }) => (
  <Paper
    elevation={2}
    sx={{
      p: 2,
      minWidth: 80,
      minHeight: 80,
      bgcolor: 'primary.light',
      color: 'primary.contrastText',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...props.sx,
    }}
  >
    <Typography variant="body2" component="div">
      {props.children}
    </Typography>
  </Paper>
)

export const JustifyContent: Story = {
  name: 'Container: Justify Content',
  render: (args) => (
    <Box
      sx={{
        display: 'flex',
        p: 2,
        bgcolor: 'grey.200',
        borderRadius: 1,
        minHeight: 300,
        width: '100%',
        justifyContent: args.justifyContent,
        gap: args.gap,
      }}
    >
      <StyledBox>Item 1</StyledBox>
      <StyledBox>Item 2</StyledBox>
      <StyledBox>Item 3</StyledBox>
    </Box>
  ),
  args: {
    justifyContent: 'flex-start',
    gap: 1,
  },
}

export const MainContentAndFooter: Story = {
  name: 'Layout: Conteúdo e Rodapé',
  render: args => (
    <Box
      sx={{
        display: 'flex',
        p: 2,
        bgcolor: 'grey.200',
        borderRadius: 1,
        minHeight: 300,
        width: '100%',
        flexDirection: 'column',
        gap: args.gap,
      }}
    >
      <StyledBox
        sx={{
          flexGrow: 1,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          p: 3,
        }}
      >
        <div>
          <Typography variant="h6" component="h3" gutterBottom>
            Conteúdo Principal
          </Typography>
          <Typography variant="body1">
            Este container tem <code>flexGrow: 1</code>, fazendo com que ele se
            expanda e ocupe todo o espaço vertical disponível.
          </Typography>
        </div>
      </StyledBox>
      <StyledBox sx={{ bgcolor: 'secondary.main', minHeight: 'auto' }}>
        Rodapé (altura automática)
      </StyledBox>
    </Box>
  ),
  args: {
    gap: 2,
  },
}

export const AlignItems: Story = {
  name: 'Container: Align Items',
  render: (args) => (
    <Box
      sx={{
        display: 'flex',
        p: 2,
        bgcolor: 'grey.200',
        borderRadius: 1,
        minHeight: 300,
        width: '100%',
        alignItems: args.alignItems,
        gap: args.gap,
      }}
    >
      <StyledBox sx={{ minHeight: 120 }}>Item 1</StyledBox>
      <StyledBox>Item 2</StyledBox>
      <StyledBox sx={{ minHeight: 60 }}>Item 3</StyledBox>
    </Box>
  ),
  args: {
    alignItems: 'stretch',
    gap: 1,
  },
}

export const FlexDirection: Story = {
  name: 'Container: Flex Direction',
  render: (args) => (
    <Box
      sx={{
        display: 'flex',
        p: 2,
        bgcolor: 'grey.200',
        borderRadius: 1,
        minHeight: 300,
        width: '100%',
        flexDirection: args.flexDirection,
        gap: args.gap,
      }}
    >
      <StyledBox>Item 1</StyledBox>
      <StyledBox>Item 2</StyledBox>
      <StyledBox>Item 3</StyledBox>
    </Box>
  ),
  args: {
    flexDirection: 'row',
    gap: 1,
  },
}

export const FlexWrap: Story = {
  name: 'Container: Flex Wrap',
  render: (args) => (
    <Box
      sx={{
        display: 'flex',
        p: 2,
        bgcolor: 'grey.200',
        borderRadius: 1,
        minHeight: 300,
        width: '100%',
        flexWrap: args.flexWrap,
        gap: args.gap,
      }}
    >
      <StyledBox sx={{ width: '40%' }}>Item 1 (40%)</StyledBox>
      <StyledBox sx={{ width: '40%' }}>Item 2 (40%)</StyledBox>
      <StyledBox sx={{ width: '40%' }}>Item 3 (40%)</StyledBox>
    </Box>
  ),
  args: {
    flexWrap: 'wrap',
    gap: 1,
  },
}

export const AlignContent: Story = {
  name: 'Container: Align Content',
  render: (args) => (
    <Box
      sx={{
        display: 'flex',
        p: 2,
        bgcolor: 'grey.200',
        borderRadius: 1,
        minHeight: 300,
        width: '100%',
        flexWrap: 'wrap',
        alignContent: args.alignContent,
        gap: args.gap,
      }}
    >
      <StyledBox sx={{ width: '30%' }}>Item 1</StyledBox>
      <StyledBox sx={{ width: '30%' }}>Item 2</StyledBox>
      <StyledBox sx={{ width: '30%' }}>Item 3</StyledBox>
      <StyledBox sx={{ width: '30%' }}>Item 4</StyledBox>
      <StyledBox sx={{ width: '30%' }}>Item 5</StyledBox>
    </Box>
  ),
  args: {
    alignContent: 'stretch',
    gap: 1,
  },
}

export const FlexFlow: Story = {
  name: 'Container: Flex Flow (Shorthand)',
  render: (args) => (
    <Box
      sx={{
        display: 'flex',
        p: 2,
        bgcolor: 'grey.200',
        borderRadius: 1,
        minHeight: 300,
        width: '100%',
        flexFlow: `${args.flexDirection} ${args.flexWrap}`,
        gap: args.gap,
      }}
    >
      <StyledBox sx={{ width: '40%' }}>Item 1</StyledBox>
      <StyledBox sx={{ width: '40%' }}>Item 2</StyledBox>
      <StyledBox sx={{ width: '40%' }}>Item 3</StyledBox>
    </Box>
  ),
  args: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 1,
  },
}

export const FlexGrow: Story = {
  name: 'Item: Flex Grow',
  render: (args) => (
    <Box
      sx={{
        display: 'flex',
        p: 2,
        bgcolor: 'grey.200',
        borderRadius: 1,
        minHeight: 300,
        width: '100%',
        gap: args.gap,
      }}
    >
      <StyledBox sx={{ flexGrow: 1 }}>Item 1 (grow: 1)</StyledBox>
      <StyledBox sx={{ flexGrow: args.flexGrow, bgcolor: 'secondary.main' }}>Item 2 (grow: {args.flexGrow})</StyledBox>
      <StyledBox sx={{ flexGrow: 1 }}>Item 3 (grow: 1)</StyledBox>
    </Box>
  ),
  args: {
    flexGrow: 2,
    gap: 1,
  },
}

export const FlexShrink: Story = {
  name: 'Item: Flex Shrink',
  render: (args) => (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography variant="caption" display="block" gutterBottom>
        O container abaixo tem largura fixa. Reduza a tela ou o painel para ver o efeito de encolhimento.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          p: 2,
          bgcolor: 'grey.200',
          borderRadius: 1,
          minHeight: 300,
          width: 600,
          gap: args.gap,
        }}
      >
        <StyledBox sx={{ flexShrink: args.flexShrink, width: 250 }}>Item 1 (shrink: {args.flexShrink})</StyledBox>
        <StyledBox sx={{ flexShrink: 1, width: 250, bgcolor: 'secondary.main' }}>Item 2 (shrink: 1)</StyledBox>
        <StyledBox sx={{ flexShrink: args.flexShrink, width: 250 }}>Item 3 (shrink: {args.flexShrink})</StyledBox>
      </Box>
    </Box>
  ),
  args: {
    flexShrink: 1,
    gap: 1,
  },
}

export const FlexBasis: Story = {
  name: 'Item: Flex Basis',
  render: (args) => (
    <Box
      sx={{
        display: 'flex',
        p: 2,
        bgcolor: 'grey.200',
        borderRadius: 1,
        minHeight: 300,
        width: '100%',
        gap: args.gap,
      }}
    >
      <StyledBox sx={{ flexGrow: 1, flexBasis: '100px' }}>Item 1 (basis: 100px)</StyledBox>
      <StyledBox sx={{ flexGrow: 1, flexBasis: '100px' }}>Item 2 (basis: 100px)</StyledBox>
      <StyledBox sx={{ flexGrow: 1, flexBasis: args.flexBasis, bgcolor: 'secondary.main' }}>Item 3 (basis: {args.flexBasis})</StyledBox>
    </Box>
  ),
  args: {
    flexBasis: '200px',
    gap: 1,
  },
}
