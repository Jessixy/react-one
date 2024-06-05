import { useMutation, useQuery } from "@tanstack/react-query";
import { addUser, fetchUsers } from "./api";
import { User } from "../../../hooks/http/http-users";

const ReactQueryOne = () => {
  /**
   *  Options: https://tanstack.com/query/latest/docs/framework/react/reference/useQuery#usequery
   */
  const { data, isLoading, status, error, isError, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  console.log(data, isLoading, status, isError);

  return (
    <div>
      <h1>React Query Tutorial</h1>
      <h3 className="underline mt-4">Fetch Users</h3>
      <div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>{error?.message}</p>}
        {!isLoading && !isError && (
          <ul>
            {data?.map((user: User) => (
              <li key={user.user_id}>
                {user.firstname} {user.lastname}
              </li>
            ))}
          </ul>
        )}
      </div>
      <ReactQueryTwo />
    </div>
  );
};

export default ReactQueryOne;

//----------------------------------------------------------------------

export const ReactQueryTwo = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const {
    mutate,
    isError: isPostError,
    isPending,
    error: postError,
    reset,
  } = useMutation({
    mutationFn: addUser,
  });

  return (
    <div>
      <h3 className="underline mt-4">Add User</h3>
      <form action="">
        <input
          type="text"
          placeholder="Enter Firstname"
          name="firstname"
          className="border border-gray-500 rounded mx-3"
        />
        <input
          type="text"
          placeholder="Enter Lastname"
          name="lastname"
          className="border border-gray-500 rounded mx-3"
        />
        <input
          type="number"
          placeholder="Enter Age"
          name="age"
          className="border border-gray-500 rounded mx-3"
        />
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          className="border border-gray-500 rounded mx-3"
        />
      </form>
    </div>
  );
};
