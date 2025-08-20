import React from 'react'
import classNames from 'classnames'

interface SplitScreenProps {
  /**
   * Os painéis a serem renderizados dentro do componente.
   */
  children: React.ReactNode
  /**
   * A direção do layout dos painéis.
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * Uma lista de tamanhos para cada painel.
   * - Use um número para um tamanho proporcional (ex: `[1, 2]` para uma proporção de 1:2).
   * - Use uma string com unidade (ex: `'200px'`, `'25%'`) para um tamanho fixo.
   * - Se não for fornecido, os painéis serão divididos igualmente.
   */
  sizes?: (string | number)[]
  /**
   * Classes CSS adicionais para o contêiner principal.
   */
  className?: string
}

const SplitScreen = ({
  children,
  direction = 'horizontal',
  sizes,
  className
}: SplitScreenProps) => {
  const childrenArray = React.Children.toArray(children)

  const containerClasses = classNames(
    'flex w-full h-full',
    {
      'flex-row': direction === 'horizontal',
      'flex-col': direction === 'vertical'
    },
    className
  )

  return (
    <div className={containerClasses}>
      {childrenArray.map((child, index) => {
        const size = sizes?.[index]
        let style: React.CSSProperties = { flex: '1 1 0%' } // Padrão: divisão igual

        if (sizes && size !== undefined) {
          if (typeof size === 'number') {
            // Trata o número como uma proporção de crescimento (flex-grow)
            style = { flex: `${size} 1 0%` }
          } else if (typeof size === 'string') {
            // Trata a string como uma base fixa (flex-basis)
            style = { flex: `0 0 ${size}` }
          }
        }

        return (
          <div key={index} style={style} className="overflow-auto">
            {child}
          </div>
        )
      })}
    </div>
  )
}

export default SplitScreen