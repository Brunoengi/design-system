import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Table, HeadCell } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Data Display/Table',
  component: Table,
  argTypes: {
    emptyMessage: { control: 'text' },
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
    striped: { control: 'boolean' },
    stickyHeader: { control: 'boolean' },
    initialRowsPerPage: {
      options: [5, 10, 25],
      control: { type: 'select' },
    },
    showPaginationOnSinglePage: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Table>;

const columns: HeadCell[] = [
  { id: 'name', label: 'Name', numeric: false },
  { id: 'age', label: 'Age', numeric: true },
  { id: 'city', label: 'City', numeric: false },
];

const columnsWithId: HeadCell[] = [
  { id: 'id', label: 'ID', numeric: true },
  { id: 'name', label: 'Name', numeric: false },
  { id: 'age', label: 'Age', numeric: true },
  { id: 'city', label: 'City', numeric: false },
];

const data = [
  { name: 'Ana', age: 28, city: 'São Paulo' },
  { name: 'Bruno', age: 32, city: 'Rio de Janeiro' },
  { name: 'Carlos', age: 25, city: 'Belo Horizonte' },
  { name: 'Daniela', age: 30, city: 'Curitiba' },
  { name: 'Eduardo', age: 45, city: 'Salvador' },
  { name: 'Fernanda', age: 22, city: 'Fortaleza' },
  { name: 'Gabriel', age: 35, city: 'Brasília' },
  { name: 'Heloisa', age: 29, city: 'Recife' },
  { name: 'Igor', age: 27, city: 'Manaus' },
  { name: 'Juliana', age: 38, city: 'Porto Alegre' },
];

const dataWithId = [
  { id: 1, name: 'Ana', age: 28, city: 'São Paulo' },
  { id: 2, name: 'Bruno', age: 32, city: 'Rio de Janeiro' },
  { id: 3, name: 'Carlos', age: 25, city: 'Belo Horizonte' },
  { id: 4, name: 'Daniela', age: 30, city: 'Curitiba' },
  { id: 5, name: 'Eduardo', age: 45, city: 'Salvador' },
  { id: 6, name: 'Fernanda', age: 22, city: 'Fortaleza' },
  { id: 7, name: 'Gabriel', age: 35, city: 'Brasília' },
  { id: 8, name: 'Heloisa', age: 29, city: 'Recife' },
  { id: 9, name: 'Igor', age: 27, city: 'Manaus' },
  { id: 10, name: 'Juliana', age: 38, city: 'Porto Alegre' },
  { id: 11, name: 'Lucas', age: 26, city: 'Goiânia' },
  { id: 12, name: 'Mariana', age: 31, city: 'Belém' },
  { id: 13, name: 'Newton', age: 41, city: 'São Luís' },
  { id: 14, name: 'Olivia', age: 24, city: 'Maceió' },
  { id: 15, name: 'Paulo', age: 33, city: 'Campo Grande' },
];

export const Default: Story = {
  args: {
    columns,
    data,
    initialRowsPerPage: 5,
  },
};

export const StripedAndSmall: Story = {
  args: {
    ...Default.args,
    striped: true,
    size: 'small',
  },
};

export const StickyHeader: Story = {
  args: {
    ...Default.args,
    stickyHeader: true,
  },
  decorators: [(Story) => React.createElement('div', { style: { height: '300px' } }, React.createElement(Story))],
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    initialRowsPerPage: 5,
    emptyMessage: 'Nenhum registro encontrado!',
  },
};

export const WithIdColumn: Story = {
  name: 'Com Coluna de ID',
  args: {
    columns: columnsWithId,
    data: dataWithId,
    initialRowsPerPage: 5,
    striped: true,
  },
};

export const WithoutPagination: Story = {
  name: 'Sem Paginação',
  args: {
    columns: columnsWithId,
    data: dataWithId,
  },
};

export const SinglePageWithPaginationShown: Story = {
  name: 'Página Única com Paginação Visível',
  args: {
    ...Default.args,
    data: data.slice(0, 4), // Menos itens que rowsPerPage
    initialRowsPerPage: 5,
    showPaginationOnSinglePage: true,
  },
};