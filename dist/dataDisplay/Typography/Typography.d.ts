import React from "react";
import { TypographyProps as MuiTypographyProps } from "@mui/material";
export type TypographyProps = MuiTypographyProps;
declare const Typography: React.ForwardRefExoticComponent<Omit<TypographyProps, "ref"> & React.RefAttributes<HTMLElement>>;
export default Typography;
