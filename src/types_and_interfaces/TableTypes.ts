export type User = {
  user_id: number;
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  role: string;
};

export type TableData = User[];

// export type TableData = {
//   [key: string]: User;

// };

export type TableProps = {
  data: User[];
};
