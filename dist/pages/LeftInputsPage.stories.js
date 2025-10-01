import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Box, Typography, Avatar, } from '@mui/material';
import Sidebar from '@/components/surface/Sidebar/Sidebar';
import Select from '@/components/input/Select/Select';
import { InputGroup } from '@/components';
import Button from '@/components/input/Button/Button';
import Title from '@/components/dataDisplay/Title/Title';
import Input from '@/components/input/Input/Input';
var meta = {
    title: 'Pages/Página com Inputs',
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [function (Story) { return _jsx(Story, {}); }],
};
export default meta;
export var Default = {
    name: 'Página com Sidebar e Conteúdo',
    render: function () {
        var _a = React.useState('500'), selectedValue = _a[0], setSelectedValue = _a[1];
        var selectOptions = [
            {
                label: '500 (CA-50)',
                value: '500'
            },
            {
                label: '600 (CA-60)',
                value: '600'
            },
            {
                label: 'Opção Desabilitada',
                value: 'disabled'
            },
        ];
        // Estilos reutilizáveis para componentes de input em fundo escuro
        var darkInputGroupSx = {
            width: '100%',
            // Cor da borda do grupo
            borderColor: 'rgba(255, 255, 255, 0.5)',
            '&:hover': {
                borderColor: 'common.white',
            },
            // Cor da borda e "glow" quando um input interno está focado
            '&:has(.Mui-focused)': {
                borderColor: 'common.white',
                boxShadow: '0 0 0 1px #fff',
            },
            // Cor do texto, labels e adornos de todos os inputs filhos
            // Alvejamos o texto do input e a tipografia DENTRO do adorno
            '& .MuiInputBase-input, & .MuiInputAdornment-root .MuiTypography-root': {
                color: 'common.white',
            },
            '& .MuiInputLabel-root': {
                color: 'rgba(255, 255, 255, 0.7)',
            },
            // Cor do label quando focado
            '& .MuiInputLabel-root.Mui-focused': {
                color: 'black',
            },
            // Estilos para o estado desabilitado
            '& .Mui-disabled': {
                color: 'rgba(255, 255, 255, 0.5) !important', // !important para garantir a sobreposição
                WebkitTextFillColor: 'rgba(255, 255, 255, 0.5)',
            },
        };
        return (_jsxs(Box, { sx: {
                p: 2,
                height: '100vh',
                bgcolor: 'grey.200',
                display: 'flex',
                gap: 2,
                boxSizing: 'border-box',
            }, children: [_jsxs(Sidebar, { sx: {
                        bgcolor: '#2C3E5D',
                        height: '100%',
                        minWidth: 250,
                        borderRadius: 2,
                        boxShadow: 3,
                        borderRight: 'none',
                    }, children: [_jsx(Sidebar.Header, { sx: {
                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }, children: _jsx(Typography, { variant: "h6", sx: { ml: 1.5, color: 'common.white', fontWeight: 'bold' }, children: "Dados de Entrada" }) }), _jsxs(Sidebar.Content, { sx: { p: 2, display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }, children: [_jsx(Select, { label: "Selecione uma op\u00E7\u00E3o", options: selectOptions, value: selectedValue, onChange: function (e) { return setSelectedValue(e.target.value); }, sx: {
                                        // Estiliza o label
                                        '& .MuiInputLabel-root': {
                                            color: 'rgba(255, 255, 255, 0.7)',
                                        },
                                        // Estiliza o label quando focado
                                        '& .MuiInputLabel-root.Mui-focused': {
                                            color: 'common.white',
                                        },
                                        // Estiliza o texto do valor selecionado
                                        '& .MuiSelect-select': {
                                            color: 'common.white',
                                        },
                                        // Estiliza o ícone do dropdown
                                        '& .MuiSelect-icon': {
                                            color: 'rgba(255, 255, 255, 0.7)',
                                        },
                                        // Estiliza a borda
                                        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'rgba(255, 255, 255, 0.5)',
                                        },
                                        // Estiliza a borda no hover
                                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'common.white',
                                        },
                                    } }), _jsx(Title, { sx: { color: '#ffffffaf' }, children: "Pesos" }), _jsxs(InputGroup, { size: 'small', borderRadius: "md", direction: "vertical", sx: darkInputGroupSx, children: [_jsx(Input, { endAdornment: "kN/m", label: "Peso Pr\u00F3prio (desabilitado)", disabled: true, type: "number" }), _jsx(Input, { endAdornment: "kN/m", label: "Dist\u00E2ncia (desabilitado)", type: "number" }), _jsx(Input, { endAdornment: "kN/m", label: "Tempo", type: "number" })] }), _jsx(Title, { sx: { color: '#ffffffaf' }, children: "Coeficientes de Pondera\u00E7\u00E3o" }), _jsxs(InputGroup, { borderRadius: "md", direction: "vertical", size: 'small', sx: darkInputGroupSx, children: [_jsx(Input, { label: "Peso Pr\u00F3prio (desabilitado)", disabled: true, type: "number" }), _jsx(Input, { label: "Dist\u00E2ncia (desabilitado)", type: "number" }), _jsx(Input, { label: "Tempo", type: "number" })] }), _jsx(Title, { sx: { color: '#ffffffaf' }, children: "Coeficientes de Majora\u00E7\u00E3o" }), _jsxs(InputGroup, { borderRadius: "md", direction: "vertical", size: 'small', sx: darkInputGroupSx, children: [_jsx(Input, { label: "Peso Pr\u00F3prio (desabilitado)", disabled: true, type: "number" }), _jsx(Input, { label: "Dist\u00E2ncia (desabilitado)", type: "number" }), _jsx(Input, { label: "Tempo", type: "number" })] }), _jsxs(Box, { sx: {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        gap: '10px'
                                    }, children: [_jsx(Button, { variant: 'contained', children: "Calcular" }), _jsx(Button, { variant: 'contained', children: "Salvar" })] })] }), _jsx(Sidebar.Footer, { children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2 }, children: [_jsx(Avatar, {}), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle2", sx: { color: 'common.white' }, children: "Usu\u00E1rio" }), _jsx(Typography, { variant: "body2", sx: { color: 'grey.500' }, children: "user@email.com" })] })] }) })] }), _jsxs(Box, { sx: {
                        bgcolor: '#fff',
                        borderRadius: 2,
                        boxShadow: 3,
                        flexGrow: 1,
                        p: 3,
                    }, children: [_jsx(Typography, { variant: "h4", children: "T\u00EDtulo da P\u00E1gina" }), _jsx(Typography, { sx: { mt: 2 }, paragraph: true, children: "Este \u00E9 um layout de p\u00E1gina padr\u00E3o com um Sidebar \u00E0 esquerda e uma \u00E1rea de conte\u00FAdo principal \u00E0 direita." })] })] }));
    },
};
