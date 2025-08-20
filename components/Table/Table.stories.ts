import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Design System/Molecules/Table',
  component: Table,
  argTypes: {
    maxRows: { control: { type: 'number', min: 1 } },
    emptyMessage: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

const columns = ['Name', 'Age', 'City'];
const data = [
  { Name: 'Ana', Age: 28, City: 'São Paulo' },
  { Name: 'Bruno', Age: 32, City: 'Rio de Janeiro' },
  { Name: 'Carlos', Age: 25, City: 'Belo Horizonte' },
  { Name: 'Daniela', Age: 30, City: 'Curitiba' },
];

export const Default: Story = {
  args: {
    columns,
    data,
  },
};

export const MaxRows2: Story = {
  args: {
    columns,
    data,
    maxRows: 2,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    emptyMessage: 'No records!',
  },
};