import React from 'react'
import { Box, type BoxProps } from '@mui/material'

export interface SidebarProps extends BoxProps {
  /**
   * Define o espaçamento interno à direita para os subcomponentes (Header, Content, Footer).
   * O valor é um multiplicador do tema de espaçamento do MUI (theme.spacing).
   * @default 2
   */
  contentPaddingRight?: number
}

interface SidebarSubcomponentProps extends BoxProps {
  contentPaddingRight?: number
}

const Header: React.FC<SidebarSubcomponentProps> = ({
  contentPaddingRight,
  sx,
  ...props
}) => (
  <Box
    {...props}
    sx={[
      { py: 2, pl: 2, flexShrink: 0 },
      ...(Array.isArray(sx) ? sx : [sx]),
      { pr: contentPaddingRight },
    ]}
  />
)

const Content: React.FC<SidebarSubcomponentProps> = ({
  contentPaddingRight,
  sx,
  ...props
}) => (
  <Box
    {...props}
    sx={[
      { py: 2, pl: 2, flexGrow: 1, overflowY: 'auto' },
      ...(Array.isArray(sx) ? sx : [sx]),
      { pr: contentPaddingRight },
    ]}
  />
)

const Footer: React.FC<SidebarSubcomponentProps> = ({
  contentPaddingRight,
  sx,
  ...props
}) => (
  <Box
    {...props}
    sx={[
      {
        py: 2,
        pl: 2,
        flexShrink: 0,
      },
      ...(Array.isArray(sx) ? sx : [sx]),
      { pr: contentPaddingRight },
    ]}
  />
)

const SidebarRoot: React.FC<SidebarProps> = ({
  contentPaddingRight = 2,
  sx,
  children,
  ...props
}) => {
  // Clona os filhos para injetar a prop `contentPadding`
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        contentPaddingRight,
      })
    }
    return child
  })

  return (
    <Box
      component="aside"
      {...props}
      sx={[
        {
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          borderRight: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {childrenWithProps}
    </Box>
  )
}

const Sidebar = Object.assign(SidebarRoot, {
  Header,
  Content,
  Footer,
})

export default Sidebar