import React, { useState, useMemo, Key } from 'react';
import {
  Box,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Paper,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

// Tipagem para os dados da linha, garantindo que 'id' seja um tipo válido para a chave React.
type RowData = { id?: Key } & Record<string, any>;

function descendingComparator<T extends RowData>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) { // A comparação aqui pode ser aprimorada para lidar com diferentes tipos de dados
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<T extends RowData>(
  order: Order,
  orderBy: keyof T,
): (a: T, b: T) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// New prop types
export interface HeadCell {
  id: string;
  label: string;
  numeric?: boolean;
  disablePadding?: boolean;
}

interface EnhancedTableProps {
  columns: readonly HeadCell[];
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort, columns } = props;
  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {columns.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export type TableProps = {
  columns: readonly HeadCell[];
  data: readonly RowData[];
  emptyMessage?: string;
  size?: 'small' | 'medium';
  striped?: boolean;
  stickyHeader?: boolean;
  initialRowsPerPage?: 5 | 10 | 25;
  /**
   * Se `true`, exibe a paginação mesmo que todos os itens caibam em uma única página.
   */
  showPaginationOnSinglePage?: boolean;
};

export function Table({
  columns,
  data,
  emptyMessage = 'No data available',
  size = 'medium',
  striped = false,
  stickyHeader = false,
  initialRowsPerPage,
  showPaginationOnSinglePage = false,
}: TableProps) {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<string>(columns[0]?.id || '');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(initialRowsPerPage ?? data.length);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = useMemo(
    () => {
      const sortedData = stableSort(data, getComparator(order, orderBy));
      if (!initialRowsPerPage) return sortedData;
      return sortedData.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      );
    }, [data, order, orderBy, page, rowsPerPage, initialRowsPerPage],
  );

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <MuiTable stickyHeader={stickyHeader} size={size}>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            columns={columns}
          />
          <TableBody>
            {visibleRows.length > 0 ? (
              visibleRows.map((row, index) => (
                <TableRow
                  key={row.id ?? index} // Agora 'row.id' tem o tipo correto (Key)
                  hover
                  sx={
                    striped
                      ? { '&:nth-of-type(odd)': { backgroundColor: 'action.hover' } }
                      : {}
                  }
                >
                  {columns.map((col) => (
                    <TableCell key={col.id} align={col.numeric ? 'right' : 'left'}>
                      {row[col.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </MuiTable>
      </TableContainer>
      {initialRowsPerPage && (data.length > rowsPerPage || showPaginationOnSinglePage) && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
}

export default Table;
