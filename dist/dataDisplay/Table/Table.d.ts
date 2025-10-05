import { Key } from 'react';
type RowData = {
    id?: Key;
} & Record<string, any>;
export interface HeadCell {
    id: string;
    label: string;
    numeric?: boolean;
    disablePadding?: boolean;
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
export declare function Table({ columns, data, emptyMessage, size, striped, stickyHeader, initialRowsPerPage, showPaginationOnSinglePage, }: TableProps): import("react/jsx-runtime").JSX.Element;
export default Table;
