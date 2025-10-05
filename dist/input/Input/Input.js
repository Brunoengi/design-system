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
import { forwardRef } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { useTheme } from '@mui/material';
/**
 * O componente Input é uma abstração sobre o TextField do Material-UI,
 * com melhorias para inputs numéricos e fácil adição de prefixos/sufixos.
 */
var Input = forwardRef(function (_a, ref) {
    var type = _a.type, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, onChange = _a.onChange, inputProps = _a.inputProps, size = _a.size, _b = _a.variant, variant = _b === void 0 ? 'outlined' : _b, borderRadius = _a.borderRadius, roundedCorners = _a.roundedCorners, borders = _a.borders, maxLength = _a.maxLength, sx = _a.sx, rest = __rest(_a, ["type", "startAdornment", "endAdornment", "onChange", "inputProps", "size", "variant", "borderRadius", "roundedCorners", "borders", "maxLength", "sx"]);
    var theme = useTheme();
    var handleNumericChange = function (e) {
        var value = e.target.value;
        // Remove todos os caracteres que não são dígitos, vírgulas ou pontos.
        var filteredValue = value.replace(/[^0-9,.]/g, '');
        // Encontra o primeiro separador decimal (vírgula ou ponto).
        var firstSeparatorIndex = filteredValue.search(/[,.]/);
        if (firstSeparatorIndex !== -1) {
            // Se um separador for encontrado, mantém a parte até ele (inclusive).
            var integerAndFirstSeparator = filteredValue.substring(0, firstSeparatorIndex + 1);
            // Pega o restante da string e remove quaisquer outros separadores.
            var fractionalPart = filteredValue.substring(firstSeparatorIndex + 1).replace(/[,.]/g, '');
            // Reconstrói o valor final.
            filteredValue = integerAndFirstSeparator + fractionalPart;
        }
        // Atualiza o valor do input no evento para o valor filtrado.
        // Isso garante que tanto componentes controlados quanto não controlados
        // reflitam apenas os caracteres válidos.
        e.target.value = filteredValue;
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    var isNumeric = type === 'number';
    var InputProps = {
        startAdornment: startAdornment ? (_jsx(InputAdornment, { position: "start", children: startAdornment })) : undefined,
        endAdornment: endAdornment ? (_jsx(InputAdornment, { position: "end", children: endAdornment })) : undefined,
    };
    var borderlessStyles = variant === 'borderless'
        ? {
            '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
            },
        }
        : {};
    var customBorderSx = {};
    var fieldsetSx = {};
    // Lógica para o raio da borda
    if (borderRadius) {
        var radiusValue = void 0;
        // Mapeia as opções de string para valores reais
        switch (borderRadius) {
            case 'none':
                radiusValue = 0;
                break;
            case 'sm':
                radiusValue = 2;
                break;
            case 'md':
                radiusValue = theme.shape.borderRadius; // ex: 4px
                break;
            case 'lg':
                var baseRadius = typeof theme.shape.borderRadius === 'string'
                    ? parseFloat(theme.shape.borderRadius)
                    : theme.shape.borderRadius;
                radiusValue = baseRadius * 2; // ex: 8px
                break;
            case 'full':
                radiusValue = 9999; // Formato "Pill"
                break;
            default:
                // Usa o valor customizado se for número ou string
                radiusValue = borderRadius;
        }
        var allCorners = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
        var cornersToRound = roundedCorners || allCorners;
        if (!roundedCorners) {
            fieldsetSx.borderRadius = radiusValue;
        }
        else {
            if (cornersToRound.includes('topLeft'))
                fieldsetSx.borderTopLeftRadius = radiusValue;
            if (cornersToRound.includes('topRight'))
                fieldsetSx.borderTopRightRadius = radiusValue;
            if (cornersToRound.includes('bottomLeft'))
                fieldsetSx.borderBottomLeftRadius = radiusValue;
            if (cornersToRound.includes('bottomRight'))
                fieldsetSx.borderBottomRightRadius = radiusValue;
        }
    }
    // Lógica para os lados da borda
    if (borders) {
        var allSides = ['top', 'right', 'bottom', 'left'];
        allSides.forEach(function (side) {
            var key = "border".concat(side.charAt(0).toUpperCase() + side.slice(1), "Width");
            if (!borders.includes(side)) {
                fieldsetSx[key] = 0;
            }
        });
    }
    if (Object.keys(fieldsetSx).length > 0) {
        var radiusStyles = __assign(__assign(__assign(__assign(__assign({}, (fieldsetSx.borderRadius && { borderRadius: fieldsetSx.borderRadius })), (fieldsetSx.borderTopLeftRadius && { borderTopLeftRadius: fieldsetSx.borderTopLeftRadius })), (fieldsetSx.borderTopRightRadius && { borderTopRightRadius: fieldsetSx.borderTopRightRadius })), (fieldsetSx.borderBottomLeftRadius && { borderBottomLeftRadius: fieldsetSx.borderBottomLeftRadius })), (fieldsetSx.borderBottomRightRadius && { borderBottomRightRadius: fieldsetSx.borderBottomRightRadius }));
        // Aplica o raio da borda ao contêiner raiz para cortar o conteúdo interno
        customBorderSx['& .MuiOutlinedInput-root'] = __assign({}, radiusStyles);
        // Aplica os estilos de borda e raio ao fieldset
        customBorderSx['& .MuiOutlinedInput-notchedOutline'] = __assign({}, fieldsetSx);
    }
    var widthStyle = {};
    if (maxLength) {
        // Ajusta a largura com base no maxLength.
        // A unidade 'ch' é aproximadamente a largura do caractere '0'.
        // Adicionamos +4ch para acomodar padding interno, adornos e um pequeno espaço extra.
        // Isso é mais eficaz para fontes monoespaçadas, mas funciona bem para números.
        widthStyle.minWidth = "".concat(maxLength + 4, "ch");
    }
    return (_jsx(TextField, __assign({ ref: ref, size: size, 
        // Se a variante for 'borderless', usamos 'outlined' como base e removemos sua borda via sx.
        // Caso contrário, usamos a variante fornecida.
        variant: variant === 'borderless' ? 'outlined' : variant, type: isNumeric ? 'text' : type, onChange: isNumeric ? handleNumericChange : onChange, 
        // A prop `inputProps` (com 'i' minúsculo) passa atributos para o elemento <input> nativo.
        inputProps: __assign(__assign({ maxLength: maxLength }, (isNumeric && { inputMode: 'decimal' })), inputProps), InputProps: InputProps, sx: __assign(__assign(__assign(__assign({}, borderlessStyles), customBorderSx), widthStyle), sx) }, rest)));
});
Input.displayName = 'Input';
export default Input;
