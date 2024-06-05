const BASE_URL = "http://localhost:3000";

// FETCH
const fetchUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);

  if (!response.ok) {
    throw new Error(`Failed to fetch posts. Status: ${response.status}`);
  }

  const userData = await response.json();
  return userData;
};

//ADD;
const addUser = async (user) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  return response.json();
};

//   const fetchTags = async () => {
//     const response = await fetch("http://localhost:3000/tags");
//     const tagsData = await response.json();
//     return tagsData;
//   };

//   const addPost = async (post) => {
//     const response = await fetch("http://localhost:3000/posts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(post),
//     });

//     return response.json();
//   };

export { fetchUsers, addUser };
