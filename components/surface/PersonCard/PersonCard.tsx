import React from 'react'
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  IconButton,
  CardProps,
} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import LanguageIcon from '@mui/icons-material/Language'

// Define o formato de um link de rede social
export type SocialLink = {
  network: 'linkedin' | 'github' | 'twitter' | 'website'
  url: string
}

// Define as props para o componente PersonCard
export type PersonCardProps = {
  name: string
  title: string[]
  avatarUrl?: string
  socials?: SocialLink[]
  /**
   * Se `false`, o componente Avatar não será renderizado.
   * @default true
   */
  showAvatar?: boolean
  /**
   * Controla o nível de sombra (elevação) do card.
   * Um valor de 0 remove a sombra.
   * @default 1
   */
  elevation?: number
  /**
   * Define o tamanho geral do card e seus elementos internos.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Permite substituir o preenchimento (padding) padrão do card.
   * O valor é um multiplicador do espaçamento do tema (ex: 2 = theme.spacing(2)).
   */
  padding?: number
  /**
   * @deprecated Use a prop `sx` para definir a cor de fundo. Ex: `sx={{ backgroundColor: 'red' }}`
   */
  backgroundColor?: string
  /**
   * The system prop that allows defining system overrides as well as custom CSS.
   */
  sx?: CardProps['sx']
} & Omit<CardProps, 'title' | 'children' | 'sx'>

// Mapeia o nome da rede para o componente de ícone correspondente
const socialIconMap = {
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />,
  twitter: <TwitterIcon />,
  website: <LanguageIcon />,
}

const sizeStyles = {
  small: {
    avatar: { width: 60, height: 60 },
    nameVariant: 'h6' as const,
    titleVariant: 'caption' as const,
    contentPadding: 1.5,
    titleMinHeight: '3.74rem',
    avatarMarginBottom: 1.5,
    titleContainerMarginBottom: 1,
    socialsMarginTop: 1.5,
  },
  medium: {
    avatar: { width: 80, height: 80 },
    nameVariant: 'h5' as const,
    titleVariant: 'body2' as const,
    contentPadding: 3,
    titleMinHeight: '3.76rem',
    avatarMarginBottom: 2,
    titleContainerMarginBottom: 1.5,
    socialsMarginTop: 2,
  },
  large: {
    avatar: { width: 100, height: 100 },
    nameVariant: 'h4' as const,
    titleVariant: 'body1' as const,
    contentPadding: 4,
    titleMinHeight: '4.5rem',
    avatarMarginBottom: 2.5,
    titleContainerMarginBottom: 2,
    socialsMarginTop: 2.5,
  },
}

const PersonCard = ({
  name,
  title,
  avatarUrl,
  socials = [],
  showAvatar = true,
  elevation = 1,
  size = 'medium',
  padding,
  backgroundColor, // Mantido para retrocompatibilidade
  sx,
  ...rest
}: PersonCardProps) => {
  const styles = sizeStyles[size]
  const finalPadding = padding ?? styles.contentPadding

  return (
    <Card
      elevation={elevation}
      sx={[
        {
          maxWidth: 345,
          textAlign: 'center',
          // Define 'transparent' como padrão, mas permite que seja sobrescrito pela prop `sx`.
          backgroundColor: 'transparent',
        },
        ...(Array.isArray(sx) ? sx : [sx]), // Aplica a nova prop sx
      ]}
      {...rest}
    >
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: finalPadding, '&:last-child': { pb: finalPadding } }}>
        {showAvatar && (
          <Avatar alt={name} src={avatarUrl} sx={{ ...styles.avatar, mb: styles.avatarMarginBottom }} />
        )}
        <Typography variant={styles.nameVariant} component="div">{name}</Typography>
        <Box sx={{ minHeight: styles.titleMinHeight, display: 'flex', flexDirection: 'column', justifyContent: 'center', mb: styles.titleContainerMarginBottom }}>
          {title.slice(0, 3).map((t, index) => (
            <Typography key={index} color="text.secondary" variant={styles.titleVariant}>{t}</Typography>
          ))}
        </Box>
        {socials.length > 0 && (
          <Box sx={{ mt: styles.socialsMarginTop }}>
            {socials.map(social => (
              <IconButton key={social.network} component="a" href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s ${social.network}`}>
                {socialIconMap[social.network]}
              </IconButton>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

export default PersonCard
