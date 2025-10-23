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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Box, useTheme } from '@mui/material';
/**
 * InputGroup é um contêiner que agrupa múltiplos componentes Input,
 * tratando as bordas e os estados (foco, erro, desabilitado) de forma unificada.
 * Ideal para criar campos de formulário compostos.
 */
var InputGroup = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.direction, direction = _b === void 0 ? 'horizontal' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.error, error = _d === void 0 ? false : _d, _e = _a.size, size = _e === void 0 ? 'medium' : _e, _f = _a.borderRadius, borderRadius = _f === void 0 ? 'md' : _f, inputSx = _a.inputSx, sx = _a.sx, rest = __rest(_a, ["children", "direction", "disabled", "error", "size", "borderRadius", "inputSx", "sx"]);
    var theme = useTheme();
    var childrenArray = React.Children.toArray(children);
    // Lógica para resolver o valor do raio da borda
    var radiusValue;
    switch (borderRadius) {
        case 'none':
            radiusValue = 0;
            break;
        case 'sm':
            radiusValue = 2;
            break;
        case 'md':
            radiusValue = theme.shape.borderRadius; // ex: 4px
            break;
        case 'lg':
            radiusValue = theme.shape.borderRadius * 2; // ex: 8px
            break;
        case 'full':
            radiusValue = 9999; // Formato "Pill"
            break;
        default:
            // Usa o valor customizado se for número ou string
            radiusValue = borderRadius;
    }
    // Define as cores da borda com base nos estados
    var normalBorderColor = theme.palette.action.active;
    var hoverBorderColor = theme.palette.text.primary;
    var focusedBorderColor = error
        ? theme.palette.error.main
        : theme.palette.primary.main;
    var errorBorderColor = theme.palette.error.main;
    var disabledBorderColor = theme.palette.action.disabled;
    var groupSx = __assign(__assign(__assign({ display: 'flex', flexDirection: direction === 'horizontal' ? 'row' : 'column', borderRadius: radiusValue, border: "1px solid ".concat(disabled
            ? disabledBorderColor
            : error
                ? errorBorderColor
                : normalBorderColor), transition: theme.transitions.create(['border-color', 'box-shadow']) }, (!disabled && {
        '&:hover': {
            borderColor: error ? errorBorderColor : hoverBorderColor,
        },
    })), { 
        // Estilo de foco usando o pseudo-seletor :has() para verificar se algum filho está focado
        '&:has(.Mui-focused)': {
            borderColor: focusedBorderColor,
            // Adiciona um "glow" similar ao do TextField focado
            boxShadow: "0 0 0 1px ".concat(focusedBorderColor),
        }, 
        // Garante que os inputs filhos preencham o espaço
        '& > .MuiTextField-root': {
            flex: 1,
        } }), sx);
    return (_jsx(Box, __assign({ sx: groupSx, ref: ref }, rest, { children: childrenArray.map(function (child, index) {
            if (!React.isValidElement(child)) {
                return child;
            }
            var isLastChild = index === childrenArray.length - 1;
            var largeSizeSx = size === 'large'
                ? {
                    '& .MuiInputBase-input': {
                        // Aumenta o padding para simular um input 'large'
                        padding: '24.5px 14px',
                    },
                    // Ajusta a posição do label para o tamanho 'large' quando não está encolhido.
                    // O valor de 24px na vertical alinha o label com o padding aumentado.
                    '& .MuiInputLabel-root:not(.MuiInputLabel-shrink)': {
                        transform: 'translate(14px, 24px) scale(1)',
                    },
                }
                : {};
            // Clona o elemento filho para injetar as props necessárias
            return React.cloneElement(child, {
                variant: 'borderless', // Usa a variante sem borda
                size: size === 'large' ? 'medium' : size,
                disabled: disabled || child.props.disabled,
                error: error || child.props.error,
                sx: __assign(__assign(__assign(__assign(__assign(__assign({}, largeSizeSx), inputSx), child.props.sx), (!isLastChild &&
                    direction === 'horizontal' && {
                    borderRight: "1px solid ".concat(theme.palette.divider),
                })), (!isLastChild &&
                    direction === 'vertical' && {
                    borderBottom: "1px solid ".concat(theme.palette.divider),
                })), { 
                    // Adiciona um "entalhe" para o label não ser sobreposto pela borda.
                    // Quando o label encolhe, damos a ele um fundo da cor do papel e
                    // um padding, fazendo com que ele cubra a borda do grupo.
                    '& .MuiInputLabel-shrink': {
                        background: theme.palette.background.paper,
                        paddingLeft: '4px',
                        paddingRight: '4px',
                    } }),
            });
        }) })));
});
InputGroup.displayName = 'InputGroup';
export default InputGroup;
