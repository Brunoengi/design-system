import React from 'react';
import {
  Bar,
  Line,
  Pie,
  Doughnut,
  PolarArea,
  Radar,
  Scatter,
  Bubble,
} from 'react-chartjs-2';

export type ChartType =
  | 'bar'
  | 'line'
  | 'pie'
  | 'doughnut'
  | 'polarArea'
  | 'radar'
  | 'scatter'
  | 'bubble';

export type ChartProps = {
  type: ChartType;
  data: any;
  options?: any;
  width?: number;
  height?: number;
};

const Chart: React.FC<ChartProps> = ({ type, data, options, width, height }) => {
  switch (type) {
    case 'bar':
      return <Bar data={data} options={options} />;
    case 'line':
      return <Line data={data} options={options} />;
    case 'pie':
      return <Pie data={data} options={options} />;
    case 'doughnut':
      return <Doughnut data={data} options={options} />;
    case 'polarArea':
      return <PolarArea data={data} options={options} />;
    case 'radar':
      return <Radar data={data} options={options} />;
    case 'scatter':
      return <Scatter data={data} options={options} />;
    case 'bubble':
      return <Bubble data={data} options={options} />;
    default:
      return null;
  }
};

export default Chart;