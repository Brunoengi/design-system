import React from "react";
import { Face as FaceIcon } from '@mui/icons-material';
import Avatar from "./Avatar";
var meta = {
    title: "Data Display/Avatar",
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg'],
            control: { type: "select" },
        },
        variant: {
            options: ['circular', 'rounded', 'square'],
            control: { type: 'radio' },
        },
        image: {
            control: 'text',
            description: 'URL da imagem a ser exibida.'
        },
        description: {
            control: 'text',
            description: 'Texto alternativo e fonte para as iniciais.'
        },
        children: {
            control: false,
            description: 'Usado para passar ícones ou outros elementos.'
        },
    },
    args: {
        size: 'md',
        variant: 'circular',
        description: 'User Avatar'
    },
};
export default meta;
export var WithInitials = {
    name: 'Fallback: Initials',
    args: {
        description: "John Doe",
        image: undefined, // Garante que a imagem não seja usada para mostrar as iniciais
    },
};
export var WithImage = {
    name: 'Content: Image',
    args: {
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        description: "Jane Doe",
    },
};
export var WithIcon = {
    name: 'Content: Icon',
    args: {
        children: React.createElement(FaceIcon),
        description: "Icon Avatar",
        image: undefined, // Garante que a imagem não seja usada
    },
};
export var SquareVariant = {
    name: 'Variant: Square',
    args: {
        variant: 'square',
        description: 'Square Avatar',
        image: undefined,
    }
};
export var RoundedVariant = {
    name: 'Variant: Rounded',
    args: {
        variant: 'rounded',
        description: 'Rounded Avatar',
        image: undefined,
    }
};
export var SizeExtraSmall = {
    name: 'Size: Extra Small',
    args: {
        size: "xs",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
};
export var SizeSmall = {
    name: 'Size: Small',
    args: {
        size: "sm",
        description: "Small Avatar",
        image: undefined,
    },
};
export var SizeLarge = {
    name: 'Size: Large',
    args: {
        size: "lg",
        children: React.createElement(FaceIcon, { fontSize: "large" }),
        image: undefined,
    },
};
