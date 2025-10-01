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
import { Box as MuiBox, Typography as MuiTypography, Paper, } from '@mui/material';
var meta = {
    title: 'Layout/Flexbox Examples',
    component: MuiBox,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // Container props
        flexDirection: {
            control: 'select',
            options: ['row', 'row-reverse', 'column', 'column-reverse'],
            table: { category: 'Container Props' },
        },
        justifyContent: {
            control: 'select',
            options: [
                'flex-start',
                'flex-end',
                'center',
                'space-between',
                'space-around',
                'space-evenly',
            ],
            table: { category: 'Container Props' },
        },
        alignItems: {
            control: 'select',
            options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
            table: { category: 'Container Props' },
        },
        flexWrap: {
            control: 'select',
            options: ['nowrap', 'wrap', 'wrap-reverse'],
            table: { category: 'Container Props' },
        },
        alignContent: {
            control: 'select',
            options: [
                'flex-start',
                'flex-end',
                'center',
                'space-between',
                'space-around',
                'stretch',
            ],
            description: 'Requires flex-wrap: wrap and multiple lines of items.',
            table: { category: 'Container Props' },
        },
        gap: {
            control: { type: 'number', min: 0, max: 10, step: 1 },
            table: { category: 'Container Props' },
        },
        // Item props
        flexGrow: {
            control: { type: 'number', min: 0, max: 5, step: 1 },
            description: 'Applied to the second item for demonstration.',
            table: { category: 'Item Props' },
        },
        flexShrink: {
            control: { type: 'number', min: 0, max: 5, step: 1 },
            description: 'Applied to all items for demonstration.',
            table: { category: 'Item Props' },
        },
        flexBasis: {
            control: 'text',
            description: 'Applied to the third item for demonstration (e.g., "150px").',
            table: { category: 'Item Props' },
        },
    },
};
export default meta;
// Wrapper components to ensure Storybook displays the correct name in the code preview.
// This is a common workaround for MUI components that use forwardRef.
var Box = function (props) { return _jsx(MuiBox, __assign({}, props)); };
var Typography = function (props) { return _jsx(MuiTypography, __assign({}, props)); };
var StyledBox = function (props) { return (_jsx(Paper, { elevation: 2, sx: __assign({ p: 2, minWidth: 80, minHeight: 80, bgcolor: 'primary.light', color: 'primary.contrastText', display: 'flex', alignItems: 'center', justifyContent: 'center' }, props.sx), children: _jsx(Typography, { variant: "body2", component: "div", children: props.children }) })); };
export var JustifyContent = {
    name: 'Container: Justify Content',
    render: function (args) { return (_jsxs(Box, { sx: {
            display: 'flex',
            p: 2,
            bgcolor: 'grey.200',
            borderRadius: 1,
            minHeight: 300,
            width: '100%',
            justifyContent: args.justifyContent,
            gap: args.gap,
        }, children: [_jsx(StyledBox, { children: "Item 1" }), _jsx(StyledBox, { children: "Item 2" }), _jsx(StyledBox, { children: "Item 3" })] })); },
    args: {
        justifyContent: 'flex-start',
        gap: 1,
    },
};
export var MainContentAndFooter = {
    name: 'Layout: Conteúdo e Rodapé',
    render: function (args) { return (_jsxs(Box, { sx: {
            display: 'flex',
            p: 2,
            bgcolor: 'grey.200',
            borderRadius: 1,
            minHeight: 300,
            width: '100%',
            flexDirection: 'column',
            gap: args.gap,
        }, children: [_jsx(StyledBox, { sx: {
                    flexGrow: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    p: 3,
                }, children: _jsxs("div", { children: [_jsx(Typography, { variant: "h6", component: "h3", gutterBottom: true, children: "Conte\u00FAdo Principal" }), _jsxs(Typography, { variant: "body1", children: ["Este container tem ", _jsx("code", { children: "flexGrow: 1" }), ", fazendo com que ele se expanda e ocupe todo o espa\u00E7o vertical dispon\u00EDvel."] })] }) }), _jsx(StyledBox, { sx: { bgcolor: 'secondary.main', minHeight: 'auto' }, children: "Rodap\u00E9 (altura autom\u00E1tica)" })] })); },
    args: {
        gap: 2,
    },
};
export var AlignItems = {
    name: 'Container: Align Items',
    render: function (args) { return (_jsxs(Box, { sx: {
            display: 'flex',
            p: 2,
            bgcolor: 'grey.200',
            borderRadius: 1,
            minHeight: 300,
            width: '100%',
            alignItems: args.alignItems,
            gap: args.gap,
        }, children: [_jsx(StyledBox, { sx: { minHeight: 120 }, children: "Item 1" }), _jsx(StyledBox, { children: "Item 2" }), _jsx(StyledBox, { sx: { minHeight: 60 }, children: "Item 3" })] })); },
    args: {
        alignItems: 'stretch',
        gap: 1,
    },
};
export var FlexDirection = {
    name: 'Container: Flex Direction',
    render: function (args) { return (_jsxs(Box, { sx: {
            display: 'flex',
            p: 2,
            bgcolor: 'grey.200',
            borderRadius: 1,
            minHeight: 300,
            width: '100%',
            flexDirection: args.flexDirection,
            gap: args.gap,
        }, children: [_jsx(StyledBox, { children: "Item 1" }), _jsx(StyledBox, { children: "Item 2" }), _jsx(StyledBox, { children: "Item 3" })] })); },
    args: {
        flexDirection: 'row',
        gap: 1,
    },
};
export var FlexWrap = {
    name: 'Container: Flex Wrap',
    render: function (args) { return (_jsxs(Box, { sx: {
            display: 'flex',
            p: 2,
            bgcolor: 'grey.200',
            borderRadius: 1,
            minHeight: 300,
            width: '100%',
            flexWrap: args.flexWrap,
            gap: args.gap,
        }, children: [_jsx(StyledBox, { sx: { width: '40%' }, children: "Item 1 (40%)" }), _jsx(StyledBox, { sx: { width: '40%' }, children: "Item 2 (40%)" }), _jsx(StyledBox, { sx: { width: '40%' }, children: "Item 3 (40%)" })] })); },
    args: {
        flexWrap: 'wrap',
        gap: 1,
    },
};
export var AlignContent = {
    name: 'Container: Align Content',
    render: function (args) { return (_jsxs(Box, { sx: {
            display: 'flex',
            p: 2,
            bgcolor: 'grey.200',
            borderRadius: 1,
            minHeight: 300,
            width: '100%',
            flexWrap: 'wrap',
            alignContent: args.alignContent,
            gap: args.gap,
        }, children: [_jsx(StyledBox, { sx: { width: '30%' }, children: "Item 1" }), _jsx(StyledBox, { sx: { width: '30%' }, children: "Item 2" }), _jsx(StyledBox, { sx: { width: '30%' }, children: "Item 3" }), _jsx(StyledBox, { sx: { width: '30%' }, children: "Item 4" }), _jsx(StyledBox, { sx: { width: '30%' }, children: "Item 5" })] })); },
    args: {
        alignContent: 'stretch',
        gap: 1,
    },
};
export var FlexFlow = {
    name: 'Container: Flex Flow (Shorthand)',
    render: function (args) { return (_jsxs(Box, { sx: {
            display: 'flex',
            p: 2,
            bgcolor: 'grey.200',
            borderRadius: 1,
            minHeight: 300,
            width: '100%',
            flexFlow: "".concat(args.flexDirection, " ").concat(args.flexWrap),
            gap: args.gap,
        }, children: [_jsx(StyledBox, { sx: { width: '40%' }, children: "Item 1" }), _jsx(StyledBox, { sx: { width: '40%' }, children: "Item 2" }), _jsx(StyledBox, { sx: { width: '40%' }, children: "Item 3" })] })); },
    args: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 1,
    },
};
export var FlexGrow = {
    name: 'Item: Flex Grow',
    render: function (args) { return (_jsxs(Box, { sx: {
            display: 'flex',
            p: 2,
            bgcolor: 'grey.200',
            borderRadius: 1,
            minHeight: 300,
            width: '100%',
            gap: args.gap,
        }, children: [_jsx(StyledBox, { sx: { flexGrow: 1 }, children: "Item 1 (grow: 1)" }), _jsxs(StyledBox, { sx: { flexGrow: args.flexGrow, bgcolor: 'secondary.main' }, children: ["Item 2 (grow: ", String(args.flexGrow), ")"] }), _jsx(StyledBox, { sx: { flexGrow: 1 }, children: "Item 3 (grow: 1)" })] })); },
    args: {
        flexGrow: 2,
        gap: 1,
    },
};
export var FlexShrink = {
    name: 'Item: Flex Shrink',
    render: function (args) { return (_jsxs(Box, { sx: { width: '100%', overflow: 'hidden' }, children: [_jsx(Typography, { variant: "caption", display: "block", gutterBottom: true, children: "O container abaixo tem largura fixa. Reduza a tela ou o painel para ver o efeito de encolhimento." }), _jsxs(Box, { sx: {
                    display: 'flex',
                    p: 2,
                    bgcolor: 'grey.200',
                    borderRadius: 1,
                    minHeight: 300,
                    width: 600,
                    gap: args.gap,
                }, children: [_jsxs(StyledBox, { sx: { flexShrink: args.flexShrink, width: 250 }, children: ["Item 1 (shrink: ", String(args.flexShrink), ")"] }), _jsx(StyledBox, { sx: { flexShrink: 1, width: 250, bgcolor: 'secondary.main' }, children: "Item 2 (shrink: 1)" }), _jsxs(StyledBox, { sx: { flexShrink: args.flexShrink, width: 250 }, children: ["Item 3 (shrink: ", String(args.flexShrink), ")"] })] })] })); },
    args: {
        flexShrink: 1,
        gap: 1,
    },
};
export var FlexBasis = {
    name: 'Item: Flex Basis',
    render: function (args) { return (_jsxs(Box, { sx: {
            display: 'flex',
            p: 2,
            bgcolor: 'grey.200',
            borderRadius: 1,
            minHeight: 300,
            width: '100%',
            gap: args.gap,
        }, children: [_jsx(StyledBox, { sx: { flexGrow: 1, flexBasis: '100px' }, children: "Item 1 (basis: 100px)" }), _jsx(StyledBox, { sx: { flexGrow: 1, flexBasis: '100px' }, children: "Item 2 (basis: 100px)" }), _jsxs(StyledBox, { sx: { flexGrow: 1, flexBasis: args.flexBasis, bgcolor: 'secondary.main' }, children: ["Item 3 (basis: ", String(args.flexBasis), ")"] })] })); },
    args: {
        flexBasis: '200px',
        gap: 1,
    },
};
