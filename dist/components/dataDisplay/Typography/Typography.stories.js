import Typography from "./Typography";
var meta = {
    title: "Data Display/Typography",
    component: Typography,
    argTypes: {
        children: {
            control: "text",
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
                "button",
                "caption",
                "overline",
            ],
        },
        align: {
            control: { type: "select" },
            options: ["inherit", "left", "center", "right", "justify"],
        },
        gutterBottom: {
            control: "boolean",
        },
        noWrap: {
            control: "boolean",
        },
        paragraph: {
            control: "boolean",
        },
        component: {
            control: "text",
            description: "O elemento HTML a ser renderizado (ex: 'h1', 'p', 'span').",
        },
    },
};
export default meta;
export var Default = {
    name: "Interativo",
    args: {
        children: "The quick brown fox jumps over the lazy dog.",
        variant: "body1",
    },
};
export var Heading1 = {
    args: {
        children: "Heading 1",
        variant: "h1",
        gutterBottom: true,
    },
};
export var Heading2 = {
    args: {
        children: "Heading 2",
        variant: "h2",
        gutterBottom: true,
    },
};
export var Subtitle = {
    name: "Subtítulo com GutterBottom",
    args: {
        children: "I am a subtitle, and I have a bottom margin.",
        variant: "subtitle1",
        gutterBottom: true,
    },
};
export var BodyAsParagraph = {
    name: "Corpo de Texto como Parágrafo",
    args: {
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
        variant: "body1",
        paragraph: true,
    },
};
export var Overline = {
    args: {
        children: "Overline text",
        variant: "overline",
    },
};
