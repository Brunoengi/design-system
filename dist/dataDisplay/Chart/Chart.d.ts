import React from 'react';
export type ChartType = 'bar' | 'line' | 'pie' | 'doughnut' | 'polarArea' | 'radar' | 'scatter' | 'bubble';
export type ChartProps = {
    type: ChartType;
    data: any;
    options?: any;
    width?: number;
    height?: number;
};
declare const Chart: React.FC<ChartProps>;
export default Chart;
