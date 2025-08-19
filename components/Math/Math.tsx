import React from 'react';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import { MathJaxContextProps } from 'better-react-mathjax';
import { MathJax3Config } from 'better-react-mathjax';



export type MathProps = {
  MathExpression: string 
  
} & MathJaxContextProps;

const Math = ({ MathExpression, ...contextProps }: MathProps) => {
  const config: MathJax3Config = {
    loader: { load: ['input/asciimath', 'output/svg'] },
};
  
  return (
    <MathJaxContext config={config}>
        <MathJax>{`${MathExpression}`}</MathJax>
    </MathJaxContext>
)
}

export default Math;