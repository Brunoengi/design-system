import React from 'react';
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Um array de objetos, onde cada objeto representa um painel do accordion.
     */
    allContent: {
        /**
         * O conteúdo a ser exibido no cabeçalho do painel.
         */
        title: React.ReactNode;
        /**
         * O conteúdo a ser exibido dentro do painel quando expandido.
         */
        content: React.ReactNode;
        /**
         * Se `true`, o painel estará desabilitado.
         */
        disabled?: boolean;
    }[];
    /**
     * O ícone a ser exibido para expandir/recolher o painel.
     * @default <ExpandMoreIcon />
     */
    expandIcon?: React.ReactNode;
    /**
     * Se `true`, mais de um painel do accordion pode ser expandido ao mesmo tempo.
     * Se `false`, abrir um painel fechará os outros.
     * @default true
     */
    allowMultiple?: boolean;
}
/**
 * O componente Accordion permite ao usuário mostrar e esconder seções de conteúdo.
 * É construído utilizando o Accordion do Material-UI.
 */
declare const Accordion: ({ allContent, className, expandIcon, allowMultiple, ...rest }: AccordionProps) => import("react/jsx-runtime").JSX.Element;
export default Accordion;
