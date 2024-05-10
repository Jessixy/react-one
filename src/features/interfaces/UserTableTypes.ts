import { User } from "../../hooks/http/http-users";

export type TableData = {
  [key: string]: User;
};

export type TableProps = {
  data: User[];
};

export type TableRowProps = {
  row: User;
  columns: string[];
  rowIndex: number;
};

export type TableColumnProps = {
  row: User;
  column: string;
};
