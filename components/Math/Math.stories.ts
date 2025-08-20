import { Meta, StoryObj } from "@storybook/react";
import Math, { MathProps } from "./Math";

const meta: Meta<MathProps> = {
  title: "Design System/Atoms/Math Text",
  component: Math, 
};

export default meta;

export const Primary: StoryObj<MathProps> = {
  args: {
    MathExpression: "frac(10)(4x) approx 2^(12)"
  }
};

export const BasicOperators: StoryObj<MathProps> = {
  args: {
    MathExpression: "1 + 1 + 1 + 1 = 6 - 2 = 8/2 = 2 xx 2"
  }
};

export const RelationsSymbols: StoryObj<MathProps> = {
  args: {
    MathExpression: "= !=  <  >  <=  >=  in  !in  -=  ~~  prop"
  }
};

export const Arrows: StoryObj<MathProps> = {
  args: {
    MathExpression: "uarr darr rarr -> >-> ->> >->> |-> larr harr rArr lArr hArr"
  }
};

export const GreekLetters: StoryObj<MathProps> = {
  args: {
    MathExpression: "alpha, beta, gamma, Gamma, delta, Delta, epsilon, zeta, eta, theta, Theta, vartheta, iota, kappa, lambda, Lambda, mu, nu, xi, Xi, pi, Pi, rho, sigma, Sigma, tau, upsilon, phi, Phi, varphi, chi, psi, Psi, omega, Omega "
  }
};

export const Indices: StoryObj<MathProps> = {
  args: {
    MathExpression: "x^2, e^(2x), x^alpha, x_10, omega_(cd)"
  }
};

export const Functions: StoryObj<MathProps> = {
  args: {
    MathExpression: "sin(x), cos(x), tan(x), sec(x), csc(x), cot(x), arcsin(x), arccos(x), arctan(x), sinh(x), cosh(x), tanh(x), sech(x), csch(x), coth(x), log(x), ln(x), f(x), g(x)"
  }
};
