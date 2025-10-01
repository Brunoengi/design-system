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
import { AddCircleOutline } from "@mui/icons-material";
// O caminho foi corrigido para apontar para o componente correto.
import Accordion from "./Accordion";
var meta = {
    title: "Surface/Accordion",
    component: Accordion,
    parameters: {
        // Adiciona um pouco de espaço ao redor do componente para melhor visualização
        layout: "padded",
    },
    argTypes: {
        allContent: {
            description: "Array de objetos contendo o título e o conteúdo de cada painel.",
            control: "object",
        },
        allowMultiple: {
            control: "boolean",
            description: "Permite que múltiplos painéis fiquem abertos ao mesmo tempo.",
        },
        expandIcon: {
            control: false, // Ícones não são facilmente controláveis via props do Storybook
            description: "Ícone customizado para expandir/recolher. Veja a história 'Com Ícone Customizado'.",
        },
    },
};
export default meta;
export var Default = {
    name: "Padrão",
    args: {
        allContent: [
            {
                title: "Painel 1",
                content: "Conteúdo do primeiro painel. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
                title: "Painel 2",
                content: "Conteúdo do segundo painel. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
            },
        ],
        allowMultiple: true,
        style: { width: "100%", maxWidth: "600px" }, // Adicionando largura para melhor visualização
    },
};
export var WithRichContent = {
    name: "Com Conteúdo Rico",
    args: __assign(__assign({}, Default.args), { allContent: [
            {
                title: _jsx("strong", { children: "Painel com T\u00EDtulo em Negrito" }),
                content: (_jsxs("div", { children: [_jsx("p", { children: "Este painel cont\u00E9m elementos HTML mais complexos." }), _jsxs("ul", { children: [_jsx("li", { children: "Item de lista 1" }), _jsx("li", { children: "Item de lista 2" })] })] })),
            },
            {
                title: "Outro Painel",
                content: "Apenas um texto simples aqui.",
            },
        ] }),
};
export var SinglePanelOpen = {
    name: "Apenas um Painel Aberto",
    args: __assign(__assign({}, Default.args), { allowMultiple: false }),
    parameters: {
        docs: {
            description: {
                story: "Com `allowMultiple={false}`, abrir um painel automaticamente fecha qualquer outro que esteja aberto.",
            },
        },
    },
};
export var WithDisabledPanel = {
    name: "Com Painel Desabilitado",
    args: __assign(__assign({}, Default.args), { allContent: [
            {
                title: "Painel 1 (Habilitado)",
                content: "Este painel pode ser aberto.",
            },
            {
                title: "Painel 2 (Desabilitado)",
                content: "Este conteúdo não pode ser visto pois o painel está desabilitado.",
                disabled: true,
            },
            {
                title: "Painel 3 (Habilitado)",
                content: "Este também pode ser aberto.",
            },
        ] }),
};
export var WithCustomIcon = {
    name: "Com Ícone Customizado",
    args: __assign(__assign({}, Default.args), { expandIcon: _jsx(AddCircleOutline, {}) }),
    parameters: {
        docs: {
            description: {
                story: "Você pode passar qualquer `React.ReactNode` como ícone de expansão.",
            },
        },
    },
};
