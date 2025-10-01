var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from '@mui/material';
import { AccountCircle, Lock, AttachMoney } from '@mui/icons-material';
import InputGroup from './InputGroup';
import Input from '../Input/Input';
var meta = {
    title: 'Input/InputGroup',
    component: InputGroup,
    parameters: {
        layout: 'centered',
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
            description: 'O tamanho dos inputs no grupo.',
        },
        borderRadius: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'full'],
            description: 'Define o raio da borda do grupo.',
        },
        direction: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
            description: 'A direção na qual os inputs serão agrupados.',
        },
        disabled: {
            control: 'boolean',
            description: 'Se `true`, todo o grupo de inputs será desabilitado.',
        },
        error: {
            control: 'boolean',
            description: 'Se `true`, o grupo de inputs indicará um estado de erro.',
        },
        children: {
            control: false,
            description: 'O conteúdo do componente. Espera-se que sejam `Input`s.',
        },
    },
    args: {
        size: 'medium',
        borderRadius: 'md',
        direction: 'horizontal',
        disabled: false,
        error: false,
    },
};
export default meta;
export var Sizes = {
    name: 'Tamanhos',
    render: function () { return (_jsxs(Box, { display: "flex", flexDirection: "column", gap: 4, width: 400, children: [_jsxs(InputGroup, { size: "small", children: [_jsx(Input, { label: "Nome (Pequeno)" }), _jsx(Input, { label: "Sobrenome (Pequeno)" })] }), _jsxs(InputGroup, { size: "medium", children: [_jsx(Input, { label: "Nome (M\u00E9dio)" }), _jsx(Input, { label: "Sobrenome (M\u00E9dio)" })] }), _jsxs(InputGroup, { size: "large", children: [_jsx(Input, { label: "Nome (Grande)" }), _jsx(Input, { label: "Sobrenome (Grande)" })] })] })); },
    argTypes: {
        size: {
            table: { disable: true },
        },
    },
};
export var BorderRadius = {
    name: 'Raio da Borda',
    render: function () { return (_jsxs(Box, { display: "flex", flexDirection: "column", gap: 4, width: 400, children: [_jsxs(InputGroup, { borderRadius: "none", children: [_jsx(Input, { label: "Borda (none)" }), _jsx(Input, { label: "Sobrenome" })] }), _jsxs(InputGroup, { borderRadius: "sm", children: [_jsx(Input, { label: "Borda (sm)" }), _jsx(Input, { label: "Sobrenome" })] }), _jsxs(InputGroup, { borderRadius: "md", children: [_jsx(Input, { label: "Borda (md)" }), _jsx(Input, { label: "Sobrenome" })] }), _jsxs(InputGroup, { borderRadius: "lg", children: [_jsx(Input, { label: "Borda (lg)" }), _jsx(Input, { label: "Sobrenome" })] }), _jsxs(InputGroup, { borderRadius: "full", children: [_jsx(Input, { label: "Borda (full)" }), _jsx(Input, { label: "Sobrenome" })] })] })); },
    argTypes: { borderRadius: { table: { disable: true } } },
};
export var Horizontal = {
    name: 'Horizontal',
    render: function (args) { return (_jsx(Box, { width: 400, children: _jsxs(InputGroup, __assign({}, args, { children: [_jsx(Input, { label: "Nome" }), _jsx(Input, { label: "Sobrenome" })] })) })); },
};
export var VerticalWithDisabledInput = {
    name: 'Vertical com Input Desabilitado',
    args: {
        direction: 'vertical',
    },
    render: function (args) { return (_jsx(Box, { width: 300, children: _jsxs(InputGroup, __assign({}, args, { children: [_jsx(Input, { label: "Peso", type: "number", endAdornment: "kg" }), _jsx(Input, { label: "Dist\u00E2ncia (desabilitado)", type: "number", endAdornment: "m", disabled: true }), _jsx(Input, { label: "Tempo", type: "number", endAdornment: "s" })] })) })); },
};
export var HorizontalWithDisabledInput = {
    name: 'Horizontal com Input Desabilitado',
    render: function (args) { return (_jsx(Box, { width: 500, children: _jsxs(InputGroup, __assign({}, args, { children: [_jsx(Input, { label: "Altura", type: "number", endAdornment: "cm" }), _jsx(Input, { label: "Largura (desabilitado)", type: "number", endAdornment: "cm", disabled: true }), _jsx(Input, { label: "Profundidade", type: "number", endAdornment: "cm" })] })) })); },
};
export var Vertical = {
    name: 'Vertical',
    args: {
        direction: 'vertical',
    },
    render: function (args) { return (_jsx(Box, { width: 300, children: _jsxs(InputGroup, __assign({}, args, { children: [_jsx(Input, { label: "Endere\u00E7o" }), _jsx(Input, { label: "Cidade" }), _jsx(Input, { label: "CEP", type: "number" })] })) })); },
};
export var WithAdornments = {
    name: 'Com Adornos',
    render: function (args) { return (_jsx(Box, { width: 500, children: _jsxs(InputGroup, __assign({}, args, { children: [_jsx(Input, { label: "Usu\u00E1rio", startAdornment: _jsx(AccountCircle, {}), defaultValue: "bruno.santos" }), _jsx(Input, { label: "Senha", type: "password", startAdornment: _jsx(Lock, {}), defaultValue: "123456" }), _jsx(Input, { label: "Sal\u00E1rio", type: "number", startAdornment: _jsx(AttachMoney, {}) })] })) })); },
};
export var WithError = {
    name: 'Com Erro',
    args: {
        error: true,
    },
    render: function (args) { return (_jsx(Box, { width: 400, children: _jsxs(InputGroup, __assign({}, args, { children: [_jsx(Input, { label: "Email", defaultValue: "email-invalido" }), _jsx(Input, { label: "Confirme o Email" })] })) })); },
};
export var Disabled = {
    name: 'Desabilitado',
    args: {
        disabled: true,
    },
    render: function (args) { return (_jsx(Box, { width: 400, children: _jsxs(InputGroup, __assign({}, args, { children: [_jsx(Input, { label: "Campo 1", defaultValue: "Valor 1" }), _jsx(Input, { label: "Campo 2", defaultValue: "Valor 2" })] })) })); },
};
export var VerticalWithSuffixes = {
    name: 'Vertical com Sufixos',
    args: {
        direction: 'vertical',
    },
    render: function (args) { return (_jsx(Box, { width: 300, children: _jsxs(InputGroup, __assign({}, args, { children: [_jsx(Input, { label: "Peso", type: "number", endAdornment: "kg" }), _jsx(Input, { label: "Dist\u00E2ncia", type: "number", endAdornment: "m" }), _jsx(Input, { label: "Tempo", type: "number", endAdornment: "s" })] })) })); },
};
export var HorizontalWithSuffixes = {
    name: 'Horizontal com Sufixos',
    render: function (args) { return (_jsx(Box, { width: 500, children: _jsxs(InputGroup, __assign({}, args, { children: [_jsx(Input, { label: "Altura", type: "number", endAdornment: "cm" }), _jsx(Input, { label: "Largura", type: "number", endAdornment: "cm" }), _jsx(Input, { label: "Profundidade", type: "number", endAdornment: "cm" })] })) })); },
};
