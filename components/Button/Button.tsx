import React from "react";
import MuiButton, { type ButtonProps } from '@mui/material/Button';

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <MuiButton {...props}>
      {props.children || 'Text'}
    </MuiButton>
  )
}

export default Button