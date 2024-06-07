import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { VariantProps } from 'class-variance-authority'
import { DisclosureVariants, DisclosureStyles } from './Disclosure.style'

export type DisclosureProps = VariantProps<typeof DisclosureVariants> & {
  allContent: {
    title: React.ReactNode,
    content: React.ReactNode
  }[] 
} & React.HTMLAttributes<HTMLDivElement>

const DisclosureComponent = ({ allContent, className, textAlign, width, borderColor, borderRadius, backgroundColor, borderWidth, ...rest}: DisclosureProps) => {
  return (
    <div className={`${DisclosureStyles.container} ${DisclosureVariants({width, borderRadius})} ${className}`}>
      {allContent.map((oneContent, index) => (
        <Disclosure
          key={index}
         >
          <div
            className={DisclosureVariants({borderWidth, borderColor})}
          >
            <DisclosureButton className={`${DisclosureStyles.button} ${DisclosureVariants({backgroundColor})}`}>
              {oneContent.title}
              <ChevronDownIcon className={`${DisclosureStyles.icon}`} />
            </DisclosureButton>
            <DisclosurePanel className={`${DisclosureStyles.painel} ${DisclosureVariants({textAlign})}`}>
              {oneContent.content}
            </DisclosurePanel>
          </div>
        </Disclosure>
      ))}
    </div>
  )
}

export default DisclosureComponent