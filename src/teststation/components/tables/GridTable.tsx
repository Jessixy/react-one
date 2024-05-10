import { User } from "../../../hooks/http/http-users";
import { TableProps } from "../../../types_and_interfaces/TableTypes";

export const GridTable = ({ data }: TableProps) => {
  const columns = Object.keys(data[0] || {}).filter((key) => key !== "user_id");

  return (
    <div
      className={`grid grid-cols-${columns.length} grid-rows-${data.length} gap-4`}
    >
      {columns.map((col) => {
        return (
          <div>
            <div>{col.toUpperCase()}</div>
            {data.map((row) => {
              return <div>{row[col as keyof User]}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};
