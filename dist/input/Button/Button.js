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
import MuiButton from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
var Button = function (_a) {
    var _b = _a.borderRadius, borderRadius = _b === void 0 ? 'sm' : _b, sx = _a.sx, props = __rest(_a, ["borderRadius", "sx"]);
    var theme = useTheme();
    var getBorderRadius = function () {
        if (!borderRadius)
            return undefined;
        switch (borderRadius) {
            case 'none':
                return 0;
            case 'sm':
                return '2px';
            case 'md':
                return '4px'; // Typically 4px
            case 'lg':
                return '8px';
            case 'full':
                return '9999px';
            default:
                return borderRadius;
        }
    };
    return (_jsx(MuiButton, __assign({}, props, { 
        // Usamos '&&' para aumentar a especificidade do seletor CSS.
        // Isso garante que nosso borderRadius sobrescreva os padrões do MuiButtonBase.
        sx: __assign(__assign({}, sx), { borderRadius: undefined, '&&': { borderRadius: getBorderRadius() } }), children: props.children || 'Text' })));
};
export default Button;
