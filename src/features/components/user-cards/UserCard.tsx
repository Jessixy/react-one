import { User } from "../../../hooks/http/http-users";

export type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {
  console.log(user);
  return (
    <div className="bg-slate-200 rounded-lg p-4">
      <span>
        {user.firstname} {user.lastname}
      </span>
      <p>Alter: {user.age}</p>
      <p>E-Mail: {user.email}</p>
      <p>
        Berechtigung:{" "}
        <span className="text-gray-400 text-xss"> {user.role}</span>
      </p>
    </div>
  );
};

export default UserCard;
