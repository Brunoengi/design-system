import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MuiAlert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
/**
 * Alertas são usados para comunicar informações importantes ao usuário
 * através de mensagens contextuais.
 */
export var Alert = function (_a) {
    var _b = _a.severity, severity = _b === void 0 ? "info" : _b, _c = _a.variant, variant = _c === void 0 ? "standard" : _c, title = _a.title, children = _a.children, onClose = _a.onClose;
    return (_jsxs(MuiAlert, { severity: severity, variant: variant, onClose: onClose, sx: { minWidth: '320px' }, children: [title && _jsx(AlertTitle, { children: title }), children] }));
};
