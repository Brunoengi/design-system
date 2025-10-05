import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Popover, Button, Box } from '@mui/material';
var PopoverComponent = function (_a) {
    var children = _a.children, _b = _a.buttonLabel, buttonLabel = _b === void 0 ? 'Open Popover' : _b, _c = _a.anchorOrigin, anchorOrigin = _c === void 0 ? {
        vertical: 'bottom',
        horizontal: 'left',
    } : _c, _d = _a.transformOrigin, transformOrigin = _d === void 0 ? {
        vertical: 'top',
        horizontal: 'left',
    } : _d, _e = _a.disablePadding, disablePadding = _e === void 0 ? false : _e;
    var _f = useState(null), anchorEl = _f[0], setAnchorEl = _f[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var open = Boolean(anchorEl);
    var id = open ? 'simple-popover' : undefined;
    return (_jsxs("div", { children: [_jsx(Button, { "aria-describedby": id, variant: "contained", onClick: handleClick, children: buttonLabel }), _jsx(Popover, { id: id, open: open, anchorEl: anchorEl, onClose: handleClose, anchorOrigin: anchorOrigin, transformOrigin: transformOrigin, children: _jsx(Box, { sx: { p: disablePadding ? 0 : 2, maxWidth: 300 }, children: children }) })] }));
};
export default PopoverComponent;
