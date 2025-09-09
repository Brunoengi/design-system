import React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
const Accordion = ({
  allContent,
  className,
  expandIcon = <ExpandMoreIcon />,
  allowMultiple = true,
  ...rest
}: AccordionProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={className} {...rest}>
      {allContent.map((oneContent, index) => {
        const panelId = `panel${index}`;
        // Controla o estado apenas se `allowMultiple` for falso
        const controlledProps = allowMultiple
          ? {}
          : {
              expanded: expanded === panelId,
              onChange: handleChange(panelId),
            };

        return (
          <MuiAccordion
            key={panelId}
            disabled={oneContent.disabled}
            {...controlledProps}
          >
          <AccordionSummary
            expandIcon={expandIcon}
            aria-controls={`${panelId}-content`}
            id={`${panelId}-header`}
          >
            {oneContent.title}
          </AccordionSummary>
          <AccordionDetails>{oneContent.content}</AccordionDetails>
        </MuiAccordion>
        );
      })}
    </div>
  );
};

export default Accordion;