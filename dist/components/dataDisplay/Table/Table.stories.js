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
import React from 'react';
import { Table } from './Table';
var meta = {
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
    },
};
export default meta;
var columns = [
    { id: 'name', label: 'Name', numeric: false },
    { id: 'age', label: 'Age', numeric: true },
    { id: 'city', label: 'City', numeric: false },
];
var columnsWithId = [
    { id: 'id', label: 'ID', numeric: true },
    { id: 'name', label: 'Name', numeric: false },
    { id: 'age', label: 'Age', numeric: true },
    { id: 'city', label: 'City', numeric: false },
];
var data = [
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
var dataWithId = [
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
export var Default = {
    args: {
        columns: columns,
        data: data,
        initialRowsPerPage: 5,
    },
};
export var StripedAndSmall = {
    args: __assign(__assign({}, Default.args), { striped: true, size: 'small' }),
};
export var StickyHeader = {
    args: __assign(__assign({}, Default.args), { stickyHeader: true }),
    decorators: [function (Story) { return React.createElement('div', { style: { height: '300px' } }, React.createElement(Story)); }],
};
export var Empty = {
    args: {
        columns: columns,
        data: [],
        emptyMessage: 'Nenhum registro encontrado!',
    },
};
export var WithIdColumn = {
    name: 'Com Coluna de ID',
    args: {
        columns: columnsWithId,
        data: dataWithId,
        initialRowsPerPage: 5,
        striped: true,
    },
};
