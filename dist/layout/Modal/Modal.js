import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dialog as MuiDialog, DialogTitle, DialogContent, IconButton, } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
/**
 * O componente Modal exibe conteúdo em uma camada sobre o aplicativo,
 * desativando a interação com a página principal.
 */
var Modal = function (_a) {
    var children = _a.children, isOpen = _a.isOpen, onClose = _a.onClose, title = _a.title, _b = _a.maxWidth, maxWidth = _b === void 0 ? "sm" : _b;
    return (_jsxs(MuiDialog, { onClose: onClose, open: isOpen, fullWidth: true, maxWidth: maxWidth, children: [_jsxs(DialogTitle, { sx: { m: 0, p: 2 }, children: [title, _jsx(IconButton, { "aria-label": "close", onClick: onClose, sx: { position: "absolute", right: 8, top: 8, color: function (theme) { return theme.palette.grey[500]; } }, children: _jsx(CloseIcon, {}) })] }), _jsx(DialogContent, { dividers: true, children: children })] }));
};
export default Modal;
