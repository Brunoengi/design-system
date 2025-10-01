import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Input from "./Input";
import { AccountCircle, Search } from "@mui/icons-material";
var meta = {
    title: "Input/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: "select",
            options: ["text", "number", "password", "email"],
            description: "O tipo do input.",
        },
        label: {
            control: "text",
            description: "O conteúdo do rótulo (label).",
        },
        variant: {
            control: "select",
            options: ["standard", "outlined", "filled", "borderless"],
            description: "A variante de estilo a ser usada.",
        },
        disabled: {
            control: "boolean",
            description: "Se `true`, o input fica desabilitado.",
        },
        error: {
            control: "boolean",
            description: "Se `true`, o input indicará um estado de erro.",
        },
        borderRadius: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'full', 20],
            description: "Define o raio da borda. Pode ser um valor predefinido ('none', 'sm', 'md', 'lg', 'full') ou um valor customizado. Só funciona com a variante 'outlined'.",
        },
        roundedCorners: {
            control: 'check',
            options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
            description: "Define quais cantos devem ser arredondados. Só funciona com a variante 'outlined' e se `borderRadius` for fornecido.",
        },
        borders: {
            control: 'check',
            options: ['top', 'right', 'bottom', 'left'],
            description: "Define quais lados devem ter uma borda visível. Só funciona com a variante 'outlined'.",
        },
        helperText: {
            control: "text",
            description: "O texto de ajuda exibido abaixo do input.",
        },
        startAdornment: {
            control: false,
            description: "Conteúdo para exibir no início do input (prefixo).",
        },
        endAdornment: {
            control: false,
            description: "Conteúdo para exibir no final do input (sufixo).",
        },
        size: {
            control: "radio",
            options: ["small", "medium"],
            description: "O tamanho (densidade) do input.",
        },
        maxLength: {
            control: 'number',
            description: 'Define o número máximo de caracteres. A largura do input será ajustada automaticamente.',
        },
    },
    args: {
        label: "Label",
        type: "text",
        variant: "outlined",
        disabled: false,
        error: false,
        helperText: "",
        size: "medium",
    },
};
export default meta;
export var Default = {
    name: "Padrão",
    args: {
        label: "Nome de Usuário",
    },
};
export var Numeric = {
    name: "Numérico",
    args: {
        label: "Idade",
        type: "number",
    },
};
export var Decimal = {
    name: 'Decimal',
    args: {
        label: 'Preço',
        type: 'number',
        startAdornment: 'R$',
        helperText: 'Permite números e um separador decimal (ponto ou vírgula).',
    },
};
export var WithStartAdornment = {
    name: "Com Prefixo (Start Adornment)",
    args: {
        label: "Preço",
        type: "number",
        startAdornment: "R$",
    },
};
export var WithEndAdornment = {
    name: "Com Sufixo (End Adornment)",
    args: {
        label: "Peso",
        type: "number",
        endAdornment: "kg",
    },
};
export var WithMaxLength = {
    name: 'Com Limite de Dígitos (maxLength)',
    args: {
        label: 'CVC',
        type: 'number',
        maxLength: 3,
        helperText: 'Largura ajustada e limite de 3 dígitos.',
    },
};
export var WithCustomBorderRadius = {
    name: 'Com Raio de Borda (Large)',
    args: {
        label: 'Borda Arredondada (lg)',
        borderRadius: 'lg',
    },
};
export var WithSpecificRoundedCorners = {
    name: 'Com Cantos Arredondados Específicos',
    args: {
        label: 'Cantos Esquerdos',
        borderRadius: 16,
        roundedCorners: ['topLeft', 'bottomLeft'],
    },
};
export var WithCustomBorders = {
    name: 'Com Bordas Customizadas',
    args: {
        label: 'Apenas Borda Inferior',
        borders: ['bottom'],
        helperText: "Estilo 'underline' usando a variante 'outlined'",
    },
};
export var WithCombinedStyles = {
    name: 'Com Estilos Combinados',
    args: {
        label: 'Sem Borda Superior',
        borders: ['right', 'bottom', 'left'],
        borderRadius: 12,
        roundedCorners: ['bottomLeft', 'bottomRight'],
    },
};
export var Borderless = {
    name: "Sem Bordas (Borderless)",
    args: {
        label: "Busca",
        variant: "borderless",
        defaultValue: "Input sem bordas",
    },
};
export var BorderlessWithAdornment = {
    name: "Sem Bordas com Prefixo",
    args: {
        label: "Usuário",
        variant: "borderless",
        startAdornment: _jsx(AccountCircle, {}),
    },
};
export var Small = {
    name: "Pequeno (Small)",
    args: {
        label: "Campo Pequeno",
        size: "small",
    },
};
export var WithIcon = {
    name: "Com Ícone",
    args: {
        label: "Usuário",
        startAdornment: _jsx(AccountCircle, {}),
    },
};
export var Disabled = {
    name: "Desabilitado",
    args: {
        label: "Campo Desabilitado",
        defaultValue: "Não pode editar",
        disabled: true,
    },
};
export var WithError = {
    name: "Com Erro",
    args: {
        label: "Email",
        type: "email",
        error: true,
        helperText: "Endereço de email inválido.",
    },
};
export var WithGreekLetterSuffix = {
    name: "Com Sufixo de Letra Grega",
    args: {
        label: "Resistência",
        type: "number",
        endAdornment: "Ω",
    },
};
export var WithSubscriptSuffix = {
    name: "Com Sufixo em Subscrito",
    args: {
        label: "Fórmula",
        type: "text",
        defaultValue: "CO",
        endAdornment: _jsx("sub", { children: "2" }),
    },
};
export var WithComplexPrefix = {
    name: "Com Prefixo Grego e Subscrito",
    args: {
        label: "Coeficiente",
        type: "number",
        startAdornment: (_jsxs(_Fragment, { children: ["\u03B1", _jsx("sub", { children: "2" })] })),
    },
};
export var WithComplexLabel = {
    name: "Com Label Complexo",
    args: {
        label: (_jsxs(_Fragment, { children: ["\u03BC", _jsx("sub", { children: "s" })] })),
        // Ao remover o defaultValue, o label começa dentro do campo.
        helperText: "Clique no campo para ver o label flutuar.",
    },
};
export var WithComplexLabelAndSuffix = {
    name: "Com Label Complexo e Sufixo",
    args: {
        label: (_jsxs(_Fragment, { children: ["\u03C9", _jsx("sub", { children: "t" })] })),
        endAdornment: "cm",
    },
};
export var DisabledWithSuffix = {
    name: "Desabilitado com Sufixo",
    args: {
        label: "Peso (Desabilitado)",
        defaultValue: "-",
        disabled: true,
        endAdornment: "kg",
    },
};
export var PillShape = {
    name: 'Com Borda "Pill" (Full)',
    args: {
        label: 'Busca...',
        borderRadius: 'full',
        startAdornment: _jsx(Search, {}),
    },
};
