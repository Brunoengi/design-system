import Title from "./Title";
var meta = {
    title: "Data Display/Title",
    component: Title,
    argTypes: {
        children: {
            control: "text",
            description: "O texto a ser exibido no título.",
        },
        component: {
            options: ["h1", "h2", "h3", "h4", "h5", "h6", "div", "p"],
            control: { type: "select" },
            description: "A tag HTML a ser usada para o título.",
        },
        variant: {
            control: { type: "select" },
            options: [
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "subtitle1",
                "subtitle2",
                "body1",
                "body2",
            ],
        },
        align: {
            options: ["left", "center", "right", "justify"],
            control: { type: "select" },
        },
        sx: {
            control: "object",
            description: "A prop de sistema que permite definir overrides de sistema, bem como CSS customizado.",
        },
    },
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};
export default meta;
export var Default = {
    name: "Padrão",
    args: {
        children: "Este é um Título Padrão",
        component: "h1",
        variant: "h1",
        sx: { fontWeight: "bold" },
    },
};
export var AsH3 = {
    name: "Como H3",
    args: {
        children: "Este é um subtítulo",
        component: "h3",
        variant: "h3",
    },
};
export var WithCustomStyling = {
    name: "Com Estilização Customizada (via sx)",
    args: {
        children: "Título com Fundo",
        component: "h2",
        variant: "h2",
        align: "center",
        sx: {
            fontWeight: "bold",
            backgroundColor: "primary.light",
            color: "primary.contrastText",
            padding: 2, // theme.spacing(2)
            borderRadius: 1, // theme.shape.borderRadius
        },
    },
};
