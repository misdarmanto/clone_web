import React from "react";
import clsx from "clsx";
import emptyIcon from "../../assets/empty.webp";

export interface TableColumn<T> {
  key: keyof T;
  title: React.ReactNode | string;
  render?: (item: T) => React.ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  emptyMessage?: string;
  onRowClick?: (item: T) => void;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

const Table = <T extends object>({
  data,
  columns,
  loading = false,
  emptyMessage = "Data tidak tersedia",
  className,
}: TableProps<T>) => {
  if (loading) {
    return (
      <div className="flex min-h-[200px] w-full border-collapse flex-col items-center justify-center p-5 text-center text-gray-600">
        Loading...
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="text-center py-20">
        <img src={emptyIcon} alt="Empty box" className="mx-auto mb-4 w-24" />
        <p className="text-lg font-semibold text-gray-600">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={clsx("w-full overflow-x-auto ", className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((column, index) => (
              <th
                key={`th-${String(column.key)}`}
                className={clsx(
                  "px-6 py-2 text-left text-h6",
                  index === 0 && "rounded-tl-lg",
                  index === columns.length - 1 && "rounded-tr-lg"
                )}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={`tr-${String(item[columns[0].key])}-${index}`}>
              {columns.map((column) => {
                return (
                  <td
                    key={`td-${String(column.key)}`}
                    className="px-6 py-3 text-p"
                  >
                    {column.render
                      ? column.render({ ...item, index })
                      : String(item[column.key])}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
