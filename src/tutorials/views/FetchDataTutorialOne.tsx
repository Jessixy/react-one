import { useEffect, useRef, useState } from "react";
import { User } from "../../hooks/http/http-users";

/**
 * youtube: https://www.youtube.com/watch?v=00lxm_doFYw&t=125s
 * github: https://github.com/cosdensolutions/code/tree/master/videos/long/data-fetching-complete-tutorial
 */

const BASE_URL = "http://localhost:3000";

export const FetchDataTutorialOne = () => {
  const [users, setUsers] = useState<User[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [page, setPage] = useState(0);

  // AborController is a defautl JS Type
  const abortControllerRef = useRef<AbortController | null>();

  useEffect(() => {
    const fetchUsers = async () => {
      // Falls gerade ein Request ausgeführt wird, wird dieser abgebrochen
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();
      setIsLoading(true);

      try {
        //const response = await fetch(`${BASE_URL}/users`);
        const response = await fetch(`${BASE_URL}/users?page=${page}`, {
          signal: abortControllerRef.current?.signal,
        });
        const users = (await response.json()) as User[];
        setUsers(users);
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, [page]);

  //   if (isLoading) {
  //     return <p>Data is Loading</p>;
  //   }

  if (error) {
    return <p>Someting went wrong</p>;
  }

  return (
    <div>
      <p className="underline hover:text-purple-700">Fetching Data in React</p>

      <button
        className="m-2 border border-gray rounded"
        onClick={() => setPage(page + 1)}
      >
        Increase Page{page}
      </button>
      {isLoading && <p>...Is Loading</p>}
      {!isLoading && (
        <ul>
          {users.map((user) => (
            <li key={user.user_id}>
              {user.firstname} {user.lastname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
