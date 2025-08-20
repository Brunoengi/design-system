import React from 'react';
import {
  tableVariant,
  theadVariant,
  thVariant,
  trVariant,
  tdVariant,
} from './Table.style';

export type TableProps = {
  columns: string[];
  data: Array<Record<string, React.ReactNode>>;
  maxRows?: number;
  emptyMessage?: string;
  size?: 'sm' | 'md' | 'lg';
  striped?: boolean;
  stickyHeader?: boolean;
}

export function Table({
  columns,
  data,
  maxRows,
  emptyMessage = 'No data available',
  size = 'md',
  striped = false,
  stickyHeader = false,
}: TableProps) {
  const rows = maxRows ? data.slice(0, maxRows) : data;

  return (
    <div className="overflow-x-auto">
      <table className={tableVariant({ size, striped })}>
        <thead className={theadVariant({ sticky: stickyHeader })}>
          <tr>
            {columns.map((col) => (
              <th key={col} className={thVariant()}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-4 text-center text-gray-500">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            rows.map((row, idx) => (
              <tr key={idx} className={trVariant({ striped })}>
                {columns.map((col) => (
                  <td key={col} className={tdVariant()}>
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;