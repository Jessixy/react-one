import { useState } from "react";
import {
  User,
  useAddUser,
  useDeleteUser,
  useUpdateUser,
  useUsers,
} from "../../hooks/http/http-users";
import { UserTable } from "../components/user-table/UserTable";
import ModalOne from "../../teststation/components/modal/ModalOne";
import TableUserForm from "../components/user-table-form/TableUserForm";

export type UserAction = "NEW" | "UPDATE";

const UsersTablePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userAction, setUserAction] = useState<UserAction>("NEW");
  const [user, setUser] = useState<null | User>(null);
  const { users } = useUsers();
  const { addUser } = useAddUser();
  const { deleteUser } = useDeleteUser();
  const { updateUser } = useUpdateUser();

  const openUserForm = (user: User | null, userAction: UserAction) => {
    setUserAction(userAction);
    setUser(user);
    setIsOpen(true);
  };

  const onDeleteUser = (user: User) => {
    console.log(`Lösche Benutzer mit ID ${user.user_id}`);
    if (user && user.user_id) {
      deleteUser(user.user_id);
    }
  };

  const handleSubmit = (user: User) => {
    console.log("Submit Action", user, userAction);
    if (userAction === "NEW" && user) {
      addUser(user);
    }
    if (userAction === "UPDATE" && user) {
      setUser(user);
      updateUser(user);
    }
  };

  return (
    <div className="w-full">
      <div className="p-4">
        <div className="py-4">
          <button
            className="bg-blue-100 rounded-md p-2"
            onClick={() => openUserForm(null, "NEW")}
          >
            ADD User
          </button>
        </div>
        <UserTable
          users={users}
          onDeleteUser={(user: User) => {
            onDeleteUser(user);
          }}
          onUpdateUser={(user: User) => openUserForm(user, "UPDATE")}
        />
        <ModalOne open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="mt-2 px-2">
            <TableUserForm
              onSubmit={(user: User) => handleSubmit(user)}
              onClose={(isOpen: boolean) => setIsOpen(isOpen)}
              user={user}
            />
          </div>
        </ModalOne>
      </div>
    </div>
  );
};

export default UsersTablePage;
