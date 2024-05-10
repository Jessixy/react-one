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

export const useUserById = (id: number | string | null) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      if (id !== null) {
        try {
          const response = await fetch(`http://localhost:3000/users/${id}`);
          const data = await response.json();
          setUser(data);
        } catch (error: any) {
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUser();
  }, [id]);

  return { user, loading, error };
};
