import Button from "./Button";
// É melhor inferir as props diretamente do componente para garantir a consistência.
var meta = {
    title: 'Input/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        children: {
            type: "string"
        },
        variant: {
            options: ['contained', 'outlined', 'text'],
            control: {
                type: 'radio'
            }
        },
        color: {
            options: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
            control: {
                type: 'select'
            }
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio'
            }
        },
        disabled: {
            type: "boolean"
        },
        className: {
            type: "string"
        },
        borderRadius: {
            options: ['none', 'sm', 'md', 'lg', 'full'],
            control: {
                type: 'select'
            },
            description: 'Define o raio da borda do botão.'
        },
        onClick: { action: 'clicked' },
    },
    args: {
        children: 'Button',
        variant: 'contained',
        color: 'primary',
        size: 'medium',
        borderRadius: 'sm',
        disabled: false,
    },
};
export default meta;
export var Contained = {
    args: {}
};
export var Outlined = {
    args: {
        variant: 'outlined',
    }
};
export var Text = {
    args: {
        variant: 'text',
    }
};
export var Success = {
    args: {
        color: 'success'
    }
};
export var Warning = {
    args: {
        color: 'warning',
    }
};
export var Error = {
    args: {
        color: 'error',
    }
};
export var Disabled = {
    args: {
        disabled: true,
    }
};
export var Large = {
    args: {
        size: 'large',
    }
};
export var Small = {
    args: {
        size: 'small',
    }
};
export var Pill = {
    name: 'Com Borda Arredondada (Pill)',
    args: {
        borderRadius: 'full',
        children: 'Pill Button'
    }
};
