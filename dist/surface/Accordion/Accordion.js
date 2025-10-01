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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
/**
 * O componente Accordion permite ao usuário mostrar e esconder seções de conteúdo.
 * É construído utilizando o Accordion do Material-UI.
 */
var Accordion = function (_a) {
    var allContent = _a.allContent, className = _a.className, _b = _a.expandIcon, expandIcon = _b === void 0 ? _jsx(ExpandMoreIcon, {}) : _b, _c = _a.allowMultiple, allowMultiple = _c === void 0 ? true : _c, rest = __rest(_a, ["allContent", "className", "expandIcon", "allowMultiple"]);
    var _d = React.useState(false), expanded = _d[0], setExpanded = _d[1];
    var handleChange = function (panel) { return function (event, isExpanded) {
        setExpanded(isExpanded ? panel : false);
    }; };
    return (_jsx("div", __assign({ className: className }, rest, { children: allContent.map(function (oneContent, index) {
            var panelId = "panel".concat(index);
            // Controla o estado apenas se `allowMultiple` for falso
            var controlledProps = allowMultiple
                ? {}
                : {
                    expanded: expanded === panelId,
                    onChange: handleChange(panelId),
                };
            return (_jsxs(MuiAccordion, __assign({ disabled: oneContent.disabled }, controlledProps, { children: [_jsx(AccordionSummary, { expandIcon: expandIcon, "aria-controls": "".concat(panelId, "-content"), id: "".concat(panelId, "-header"), children: oneContent.title }), _jsx(AccordionDetails, { children: oneContent.content })] }), panelId));
        }) })));
};
export default Accordion;
