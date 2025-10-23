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
import MuiAvatar from '@mui/material/Avatar';
// Define um mapa de tamanhos customizados que serão convertidos para a prop `sx` do MUI.
var sizeMap = {
    xs: { width: 20, height: 20, fontSize: '0.625rem' }, // 20px
    sm: { width: 24, height: 24, fontSize: '0.75rem' }, // 24px
    md: { width: 32, height: 32, fontSize: '0.875rem' }, // 32px
    lg: { width: 40, height: 40, fontSize: '1rem' }, // 40px (padrão do MUI)
};
/**
 * Componente Avatar construído sobre o Avatar do Material-UI.
 * Suporta imagens, ícones ou letras como conteúdo.
 */
var Avatar = function (_a) {
    var image = _a.image, _b = _a.description, description = _b === void 0 ? '' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, children = _a.children, sx = _a.sx, rest = __rest(_a, ["image", "description", "size", "children", "sx"]);
    // Combina os estilos de tamanho customizados com qualquer `sx` prop passada.
    var combinedSx = __assign(__assign({}, sizeMap[size]), sx);
    // Se `children` não for fornecido, tenta gerar iniciais a partir da `description`.
    var avatarChildren = children || (description ? description.charAt(0).toUpperCase() : null);
    return _jsx(MuiAvatar, __assign({ src: image, alt: description, sx: combinedSx }, rest, { children: avatarChildren }));
};
export default Avatar;
