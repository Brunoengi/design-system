import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { Box, Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Paper, } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) { // A comparação aqui pode ser aprimorada para lidar com diferentes tipos de dados
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
function getComparator(order, orderBy) {
    return order === 'desc'
        ? function (a, b) { return descendingComparator(a, b, orderBy); }
        : function (a, b) { return -descendingComparator(a, b, orderBy); };
}
function stableSort(array, comparator) {
    var stabilizedThis = array.map(function (el, index) { return [el, index]; });
    stabilizedThis.sort(function (a, b) {
        var order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map(function (el) { return el[0]; });
}
function EnhancedTableHead(props) {
    var order = props.order, orderBy = props.orderBy, onRequestSort = props.onRequestSort, columns = props.columns;
    var createSortHandler = function (property) { return function (event) {
        onRequestSort(event, property);
    }; };
    return (_jsx(TableHead, { children: _jsx(TableRow, { children: columns.map(function (headCell) { return (_jsx(TableCell, { align: headCell.numeric ? 'right' : 'left', padding: headCell.disablePadding ? 'none' : 'normal', sortDirection: orderBy === headCell.id ? order : false, children: _jsxs(TableSortLabel, { active: orderBy === headCell.id, direction: orderBy === headCell.id ? order : 'asc', onClick: createSortHandler(headCell.id), children: [headCell.label, orderBy === headCell.id ? (_jsx(Box, { component: "span", sx: visuallyHidden, children: order === 'desc' ? 'sorted descending' : 'sorted ascending' })) : null] }) }, headCell.id)); }) }) }));
}
export function Table(_a) {
    var _b;
    var columns = _a.columns, data = _a.data, _c = _a.emptyMessage, emptyMessage = _c === void 0 ? 'No data available' : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, _e = _a.striped, striped = _e === void 0 ? false : _e, _f = _a.stickyHeader, stickyHeader = _f === void 0 ? false : _f, _g = _a.initialRowsPerPage, initialRowsPerPage = _g === void 0 ? 5 : _g;
    var _h = useState('asc'), order = _h[0], setOrder = _h[1];
    var _j = useState(((_b = columns[0]) === null || _b === void 0 ? void 0 : _b.id) || ''), orderBy = _j[0], setOrderBy = _j[1];
    var _k = useState(0), page = _k[0], setPage = _k[1];
    var _l = useState(initialRowsPerPage), rowsPerPage = _l[0], setRowsPerPage = _l[1];
    var handleRequestSort = function (event, property) {
        var isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    var handleChangePage = function (event, newPage) {
        setPage(newPage);
    };
    var handleChangeRowsPerPage = function (event) {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    var visibleRows = useMemo(function () {
        return stableSort(data, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    }, [data, order, orderBy, page, rowsPerPage]);
    return (_jsxs(Paper, { sx: { width: '100%', overflow: 'hidden' }, children: [_jsx(TableContainer, { children: _jsxs(MuiTable, { stickyHeader: stickyHeader, size: size, children: [_jsx(EnhancedTableHead, { order: order, orderBy: orderBy, onRequestSort: handleRequestSort, columns: columns }), _jsx(TableBody, { children: visibleRows.length > 0 ? (visibleRows.map(function (row, index) {
                                var _a;
                                return (_jsx(TableRow, { hover: true, sx: striped
                                        ? { '&:nth-of-type(odd)': { backgroundColor: 'action.hover' } }
                                        : {}, children: columns.map(function (col) { return (_jsx(TableCell, { align: col.numeric ? 'right' : 'left', children: row[col.id] }, col.id)); }) }, (_a = row.id) !== null && _a !== void 0 ? _a : index));
                            })) : (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: columns.length, align: "center", children: emptyMessage }) })) })] }) }), _jsx(TablePagination, { rowsPerPageOptions: [5, 10, 25], component: "div", count: data.length, rowsPerPage: rowsPerPage, page: page, onPageChange: handleChangePage, onRowsPerPageChange: handleChangeRowsPerPage })] }));
}
export default Table;
