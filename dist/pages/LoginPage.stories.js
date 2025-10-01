import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Typography, TextField, Checkbox, FormControlLabel, Link, } from '@mui/material';
import Button from '../components/input/Button/Button';
var meta = {
    title: 'Pages/Login',
    parameters: {
        layout: 'fullscreen',
    },
    // Como esta é uma página completa, não precisa dos decorators globais do Sidebar.
    decorators: [function (Story) { return _jsx(Story, {}); }],
};
export default meta;
export var Default = {
    name: 'Página de Login',
    render: function () { return (_jsx(Container, { component: "main", maxWidth: "xs", children: _jsxs(Box, { sx: {
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }, children: [_jsx(Typography, { component: "h1", variant: "h5", children: "Entrar" }), _jsxs(Box, { component: "form", sx: { mt: 1 }, noValidate: true, children: [_jsx(TextField, { margin: "normal", required: true, fullWidth: true, id: "email", label: "Endere\u00E7o de Email", name: "email", autoComplete: "email", autoFocus: true }), _jsx(TextField, { margin: "normal", required: true, fullWidth: true, name: "password", label: "Senha", type: "password", id: "password", autoComplete: "current-password" }), _jsx(FormControlLabel, { control: _jsx(Checkbox, { value: "remember", color: "primary" }), label: "Lembrar-me" }), _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", sx: { mt: 3, mb: 2 }, children: "Entrar" }), _jsx(Link, { href: "#", variant: "body2", children: "Esqueceu a senha?" })] })] }) })); },
};
