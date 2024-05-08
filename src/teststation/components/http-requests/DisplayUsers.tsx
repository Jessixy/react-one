
import { useUserById, useUsers } from "../../../hooks/http/http-users";
import { Table } from "../tables/Table";



export const DisplayUsers = () => {
  const users = useUsers();
  useUserById(null)
  console.log(users)
 

  const hello = () => { 
    console.log("Hello")
   }



    // useEffect(() => {
    //   fetchUsers();
    // }, []);
  
    // const fetchUsers = async () => {
    //   try {
    //     const response = await fetch('http://localhost:3000/users');
    //     const data = await response.json();
    //     setUsers(data);
    //     console.log(
            
    //     )
    //   } catch (error) {
    //     console.error('Error fetching users:', error);
    //   }
    // };

  return (
    <div>
        <ul>
        {users.map((user: any) => (
            <li key={user.user_id} onClick={hello}>
            {user.firstname}
            {user.lastname}
          </li>
        ))}
        </ul>
        <br />
        <Table data={users} />
      
    </div>
  )
}
