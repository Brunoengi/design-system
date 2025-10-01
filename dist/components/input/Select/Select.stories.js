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
import { useState } from "react";
import Select, { isOptionGroup, } from "./Select";
var simpleOptions = [
    { value: "500", label: "500 (CA-50)" },
    { value: "600", label: "600 (CA-60)" },
    { value: "disabled", label: "Opção Desabilitada", disabled: true },
];
var groupedOptions = [
    {
        label: "Frutas",
        options: [
            { value: "apple", label: "Maçã" },
            { value: "banana", label: "Banana" },
        ],
    },
    {
        label: "Vegetais",
        options: [
            { value: "carrot", label: "Cenoura" },
            { value: "broccoli", label: "Brócolis", disabled: true },
        ],
    },
    { value: "other", label: "Outro" },
];
var meta = {
    title: "Input/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        label: { control: "text" },
        disabled: { control: "boolean" },
        error: { control: "boolean" },
        helperText: { control: "text" },
        fullWidth: { control: "boolean" },
        variant: {
            options: ["outlined", "filled", "standard"],
            control: { type: "select" },
        },
        size: {
            options: ["small", "medium"],
            control: { type: "radio" },
        },
        value: { control: false },
        onChange: { control: false },
        options: { control: false },
    },
    args: {
        label: "Categoria",
        disabled: false,
        error: false,
        fullWidth: true,
        variant: "outlined",
        size: "medium",
    },
};
export default meta;
var SelectTemplate = function (args) {
    var _a;
    // Garante que o valor inicial seja uma das opções válidas
    var initialValue = args.value ||
        ((_a = args.options.find(function (o) { return !isOptionGroup(o) && !o.disabled; })) === null || _a === void 0 ? void 0 : _a.value) ||
        "";
    var _b = useState(initialValue), value = _b[0], setValue = _b[1];
    var handleChange = function (event) {
        setValue(event.target.value);
    };
    return (_jsx("div", { style: { width: "320px" }, children: _jsx(Select, __assign({}, args, { value: value, onChange: handleChange })) }));
};
export var Default = {
    name: "Padrão com Opções Simples",
    args: {
        options: simpleOptions,
        id: "simple-select",
    },
    render: SelectTemplate,
};
export var WithOptgroup = {
    name: "Com Grupos (optgroup)",
    args: {
        label: "Comida",
        options: groupedOptions,
        id: "grouped-select",
    },
    render: SelectTemplate,
};
export var WithError = {
    name: "Com Erro",
    args: {
        options: simpleOptions,
        id: "error-select",
        error: true,
        helperText: "Este campo é obrigatório.",
    },
    render: SelectTemplate,
};
export var Disabled = {
    name: "Desabilitado",
    args: {
        options: simpleOptions,
        id: "disabled-select",
        disabled: true,
        label: "Campo Desabilitado",
    },
    render: SelectTemplate,
};
