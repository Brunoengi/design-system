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
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Typography as MuiTypography, } from "@mui/material";
var Typography = React.forwardRef(function (props, ref) {
    return _jsx(MuiTypography, __assign({ ref: ref }, props));
});
Typography.displayName = "Typography";
export default Typography;
