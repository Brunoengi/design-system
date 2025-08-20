import React from 'react'
import classNames from 'classnames'

export type PanelProps = {
  /**
   * O conteúdo a ser renderizado dentro do painel.
   */
  children: React.ReactNode
  /**
   * Classes CSS adicionais para customizar o painel.
   */
  className?: string
}

const Panel = ({ children, className }: PanelProps) => (
  <div
    className={classNames(
      'flex items-center justify-center p-4 border-tertiary h-full min-h-[200px] text-gray-secondary bg-light',
      className
    )}
  >
    {children}
  </div>
)

export default Panel