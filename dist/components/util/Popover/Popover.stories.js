import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Popover from './Popover';
import { Typography, Box, Avatar, MenuList, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
var meta = {
    title: 'Util/Popover',
    component: Popover,
    argTypes: {
        children: {
            control: 'text',
        },
        buttonLabel: {
            control: 'text',
        },
        anchorOrigin: {
            control: 'object',
        },
        transformOrigin: {
            control: 'object',
        },
        disablePadding: {
            control: 'boolean',
        },
    },
    tags: ["autodocs"],
    args: {
        buttonLabel: 'Open Popover',
        children: _jsx(Typography, { children: "The content of the Popover." }),
    },
};
export default meta;
export var Default = {
    args: {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
        },
    },
};
export var Placement = {
    name: 'Posicionamento Customizado',
    args: {
        children: (_jsx(Typography, { sx: { p: 1 }, children: "Use os controles para testar as diferentes posi\u00E7\u00F5es." })),
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
        },
        transformOrigin: {
            vertical: 'top',
            horizontal: 'center',
        },
    },
    argTypes: {
        children: { table: { disable: true } },
        'anchorOrigin.vertical': { options: ['top', 'center', 'bottom'], control: { type: 'select' } },
        'anchorOrigin.horizontal': { options: ['left', 'center', 'right'], control: { type: 'select' } },
        'transformOrigin.vertical': { options: ['top', 'center', 'bottom'], control: { type: 'select' } },
        'transformOrigin.horizontal': { options: ['left', 'center', 'right'], control: { type: 'select' } },
        anchorOrigin: { table: { disable: true } },
        transformOrigin: { table: { disable: true } },
    },
};
export var WithCustomContent = {
    name: 'Com Conteúdo Customizado',
    args: {
        buttonLabel: 'Ver Perfil',
        anchorOrigin: {
            vertical: 'center',
            horizontal: 'right',
        },
        transformOrigin: {
            vertical: 'center',
            horizontal: 'left',
        },
        children: (_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, minWidth: 220 }, children: [_jsx(Avatar, { children: _jsx(AccountCircleIcon, {}) }), _jsxs(Box, { children: [_jsx(Typography, { variant: "subtitle1", children: "John Doe" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "Engenheiro de Software" })] })] })),
    },
    argTypes: {
        children: { table: { disable: true } },
    },
};
export var AsAMenu = {
    name: 'Como um Menu Simples',
    args: {
        buttonLabel: 'Abrir Menu',
        children: (_jsxs(MenuList, { dense: true, children: [_jsxs(MenuItem, { onClick: function () { return alert('Perfil clicado!'); }, children: [_jsx(ListItemIcon, { children: _jsx(AccountCircleIcon, { fontSize: "small" }) }), _jsx(ListItemText, { children: "Perfil" })] }), _jsxs(MenuItem, { onClick: function () { return alert('Configurações clicado!'); }, children: [_jsx(ListItemIcon, { children: _jsx(SettingsIcon, { fontSize: "small" }) }), _jsx(ListItemText, { children: "Configura\u00E7\u00F5es" })] }), _jsxs(MenuItem, { onClick: function () { return alert('Sair clicado!'); }, children: [_jsx(ListItemIcon, { children: _jsx(LogoutIcon, { fontSize: "small" }) }), _jsx(ListItemText, { children: "Sair" })] })] })),
        disablePadding: true,
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
        transformOrigin: { vertical: 'top', horizontal: 'right' },
    },
    argTypes: {
        children: { table: { disable: true } },
    },
};
