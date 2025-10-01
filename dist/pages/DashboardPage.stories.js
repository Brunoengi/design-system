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
import { Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Avatar, alpha, } from '@mui/material';
import { Home, Analytics } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '../components/input/Button/Button';
import TeamCard from '@/components/surface/TeamCard/TeamCard';
import Sidebar from '@/components/surface/Sidebar/Sidebar';
var meta = {
    title: 'Pages/Dashboard',
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [function (Story) { return _jsx(Story, {}); }],
};
export default meta;
export var FloatingSidebarWithTeamPanel = {
    name: 'Dashboard com Painel de Equipes',
    render: function () {
        var _a = React.useState('Dashboard'), activeItem = _a[0], setActiveItem = _a[1];
        var _b = React.useState(null), open = _b[0], setOpen = _b[1];
        var _c = React.useState(null), highlightedCard = _c[0], setHighlightedCard = _c[1];
        var devTeam = [
            {
                name: 'Ana Costa',
                title: ['Líder de', 'Desenvolvimento'],
                showAvatar: false,
                socials: [
                    { network: 'linkedin', url: '#' },
                    { network: 'github', url: '#' },
                ],
            },
        ];
        var advisorsTeam = [
            {
                name: 'Carlos Souza',
                title: ['Orientador', 'Técnico'],
                showAvatar: false,
                socials: [
                    { network: 'linkedin', url: '#' },
                    { network: 'website', url: '#' },
                ],
            },
            {
                name: 'Mariana Silva',
                title: ['Orientadora', 'Acadêmica'],
                showAvatar: false,
                socials: [{ network: 'linkedin', url: '#' }],
            },
        ];
        var supportTeam = [
            {
                name: 'Beatriz Lima',
                title: ['Apoio e', 'QA'],
                showAvatar: false,
                socials: [{ network: 'linkedin', url: '#' }],
            },
            {
                name: 'Lucas Pereira',
                title: ['Suporte', 'Técnico'],
                showAvatar: false,
                socials: [{ network: 'linkedin', url: '#' }],
            },
        ];
        var handleHighlight = function (team) {
            setHighlightedCard(team);
            setTimeout(function () {
                setHighlightedCard(null);
            }, 2000);
        };
        var menuData = [
            { id: 'PropriedadesGeometricas', text: 'Propriedades Geométricas', icon: _jsx(Home, {}) },
            { id: 'Combinacoes', text: 'Combinações', icon: _jsx(Analytics, {}) },
            { id: 'Combinacoes', text: 'Combinações', icon: _jsx(Analytics, {}) },
        ];
        var activeStyles = {
            bgcolor: '#364B73',
            color: 'common.white',
            '&:hover': { bgcolor: '#405680' },
            '& .MuiListItemIcon-root': { color: 'common.white' },
        };
        var inactiveStyles = {
            color: 'grey.400',
            '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.08)' },
            '& .MuiListItemIcon-root': { color: 'common.white' },
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
                        borderColor: 'transparent',
                        height: '100%',
                        borderRadius: 2,
                        boxShadow: 3,
                        borderRight: 'none',
                    }, children: [_jsxs(Sidebar.Header, { sx: {
                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                            }, children: [_jsx(Avatar, { sx: { bgcolor: '#1ABC9C', width: 32, height: 32 }, children: _jsx(AdbIcon, { sx: { fontSize: '1.2rem' } }) }), _jsx(Typography, { variant: "h6", sx: { ml: 1.5, color: 'common.white', fontWeight: 'bold' }, children: "Meu Projeto" }), _jsx(MenuIcon, { sx: { ml: 'auto', color: 'grey.500' } })] }), _jsx(Sidebar.Content, { sx: { py: 1.5, pl: 1.5 }, children: _jsx(List, { component: "nav", dense: true, children: menuData.map(function (item) { return (_jsxs(ListItemButton, { onClick: function () { return setActiveItem(item.id); }, sx: __assign({ borderRadius: 1, mb: 0.5 }, (activeItem === item.id ? activeStyles : inactiveStyles)), children: [_jsx(ListItemIcon, { sx: { minWidth: 36 }, children: item.icon }), _jsx(ListItemText, { primary: item.text })] }, item.id)); }) }) })] }), _jsxs(Box, { sx: {
                        bgcolor: '#fff',
                        borderRadius: 2,
                        boxShadow: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1, // Garante que este container ocupe o resto da largura
                        p: 3, // Adiciona um padding interno para o conteúdo
                    }, children: [_jsxs(Box, { children: [_jsx(Typography, { variant: "h4", children: "Conte\u00FAdo Principal" }), _jsx(Typography, { sx: { mt: 2 }, children: "Este \u00E9 o conte\u00FAdo que fica na parte de cima." })] }), _jsxs(Box, { sx: { marginTop: 'auto', display: 'flex', flexDirection: 'column' }, children: [_jsxs(Box, { sx: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center', // Adicionado para centralizar verticalmente
                                        mb: 2,
                                        gap: 2, // Adicionado para espaçamento
                                    }, children: [_jsx(Typography, { variant: "h6", children: "Equipes do Projeto:" }), _jsx(Button, { variant: "outlined", color: "primary", onClick: function () { return handleHighlight('dev'); }, children: "Desenvolvedor" }), _jsx(Button, { variant: "outlined", color: "secondary", onClick: function () { return handleHighlight('advisors'); }, children: "Orientadores" }), _jsx(Button, { variant: "outlined", color: "success", onClick: function () { return handleHighlight('support'); }, children: "Financiamento" })] }), _jsxs(Box, { sx: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexWrap: 'wrap',
                                        gap: 2,
                                    }, children: [_jsx(TeamCard, { size: "medium", members: devTeam, sx: function (theme) { return ({
                                                p: 2,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                                transition: 'background-color 0.3s ease-in-out',
                                                backgroundColor: highlightedCard === 'dev'
                                                    ? alpha(theme.palette.primary.light, 0.3)
                                                    : 'transparent',
                                            }); } }), _jsx(TeamCard, { size: "medium", members: advisorsTeam, sx: function (theme) { return ({
                                                p: 2,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                                transition: 'background-color 0.3s ease-in-out',
                                                backgroundColor: highlightedCard === 'advisors'
                                                    ? alpha(theme.palette.secondary.light, 0.3)
                                                    : 'transparent',
                                            }); } }), _jsx(TeamCard, { size: "medium", members: supportTeam, sx: function (theme) { return ({
                                                p: 2,
                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                                                transition: 'background-color 0.3s ease-in-out',
                                                backgroundColor: highlightedCard === 'support'
                                                    ? alpha(theme.palette.success.light, 0.3)
                                                    : 'transparent',
                                            }); } })] })] })] })] }));
    },
};
