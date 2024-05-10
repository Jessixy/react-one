import { User } from "../hooks/http/http-users";

export type TableData = {
  [key: string]: User;
};

export type TableProps = {
  data: User[];
};
