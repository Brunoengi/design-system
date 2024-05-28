export type TypographyProps = {
  variant?: string
  size?: 'xs' | 'sm' | 'md' | 'xl' | 'title1' | 'title2' | 'title3';
  children: React.ReactNode
  element: keyof JSX.IntrinsicElements
} & JSX.IntrinsicElements["p"]


const Typography = ({variant= "", size = "xs", children, element = "p", ...rest}: TypographyProps) => {
  const Element = element as any
  return <Element {...rest}>{children}</Element>
}

export default Typography