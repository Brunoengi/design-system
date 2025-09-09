import React from 'react'
import PersonCard, {
  PersonCardProps,
} from '../PersonCard/PersonCard'
import { Box, type BoxProps } from '@mui/material'

export type TeamCardProps = {
  /**
   * Uma lista de membros da equipe, onde cada membro é um objeto com as props do PersonCard.
   */
  members: PersonCardProps[]
  /**
   * Permite customizar o estilo do container que envolve os membros.
   */
  membersContainerStyle?: React.CSSProperties
  /**
   * Define o espaçamento entre os membros da equipe.
   * Se não for fornecido, o valor será baseado na prop `size`.
   */
  memberGap?: number | string
  /**
   * Define o tamanho geral do card e seus elementos internos.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * Define o alinhamento horizontal dos membros da equipe.
   * @default 'flex-start'
   */
  justifyMembers?: React.CSSProperties['justifyContent']
  /**
   * Controla o nível de sombra (elevação) de todos os cards de membro.
   * Aceita valores numéricos de 0 a 30.
   * @default 0
   */
  membersElevation?: number
  /**
   * Controla o nível de sombra (elevação) do container do time.
   * Aceita valores numéricos de 0 a 30.
   * @default 0
   */
  teamElevation?: number
  /**
   * Permite substituir o preenchimento (padding) de todos os cards de membro.
   * O valor é um multiplicador do espaçamento do tema.
   */
  membersPadding?: number
  /**
   * Permite aplicar estilos `sx` a cada `PersonCard` filho.
   */
  membersSx?: BoxProps['sx']
  /**
   * The system prop that allows defining system overrides as well as custom CSS.
   */
  sx?: BoxProps['sx']
} & BoxProps

const sizeStyles = {
  small: {
    titleVariant: 'h6' as const,
    gap: 2, // theme.spacing(2) = 16px
    memberWidth: '175px',
  },
  medium: {
    titleVariant: 'h5' as const,
    gap: 3, // theme.spacing(3) = 24px
    memberWidth: '200px',
  },
  large: {
    titleVariant: 'h4' as const,
    gap: 4, // theme.spacing(4) = 32px
    memberWidth: '250px',
  },
}

const generateShadow = (elevation: number): string => {
  if (elevation <= 0) {
    return 'none'
  }
  const clampedElevation = Math.max(0, Math.min(elevation, 30))
  const yOffset = Math.round(clampedElevation / 2)
  const blur = Math.round(clampedElevation * 1.5)
  return `0px ${yOffset}px ${blur}px rgba(0, 0, 0, 0.2)`
}

const TeamCard = ({
  members,
  membersContainerStyle,
  memberGap,
  teamElevation = 0,
  membersElevation = 0,
  membersPadding,
  membersSx,
  justifyMembers = 'flex-start',
  size = 'medium',
  style,
  sx,
  ...props
}: TeamCardProps) => {
  const styles = sizeStyles[size]

  return (
    <Box
      style={style}
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          padding: styles.gap,
          borderRadius: '4px',
          boxShadow: generateShadow(teamElevation),
          gap: styles.gap, // Adiciona espaçamento entre o título e os membros
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      <Box
        style={membersContainerStyle}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: memberGap ?? styles.gap,
          justifyContent: justifyMembers,
        }}
      >
        {members.map((member, index) => (
          <Box
            key={`${member.name}-${index}`}
            sx={{
              flexBasis: styles.memberWidth,
              minWidth: styles.memberWidth,
            }}
          >
            <PersonCard
              {...member}
              size={size}
              elevation={membersElevation}
              padding={membersPadding}
              sx={membersSx}
            />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default TeamCard
