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
import { forwardRef } from "react";
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, ListSubheader, FormHelperText, } from "@mui/material";
// Função para verificar se um item é um grupo de opções
export function isOptionGroup(option) {
    return "options" in option;
}
var Select = forwardRef(function (_a, ref) {
    var label = _a.label, options = _a.options, value = _a.value, onChange = _a.onChange, name = _a.name, id = _a.id, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.error, error = _c === void 0 ? false : _c, helperText = _a.helperText, _d = _a.fullWidth, fullWidth = _d === void 0 ? true : _d, _e = _a.variant, variant = _e === void 0 ? "outlined" : _e, _f = _a.size, size = _f === void 0 ? "medium" : _f, className = _a.className, sx = _a.sx, renderOption = _a.renderOption;
    var labelId = label ? "".concat(id, "-label") : undefined;
    var renderOptions = function () {
        var elements = [];
        options.forEach(function (item, index) {
            if (isOptionGroup(item)) {
                elements.push(_jsx(ListSubheader, { children: item.label }, "".concat(item.label, "-").concat(index)));
                item.options.forEach(function (option) {
                    var props = {
                        key: option.value,
                        value: option.value,
                        disabled: option.disabled,
                    };
                    if (renderOption) {
                        elements.push(renderOption(props, option));
                    }
                    else {
                        elements.push(_jsx(MenuItem, __assign({}, props, { children: option.label })));
                    }
                });
            }
            else {
                var option = item;
                var props = {
                    key: option.value,
                    value: option.value,
                    disabled: option.disabled,
                };
                if (renderOption) {
                    // Passa as props do MenuItem e o objeto da opção para a função customizada
                    elements.push(renderOption(props, option));
                }
                else {
                    elements.push(_jsx(MenuItem, __assign({}, props, { children: option.label })));
                }
            }
        });
        return elements;
    };
    return (_jsxs(FormControl, { variant: variant, fullWidth: fullWidth, disabled: disabled, error: error, size: size, className: className, sx: sx, ref: ref, children: [label && _jsx(InputLabel, { id: labelId, children: label }), _jsx(MuiSelect, { labelId: labelId, id: id, name: name, value: value, onChange: onChange, label: label, children: renderOptions() }), helperText && _jsx(FormHelperText, { children: helperText })] }));
});
Select.displayName = "Select";
export default Select;
