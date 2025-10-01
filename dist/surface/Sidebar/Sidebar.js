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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Box } from '@mui/material';
var Header = function (_a) {
    var contentPaddingRight = _a.contentPaddingRight, sx = _a.sx, props = __rest(_a, ["contentPaddingRight", "sx"]);
    return (_jsx(Box, __assign({}, props, { sx: __spreadArray(__spreadArray([
            { py: 2, pl: 2, flexShrink: 0 }
        ], (Array.isArray(sx) ? sx : [sx]), true), [
            { pr: contentPaddingRight },
        ], false) })));
};
var Content = function (_a) {
    var contentPaddingRight = _a.contentPaddingRight, sx = _a.sx, props = __rest(_a, ["contentPaddingRight", "sx"]);
    return (_jsx(Box, __assign({}, props, { sx: __spreadArray(__spreadArray([
            { py: 2, pl: 2, flexGrow: 1, overflowY: 'auto' }
        ], (Array.isArray(sx) ? sx : [sx]), true), [
            { pr: contentPaddingRight },
        ], false) })));
};
var Footer = function (_a) {
    var contentPaddingRight = _a.contentPaddingRight, sx = _a.sx, props = __rest(_a, ["contentPaddingRight", "sx"]);
    return (_jsx(Box, __assign({}, props, { sx: __spreadArray(__spreadArray([
            {
                py: 2,
                pl: 2,
                flexShrink: 0,
            }
        ], (Array.isArray(sx) ? sx : [sx]), true), [
            { pr: contentPaddingRight },
        ], false) })));
};
var SidebarRoot = function (_a) {
    var _b = _a.contentPaddingRight, contentPaddingRight = _b === void 0 ? 2 : _b, sx = _a.sx, children = _a.children, props = __rest(_a, ["contentPaddingRight", "sx", "children"]);
    // Clona os filhos para injetar a prop `contentPadding`
    var childrenWithProps = React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                contentPaddingRight: contentPaddingRight,
            });
        }
        return child;
    });
    return (_jsx(Box, __assign({ component: "aside" }, props, { sx: __spreadArray([
            {
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                borderRight: 1,
                borderColor: 'divider',
                bgcolor: 'background.paper',
            }
        ], (Array.isArray(sx) ? sx : [sx]), true), children: childrenWithProps })));
};
var Sidebar = Object.assign(SidebarRoot, {
    Header: Header,
    Content: Content,
    Footer: Footer,
});
export default Sidebar;
