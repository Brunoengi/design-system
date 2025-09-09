import React, { useState } from 'react';
import { Popover, Button, Box } from '@mui/material';
import type { PopoverOrigin } from '@mui/material';

export type PopoverProps = {
  /**
   * O conteúdo a ser exibido dentro do popover.
   */
  children: React.ReactNode;
  /**
   * O rótulo do botão que aciona o popover.
   */
  buttonLabel?: string;
  /**
   * Este é o ponto na âncora ao qual o `transformOrigin` do popover se anexará.
   */
  anchorOrigin?: PopoverOrigin;
  /**
   * Este é o ponto no popover que se anexará ao `anchorOrigin` da âncora.
   */
  transformOrigin?: PopoverOrigin;
  /**
   * Se `true`, o preenchimento interno do popover será removido.
   * @default false
   */
  disablePadding?: boolean;
};

const PopoverComponent = ({
  children,
  buttonLabel = 'Open Popover',
  anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left',
  },
  transformOrigin = {
    vertical: 'top',
    horizontal: 'left',
  },
  disablePadding = false,
}: PopoverProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        {buttonLabel}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        <Box sx={{ p: disablePadding ? 0 : 2, maxWidth: 300 }}>
          {children}
        </Box>
      </Popover>
    </div>
  );
};

export default PopoverComponent;