import { useState } from "react";
import { UserTable } from "../components/user-table/UserTable";
import { User } from "../../hooks/http/http-users";

const UsersTablePage = () => {
  const [user, setUser] = useState<User | null>(null);

  const testuser = {
    firstname: "Claudia",
    lastname: "Schröder",
    age: 38,
    email: "pinky-pills@arcor.de",
    role: "USER",
  };

  return (
    <div className="w-full">
      <div className="p-4">
        <button
          className="bg-gray-200 rounded-lg py-1 px-2"
          onClick={() => setUser(testuser)}
        >
          ADD USER
        </button>
      </div>
      <UserTable user={user} />
    </div>
  );
};

export default UsersTablePage;
