import React from 'react'
import classNames from 'classnames'

interface SplitScreenProps {
  /**
   * The panels to be rendered inside the component.
   */
  children: React.ReactNode
  /**
   * The layout direction of the panels.
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * A list of sizes for each panel.
   * - Use a number for a proportional size (e.g., `[1, 2]` for a 1:2 ratio).
   * - Use a string with a unit (e.g., `'200px'`, `'25%'`) for a fixed size.
   * - If not provided, panels will be split equally.
   */
  sizes?: (string | number)[]
  /**
   * Additional CSS classes for the main container.
   */
  className?: string
}

const SplitScreen: React.FC<SplitScreenProps> = ({
  children,
  direction = 'horizontal',
  sizes,
  className
}) => {
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
        let style: React.CSSProperties = { flex: '1 1 0%' } // Default: equal split

        if (sizes && size !== undefined) {
          if (typeof size === 'number') {
            // Treats the number as a growth proportion (flex-grow)
            style = { flex: `${size} 1 0%` }
          } else if (typeof size === 'string') {
            // Treats the string as a fixed basis (flex-basis)
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