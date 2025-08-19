import React, {PropsWithChildren} from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Chart, { ChartProps } from './Chart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  BubbleController,
  DoughnutController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  BarController,
  LineController,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// Register all required elements and controllers for all chart types
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  BubbleController,
  DoughnutController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  BarController,
  LineController,
  Tooltip,
  Legend,
  Title
);

function ChartWrapper({ children }: PropsWithChildren) {
  return (
    <div style={{ width: 600, height: 600, margin: "0 auto" }}>
      {children}
    </div>
  );
}


const meta: Meta<typeof Chart> = {
  title: 'Design System/Atoms/Chart',
  component: Chart,
  argTypes: {
    type: { control: 'select', options: ['bar', 'line', 'pie', 'doughnut', 'polarArea', 'radar', 'scatter', 'bubble'] },
    data: { control: 'object' },
    options: { control: 'object' },
  },
};
export default meta;

type Story = StoryObj<ChartProps>;

export const BarChart: Story = {
  args: {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'Votes',
          data: [12, 19, 3],
          backgroundColor: ['#f87171', '#60a5fa', '#fbbf24'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: 'Bar Chart' } },
    },
  },
  render: (args) => (
    <ChartWrapper>
      <Chart {...args} />
    </ChartWrapper>
  ),
};

export const LineChart: Story = {
  args: {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      datasets: [
        {
          label: 'Sales',
          data: [33, 53, 85, 41],
          borderColor: '#60a5fa',
          backgroundColor: 'rgba(96,165,250,0.2)',
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: 'Line Chart' } },
    },
  },
  render: (args) => (
    <ChartWrapper>
      <Chart {...args} />
    </ChartWrapper>
  ),
};

export const AreaChart: Story = {
  args: {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Revenue',
          data: [400, 600, 800, 700],
          fill: true,
          borderColor: '#34d399',
          backgroundColor: 'rgba(52,211,153,0.2)',
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: 'Area Chart' } },
    },
  },
  render: (args) => (
    <ChartWrapper>
      <Chart {...args} />
    </ChartWrapper>
  ),
};

export const BubbleChart: Story = {
  args: {
    type: 'bubble',
    data: {
      datasets: [
        {
          label: 'Bubbles',
          data: [
            { x: 20, y: 30, r: 15 },
            { x: 40, y: 10, r: 10 },
            { x: 25, y: 50, r: 20 },
          ],
          backgroundColor: ['#f87171', '#60a5fa', '#fbbf24'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: 'Bubble Chart' } },
    },
  },
  render: (args) => (
    <ChartWrapper>
      <Chart {...args} />
    </ChartWrapper>
  ),
};

export const DoughnutChart: Story = {
  args: {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'Population',
          data: [300, 50, 100],
          backgroundColor: ['#f87171', '#60a5fa', '#fbbf24'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: 'Doughnut Chart' } },
      cutout: '70%',
    },
  },
  render: (args) => (
    <ChartWrapper>
      <Chart {...args} />
    </ChartWrapper>
  ),
};

export const PieChart: Story = {
  args: {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'Population',
          data: [120, 90, 60],
          backgroundColor: ['#f87171', '#60a5fa', '#fbbf24'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: 'Pie Chart' } },
    },
  },
  render: (args) => (
    <ChartWrapper>
      <Chart {...args} />
    </ChartWrapper>
  ),
};

export const PolarAreaChart: Story = {
  args: {
    type: 'polarArea',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green'],
      datasets: [
        {
          label: 'Polar Area',
          data: [11, 16, 7, 3],
          backgroundColor: ['#f87171', '#60a5fa', '#fbbf24', '#34d399'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: 'Polar Area Chart' } },
    },
  },
  render: (args) => (
    <ChartWrapper>
      <Chart {...args} />
    </ChartWrapper>
  ),
};

export const RadarChart: Story = {
  args: {
    type: 'radar',
    data: {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          label: 'Person A',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(96,165,250,0.2)',
          borderColor: '#60a5fa',
          pointBackgroundColor: '#60a5fa',
        },
        {
          label: 'Person B',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(251,191,36,0.2)',
          borderColor: '#fbbf24',
          pointBackgroundColor: '#fbbf24',
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: 'Radar Chart' } },
    },
  },
  render: (args) => (
    <ChartWrapper>
      <Chart {...args} />
    </ChartWrapper>
  ),
};

export const ScatterChart: Story = {
  args: {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Scatter Dataset',
          data: [
            { x: -10, y: 0 },
            { x: 0, y: 10 },
            { x: 10, y: 5 },
            { x: 0.5, y: 5.5 },
          ],
          backgroundColor: '#60a5fa',
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { title: { display: true, text: 'Scatter Chart' } },
      scales: {
        x: { type: 'linear', position: 'bottom' },
      },
    },
  },
  render: (args) => (
    <ChartWrapper>
      <Chart {...args} />
    </ChartWrapper>
  ),
};