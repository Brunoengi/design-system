import { jsx as _jsx } from "react/jsx-runtime";
import { Bar, Line, Pie, Doughnut, PolarArea, Radar, Scatter, Bubble, } from 'react-chartjs-2';
var Chart = function (_a) {
    var type = _a.type, data = _a.data, options = _a.options, width = _a.width, height = _a.height;
    switch (type) {
        case 'bar':
            return _jsx(Bar, { data: data, options: options });
        case 'line':
            return _jsx(Line, { data: data, options: options });
        case 'pie':
            return _jsx(Pie, { data: data, options: options });
        case 'doughnut':
            return _jsx(Doughnut, { data: data, options: options });
        case 'polarArea':
            return _jsx(PolarArea, { data: data, options: options });
        case 'radar':
            return _jsx(Radar, { data: data, options: options });
        case 'scatter':
            return _jsx(Scatter, { data: data, options: options });
        case 'bubble':
            return _jsx(Bubble, { data: data, options: options });
        default:
            return null;
    }
};
export default Chart;
