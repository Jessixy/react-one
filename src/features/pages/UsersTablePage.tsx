import { useState } from "react";
import { User } from "../../hooks/http/http-users";
import NewUserForm from "../components/newUserForm";
import { UserTable } from "../components/user-table/UserTable";
import ModalOne from "../../teststation/components/modal/ModalOne";

const UsersTablePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="p-4">
        <button
          className="bg-gray-200 rounded-lg py-1 px-2"
          onClick={() => setIsOpen(true)}
        >
          ADD USER
        </button>
      </div>
      <div></div>
      <UserTable user={user} />
      <ModalOne open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="mt-2 px-2">
          <NewUserForm
            onSubmit={(user: User) => setUser(user)}
            onClose={(isOpen: boolean) => setIsOpen(isOpen)}
          />
        </div>
      </ModalOne>
    </div>
  );
};

export default UsersTablePage;
