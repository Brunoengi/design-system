<h1>SOSEC - Design System</h1> 

[![TypeScript Version](https://img.shields.io/badge/TypeScript-^5-blue.svg)](https://shields.io/)
[![ReactJS Version](https://img.shields.io/badge/ReactJS-^18-black.svg)](https://shields.io/)
[![Tailwind Version](https://img.shields.io/badge/TailwindCSS-^3.4.1-red.svg)](https://shields.io/)
[![Storybook Version](https://img.shields.io/badge/Storybook-^8.1.3-yellow.svg)](https://shields.io/)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Brunoengi/design-system/LICENSE)

<h2>Summary</h2>

<ol>
  <li ><a href='#project'>What is the project</a></li>
  <li ><a href='#component-list'>Component List</a></li>
  <li ><a href='#intallation'>Installation Instructions</a></li>
  <li ><a href='#use'>Use Instructions</a></li>
</ol>

<h3 id="project">1 - What is the project</h3>

This repository is a design system for web and desktop applications designed for applications related to exact sciences. Here, there will be components that support scientific notation and the AsciiMath standard, which is an easy-to-write markup language for mathematics. The repository is based on the atomic design methodology, until then divided into atoms, molecules and organisms.

<h3 id="component-list">2 - Component List</h3>

| Atoms       | Molecules   | Organisms   | 
| :---:       | :---:       | :---:       |
| Avatar      | Disclosure  | Input Group |
| Box         | Modal       |
| Button      | Select      |
| Divider     | Table
| Input       | Popover
| Math Text   |
| Typography  |  
| Chart       | 
| SplitScreen | 

<h3 id="intallation">3 - Installation Instructions</h3>

<b>Step 1: Download de Project: </b> You can download the project with the npm dependency manager or through github <link>link here</link>. You can use create-next-app to have an initial configuration.
```
npm i sosec-ds
```

Through npm, you will have the production version, which contains only the components with their types, web fonts and global style folders. On github, you will also have project documentation with Storybook. <a href="https://storybook.js.org/">To learn more about Storybook, click here</a>.

<b>Step 2: Import global styles: </b> The repository has a folder with your global styles, you must import it into your css layout file. If you are using the src folder and TypeScript, the path is usually src/app/layout.tsx.
```
import "sosec-ds/styles/globals.css"
```

<b>Step 3: Configure the tailwind.config file: </b> Based on tailwind documentation: <i>By default, any configuration you add in your own tailwind.config.js file is intelligently merged with the default configuration, with your own configuration acting as a set of overrides and extensions. The presets option lets you specify a different configuration to use as your base, making it easy to package up a set of customizations that you’d like to reuse across projects.</i>

```
import type { Config } from "tailwindcss";

const config: Config = {
  presets: [
    require('sosec-ds/tailwind.config')
  ],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/sosec-ds/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  },
  plugins: [],
};
export default config;

```

Above, an initial file is presented with the settings that must be added, note that it is necessary to insert a configuration in the presets and another configuration in the content.

```
presets: [
    require('sosec-ds/tailwind.config')
  ]
```

```
content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/sosec-ds/components/**/*.{js,ts,jsx,tsx,mdx}" /* Here is the part that should be added */
  ]
```

<b>Step 4: Transpile the package: </b> In your next.config file, add the 'sosec-ds' package to be transpiled.

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['sosec-ds']
};

export default nextConfig;

```

If you prefer, these steps are presented in a video on YouTube, to access, <a href="https://youtu.be/b07L5Jt13z4">click here.</a>

<h3 id="use">4 - Use Instructions</h3>

<b>Import a Component Library:</b> This library contains REACT components, all components and types are in same path. You can import using:

```
'use client';
import { Button, ButtonProps } from "sosec-ds"
import { Avatar, AvatarProps } from "sosec-ds"
import { Box, BoxProps } from "sosec-ds"
import { Disclosure, DisclosureProps } from "sosec-ds"
import { Divider, DividerProps } from "sosec-ds"
import { Input, InputProps } from "sosec-ds"
import { InputGroup, InputGroupProps } from "sosec-ds"
import { Math, MathProps } from "sosec-ds"
import { Modal, ModalProps } from "sosec-ds" 
import { Select, SelectProps } from "sosec-ds"
import { Typography, TypographyProps } from "sosec-ds" 

```

