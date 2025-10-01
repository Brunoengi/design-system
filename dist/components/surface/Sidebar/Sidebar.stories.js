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
import React from 'react';
import Sidebar from './Sidebar';
import { Typography, List, ListItemButton, ListItemIcon, ListItemText, Avatar, Box, Collapse, } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import { Home, Analytics, Settings, BarChart, TableChart, Article, Lock, } from '@mui/icons-material';
var meta = {
    title: 'Surface/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: false, // Desabilitar controle para children, pois será definido nas estórias
            description: 'Subcomponentes do Sidebar: Header, Content, Footer.',
        },
        sx: {
            control: 'object',
            description: 'Estilos customizados usando a prop sx do MUI.',
        },
        contentPaddingRight: {
            control: { type: 'range', min: 0, max: 8, step: 1 },
            description: 'Define o espaçamento interno à direita (padding-right) para Header, Content e Footer.',
            table: {
                defaultValue: { summary: '2' },
                category: 'Spacing',
            },
        },
    },
};
export default meta;
// --- Data for Stories ---
var simpleMenuData = [
    { id: 'Início', text: 'Início', icon: _jsx(Home, {}) },
    { id: 'Dashboard', text: 'Dashboard', icon: _jsx(Analytics, {}) },
    { id: 'Relatórios', text: 'Relatórios', icon: _jsx(BarChart, {}) },
];
var defaultMenuData = [
    { id: 'Página Inicial', text: 'Página Inicial', icon: _jsx(Home, {}) },
    { id: 'Análises', text: 'Análises', icon: _jsx(Analytics, {}) },
    {
        id: 'Configurações',
        text: 'Configurações',
        icon: _jsx(Settings, {}),
        subItems: [
            { id: 'Perfil', text: 'Perfil' },
            { id: 'Segurança', text: 'Segurança' },
        ],
    },
];
var themedMenuData = [
    {
        title: 'Navigation',
        items: [{ id: 'Dashboard', text: 'Dashboard', icon: _jsx(Home, {}) }],
    },
    {
        title: 'UI Element',
        items: [
            {
                id: 'Components',
                text: 'Components',
                icon: _jsx(HubOutlinedIcon, {}),
                subItems: [
                    { id: 'Button', text: 'Button' },
                    { id: 'Typography', text: 'Typography' },
                ],
            },
        ],
    },
    {
        title: 'Forms & Table',
        items: [
            {
                id: 'Form elements',
                text: 'Form elements',
                icon: _jsx(Article, {}),
                subItems: [
                    { id: 'Input', text: 'Input' },
                    { id: 'Select', text: 'Select' },
                ],
            },
            { id: 'Table', text: 'Table', icon: _jsx(TableChart, {}) },
        ],
    },
    {
        title: 'Pages',
        items: [
            {
                id: 'Authentication',
                text: 'Authentication',
                icon: _jsx(Lock, {}),
                subItems: [
                    { id: 'Login Page', text: 'Login' },
                    { id: 'Register Page', text: 'Register' },
                ],
            },
            { id: 'Sample page', text: 'Sample page', icon: _jsx(Article, {}) },
            {
                id: 'Disabled menu',
                text: 'Disabled menu',
                icon: _jsx(Article, {}),
                disabled: true,
            },
        ],
    },
];
// --- Styles for Stories ---
var lightThemeStyles = {
    active: {
        bgcolor: 'action.selected',
        color: 'primary.main',
        '& .MuiListItemIcon-root': { color: 'primary.main' },
    },
    inactive: {
        color: 'text.primary',
        '&:hover': { bgcolor: 'action.hover' },
        '& .MuiListItemIcon-root': { color: 'action.active' },
    },
};
var darkThemeStyles = {
    active: {
        bgcolor: '#364B73',
        color: 'common.white',
        '&:hover': { bgcolor: '#405680' },
        '& .MuiListItemIcon-root': { color: 'common.white' },
    },
    inactive: {
        color: 'grey.400',
        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)' },
        '& .MuiListItemIcon-root': { color: 'common.white' },
    },
};
export var Floating = {
    name: 'Flutuante',
    render: function Render(args) {
        var _a = React.useState('Início'), activeItem = _a[0], setActiveItem = _a[1];
        return (_jsxs(Box, { sx: {
                display: 'flex',
                width: '100%',
                height: '100vh',
                bgcolor: 'grey.200',
                p: 2,
                boxSizing: 'border-box',
                gap: 2,
            }, children: [_jsxs(Sidebar, __assign({}, args, { children: [_jsx(Sidebar.Header, { children: _jsx(Typography, { variant: "h6", children: "App Flutuante" }) }), _jsx(Sidebar.Content, { children: _jsx(List, { component: "nav", dense: true, children: simpleMenuData.map(function (item) { return (_jsxs(ListItemButton, { onClick: function () { return setActiveItem(item.id); }, sx: __assign({ borderRadius: 1, mb: 0.5 }, (activeItem === item.id
                                        ? lightThemeStyles.active
                                        : lightThemeStyles.inactive)), children: [_jsx(ListItemIcon, { sx: { minWidth: 36 }, children: item.icon }), _jsx(ListItemText, { primary: item.text })] }, item.id)); }) }) }), _jsx(Sidebar.Footer, { children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2 }, children: [_jsx(Avatar, {}), _jsx(Box, { children: _jsx(Typography, { variant: "subtitle2", children: "Usu\u00E1rio" }) })] }) })] })), _jsxs(Box, { sx: {
                        flexGrow: 1,
                        p: 3,
                        bgcolor: '#ffffff',
                        borderRadius: 2,
                        height: '100%',
                        boxShadow: 3,
                    }, children: [_jsx(Typography, { variant: "h4", children: "Conte\u00FAdo Principal" }), _jsx(Typography, { sx: { mt: 2 }, children: "Esta \u00E9 a \u00E1rea de conte\u00FAdo principal ao lado do Sidebar flutuante." })] })] }));
    },
    args: {
        sx: {
            height: '100%',
            borderRadius: 2,
            boxShadow: 3,
            borderRight: 'none', // Remove a borda para um visual mais limpo
        },
    },
    parameters: {
        docs: {
            description: {
                story: 'Um exemplo do Sidebar com margens, bordas arredondadas e sombra, criando um efeito "flutuante". O layout é construído com os componentes Panel e FlexItem.',
            },
        },
    },
};
export var ThemedWithAccordionMenu = {
    name: 'Layout Temático com Menu Acordeão',
    render: function Render(args) {
        var _a = React.useState('Dashboard'), activeItem = _a[0], setActiveItem = _a[1];
        var _b = React.useState(null), open = _b[0], setOpen = _b[1];
        var handleMenuClick = function (menuId) {
            setOpen(function (prevOpen) { return (prevOpen === menuId ? null : menuId); });
        };
        // A função render é necessária para o estado (activeItem).
        return (_jsxs(Box, { sx: { display: 'flex', height: '100vh' }, children: [_jsxs(Sidebar, __assign({}, args, { children: [_jsxs(Sidebar.Header, { sx: {
                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                            }, children: [_jsx(Avatar, { sx: { bgcolor: '#1ABC9C', width: 32, height: 32 }, children: _jsx(AdbIcon, { sx: { fontSize: '1.2rem' } }) }), _jsx(Typography, { variant: "h6", sx: { ml: 1.5, color: 'common.white', fontWeight: 'bold' }, children: "Datta Able" }), _jsx(MenuIcon, { sx: { ml: 'auto', color: 'grey.500' } })] }), _jsx(Sidebar.Content, { sx: { py: 1.5, pl: 1.5 }, children: themedMenuData.map(function (section) { return (_jsxs(List, { component: "nav", dense: true, children: [_jsx(Typography, { variant: "caption", sx: {
                                            textTransform: 'uppercase',
                                            fontWeight: 'bold',
                                            px: 2,
                                            py: 1,
                                            color: 'grey.500',
                                            fontSize: '0.65rem',
                                        }, children: section.title }), section.items.map(function (item) {
                                        var _a;
                                        var isMenuOpen = open === item.id;
                                        return (_jsxs(React.Fragment, { children: [_jsxs(ListItemButton, { disabled: item.disabled, onClick: function () {
                                                        if (item.subItems) {
                                                            handleMenuClick(item.id);
                                                        }
                                                        else {
                                                            setActiveItem(item.id);
                                                            setOpen(null);
                                                        }
                                                    }, sx: __assign(__assign({ borderRadius: 1, mb: 0.5 }, (activeItem === item.id
                                                        ? darkThemeStyles.active
                                                        : darkThemeStyles.inactive)), { '&.Mui-disabled': {
                                                            color: '#6C7A92',
                                                            '& .MuiListItemIcon-root': { color: '#6C7A92' },
                                                        } }), children: [_jsx(ListItemIcon, { sx: { minWidth: 36 }, children: item.icon }), _jsx(ListItemText, { primary: item.text }), item.subItems && (_jsx(ChevronRightIcon, { sx: {
                                                                fontSize: '1rem',
                                                                transform: isMenuOpen ? 'rotate(90deg)' : 'none',
                                                                transition: 'transform 0.2s',
                                                            } }))] }), _jsx(Collapse, { in: isMenuOpen, timeout: "auto", unmountOnExit: true, children: _jsx(List, { component: "div", disablePadding: true, children: (_a = item.subItems) === null || _a === void 0 ? void 0 : _a.map(function (subItem) { return (_jsx(ListItemButton, { onClick: function () { return setActiveItem(subItem.id); }, sx: __assign({ pl: 4.5, borderRadius: 1, mb: 0.5 }, (activeItem === subItem.id
                                                                ? darkThemeStyles.active
                                                                : darkThemeStyles.inactive)), children: _jsx(ListItemText, { primary: subItem.text, primaryTypographyProps: { variant: 'body2' } }) }, subItem.id)); }) }) })] }, item.id));
                                    })] }, section.title)); }) })] })), _jsxs(Box, { sx: {
                        flexGrow: 1,
                        p: 3,
                        bgcolor: 'grey.100',
                    }, children: [_jsx(Typography, { variant: "h4", children: "Conte\u00FAdo Principal da P\u00E1gina" }), _jsx(Typography, { sx: { mt: 2 }, children: "O conte\u00FAdo da sua p\u00E1gina ficaria aqui, ao lado do Sidebar." })] })] }));
    },
    args: {
        sx: {
            bgcolor: '#2C3E5D',
            borderColor: 'transparent',
        },
    },
};
export var ThemedFloating = {
    name: 'Layout Temático Flutuante',
    render: function Render(args) {
        var _a = React.useState('Dashboard'), activeItem = _a[0], setActiveItem = _a[1];
        var _b = React.useState(null), open = _b[0], setOpen = _b[1];
        var handleMenuClick = function (menuId) {
            setOpen(function (prevOpen) { return (prevOpen === menuId ? null : menuId); });
        };
        return (_jsxs(Box, { sx: {
                display: 'flex',
                width: '100%',
                height: '100vh',
                bgcolor: 'grey.200',
                p: 2,
                boxSizing: 'border-box',
                gap: 2,
            }, children: [_jsxs(Sidebar, __assign({}, args, { children: [_jsxs(Sidebar.Header, { sx: {
                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                            }, children: [_jsx(Avatar, { sx: { bgcolor: '#1ABC9C', width: 32, height: 32 }, children: _jsx(AdbIcon, { sx: { fontSize: '1.2rem' } }) }), _jsx(Typography, { variant: "h6", sx: { ml: 1.5, color: 'common.white', fontWeight: 'bold' }, children: "Datta Able" }), _jsx(MenuIcon, { sx: { ml: 'auto', color: 'grey.500' } })] }), _jsx(Sidebar.Content, { sx: { py: 1.5, pl: 1.5 }, children: themedMenuData.map(function (section) { return (_jsxs(List, { component: "nav", dense: true, children: [_jsx(Typography, { variant: "caption", sx: {
                                            textTransform: 'uppercase',
                                            fontWeight: 'bold',
                                            px: 2,
                                            py: 1,
                                            color: 'grey.500',
                                            fontSize: '0.65rem',
                                        }, children: section.title }), section.items.map(function (item) {
                                        var _a;
                                        var isMenuOpen = open === item.id;
                                        return (_jsxs(React.Fragment, { children: [_jsxs(ListItemButton, { disabled: item.disabled, onClick: function () {
                                                        if (item.subItems) {
                                                            handleMenuClick(item.id);
                                                        }
                                                        else {
                                                            setActiveItem(item.id);
                                                            setOpen(null);
                                                        }
                                                    }, sx: __assign(__assign({ borderRadius: 1, mb: 0.5 }, (activeItem === item.id
                                                        ? darkThemeStyles.active
                                                        : darkThemeStyles.inactive)), { '&.Mui-disabled': {
                                                            color: '#6C7A92',
                                                            '& .MuiListItemIcon-root': { color: '#6C7A92' },
                                                        } }), children: [_jsx(ListItemIcon, { sx: { minWidth: 36 }, children: item.icon }), _jsx(ListItemText, { primary: item.text }), item.subItems && (_jsx(ChevronRightIcon, { sx: {
                                                                fontSize: '1rem',
                                                                transform: isMenuOpen ? 'rotate(90deg)' : 'none',
                                                                transition: 'transform 0.2s',
                                                            } }))] }), _jsx(Collapse, { in: isMenuOpen, timeout: "auto", unmountOnExit: true, children: _jsx(List, { component: "div", disablePadding: true, children: (_a = item.subItems) === null || _a === void 0 ? void 0 : _a.map(function (subItem) { return (_jsx(ListItemButton, { onClick: function () { return setActiveItem(subItem.id); }, sx: __assign({ pl: 4.5, borderRadius: 1, mb: 0.5 }, (activeItem === subItem.id
                                                                ? darkThemeStyles.active
                                                                : darkThemeStyles.inactive)), children: _jsx(ListItemText, { primary: subItem.text, primaryTypographyProps: { variant: 'body2' } }) }, subItem.id)); }) }) })] }, item.id));
                                    })] }, section.title)); }) })] })), _jsxs(Box, { sx: {
                        flexGrow: 1,
                        p: 3,
                        bgcolor: '#ffffff',
                        borderRadius: 2,
                        height: '100%',
                        boxShadow: 3,
                    }, children: [_jsx(Typography, { variant: "h4", children: "Conte\u00FAdo Principal" }), _jsx(Typography, { sx: { mt: 2 }, children: "Esta \u00E9 a \u00E1rea de conte\u00FAdo principal ao lado do Sidebar tem\u00E1tico e flutuante." })] })] }));
    },
    args: {
        sx: {
            bgcolor: '#2C3E5D',
            borderColor: 'transparent',
            height: '100%',
            borderRadius: 2,
            boxShadow: 3,
            borderRight: 'none',
        },
    },
    parameters: {
        docs: {
            description: {
                story: 'Combina o estilo visual do "Layout Temático" com o posicionamento "Flutuante". O Sidebar mantém seu tema escuro, mas agora possui bordas arredondadas, sombra e margens em relação à tela.',
            },
        },
    },
};
export var Default = {
    name: 'Padrão',
    // Recriando a estória Padrão a partir da estrutura funcional da estória temática
    // para garantir que o contentPaddingRight funcione corretamente.
    render: function Render(args) {
        var _a = React.useState('Página Inicial'), activeItem = _a[0], setActiveItem = _a[1];
        var _b = React.useState(null), open = _b[0], setOpen = _b[1];
        var handleMenuClick = function (menuId) {
            setOpen(function (prevOpen) { return (prevOpen === menuId ? null : menuId); });
        };
        return (_jsxs(Box, { sx: { display: 'flex', height: '100vh' }, children: [_jsxs(Sidebar, __assign({}, args, { children: [_jsx(Sidebar.Header, { children: _jsx(Typography, { variant: "h6", children: "Meu App" }) }), _jsx(Sidebar.Content, { children: _jsx(List, { component: "nav", dense: true, children: defaultMenuData.map(function (item) {
                                    var _a;
                                    return (_jsxs(React.Fragment, { children: [_jsxs(ListItemButton, { onClick: function () {
                                                    if (item.subItems) {
                                                        handleMenuClick(item.id);
                                                    }
                                                    else {
                                                        setActiveItem(item.id);
                                                        setOpen(null);
                                                    }
                                                }, sx: __assign({ borderRadius: 1, mb: 0.5 }, (activeItem === item.id
                                                    ? lightThemeStyles.active
                                                    : lightThemeStyles.inactive)), children: [_jsx(ListItemIcon, { sx: { minWidth: 36 }, children: item.icon }), _jsx(ListItemText, { primary: item.text }), item.subItems && (_jsx(ChevronRightIcon, { sx: {
                                                            fontSize: '1rem',
                                                            transform: open === item.id ? 'rotate(90deg)' : 'none',
                                                            transition: 'transform 0.2s',
                                                        } }))] }), _jsx(Collapse, { in: open === item.id, timeout: "auto", unmountOnExit: true, children: _jsx(List, { component: "div", disablePadding: true, children: (_a = item.subItems) === null || _a === void 0 ? void 0 : _a.map(function (subItem) { return (_jsx(ListItemButton, { onClick: function () { return setActiveItem(subItem.id); }, sx: __assign({ pl: 4.5, borderRadius: 1, mb: 0.5 }, (activeItem === subItem.id
                                                            ? lightThemeStyles.active
                                                            : lightThemeStyles.inactive)), children: _jsx(ListItemText, { primary: subItem.text, primaryTypographyProps: { variant: 'body2' } }) }, subItem.id)); }) }) })] }, item.id));
                                }) }) }), _jsx(Sidebar.Footer, { children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2 }, children: [_jsx(Avatar, {}), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle2", children: "Usu\u00E1rio" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "user@email.com" })] })] }) })] })), _jsxs(Box, { sx: {
                        flexGrow: 1,
                        p: 3,
                        bgcolor: 'grey.100',
                    }, children: [_jsx(Typography, { variant: "h4", children: "Conte\u00FAdo Principal da P\u00E1gina" }), _jsx(Typography, { sx: { mt: 2 }, children: "O conte\u00FAdo da sua p\u00E1gina ficaria aqui, ao lado do Sidebar." })] })] }));
    },
};
