import { useState, useEffect } from "react";

export type User = {
  user_id: number;
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  role: string;
};

export const useUsers = (): User[] => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:3000/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return users;
};

export const useDeleteUser = (id: number | null) => {
  const deleteUser = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
    } catch (error) {}
  };

  return { deleteUser };
};
