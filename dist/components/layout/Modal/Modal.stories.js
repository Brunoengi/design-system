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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Modal from "./Modal";
import { Button, Typography, DialogActions } from "@mui/material";
var meta = {
    title: "Layout/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        isOpen: {
            control: false,
            description: "Controla a visibilidade do modal. Gerenciado pela história.",
        },
        onClose: {
            control: false,
            description: "Função para fechar o modal. Gerenciada pela história.",
        },
        title: {
            control: "text",
            description: "O título exibido no cabeçalho do modal.",
        },
        children: {
            control: false,
            description: "O conteúdo a ser exibido dentro do modal.",
        },
        maxWidth: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", false],
            description: "Determina a largura máxima do modal.",
        },
    },
    args: {
        title: "Título do Modal",
        maxWidth: "sm",
    },
};
export default meta;
// Template para gerenciar o estado de abertura do modal em cada história
var ModalTemplate = function (args) {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    return (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "contained", onClick: function () { return setIsOpen(true); }, children: "Abrir Modal" }), _jsx(Modal, __assign({}, args, { isOpen: isOpen, onClose: function () { return setIsOpen(false); } }))] }));
};
export var Default = {
    name: "Padrão",
    args: {
        children: (_jsx(Typography, { children: "Este \u00E9 o conte\u00FAdo do modal. Voc\u00EA pode colocar qualquer componente React aqui dentro." })),
    },
    render: ModalTemplate,
};
export var WithLongContent = {
    name: "Com Conteúdo Longo",
    args: {
        title: "Termos de Serviço",
        children: (_jsxs(_Fragment, { children: [_jsx(Typography, { gutterBottom: true, children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros." }), _jsx(Typography, { gutterBottom: true, children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor." }), _jsx(Typography, { children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla." })] })),
    },
    render: ModalTemplate,
};
export var WithActions = {
    name: "Com Ações no Rodapé",
    args: {
        title: "Confirmar Ação",
        children: (_jsxs(_Fragment, { children: [_jsx(Typography, { children: "Voc\u00EA tem certeza que deseja executar esta a\u00E7\u00E3o? Esta opera\u00E7\u00E3o n\u00E3o pode ser desfeita." }), _jsxs(DialogActions, { children: [_jsx(Button, { children: "Cancelar" }), _jsx(Button, { variant: "contained", children: "Confirmar" })] })] })),
    },
    render: ModalTemplate,
};
export var Large = {
    name: "Tamanho Grande (lg)",
    args: __assign(__assign({}, Default.args), { title: "Modal Grande", maxWidth: "lg" }),
    render: ModalTemplate,
};
