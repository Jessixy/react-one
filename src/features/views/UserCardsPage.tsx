import { User, useUsers } from "../../hooks/http/http-users";
import UserCard from "../components/user-cards/UserCard";

export const UserCardsPage = () => {
  const users = useUsers();

  return (
    <div
      className={`w-full grid grid-cols-5 md:grid-cols-${users.length} gap-4`}
    >
      {users.map((user: User) => (
        <UserCard key={user.user_id} user={user} />
      ))}
    </div>
  );
};
