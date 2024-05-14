import { useState, useEffect } from "react";

export type User = {
  user_id?: number;
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  role: string;
};

export const useUsers = (): User[] => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = (await response.json()) as User[];
      setUsers(data);
    } catch (e: unknown) {
      console.error("Error fetching users:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return users;
};

// UPDATE User

// ADD User
export const useAddUser = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = async (user: User) => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (response.ok) {
        setUsers([...users, data]);
      } else {
        throw new Error(data.message || "Failed to add user");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error adding user:", error.message);
      } else {
        console.error("Error adding user:", String(error));
      }
    }
  };

  return { addUser, Error };
};

// DELETE User
export const useDeleteUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const deleteUser = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error("Failed to delete user");
      }
    } catch (error) {}
  };

  return { deleteUser, Error };
};
