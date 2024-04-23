import { useReducer } from "react";
import { Blog } from "../teststation/components/forms/ModalForm";

// Definieren des Anfangszustands und des Reducers
const initialState: Blog = {
  id: 0,
  title: "",
  body: "",
  author: "mario",
};

function reducer(state: Blog, action: { type: string; payload: string }) {
  switch (action.type) {
    case "setTitle":
      return { ...state, title: action.payload };
    case "setBody":
      return { ...state, body: action.payload };
    case "setAuthor":
      return { ...state, author: action.payload };
    default:
      throw new Error();
  }
}

const useBlogFormReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setTitle = (title: string) =>
    dispatch({ type: "setTitle", payload: title });
  const setBody = (body: string) =>
    dispatch({ type: "setBody", payload: body });
  const setAuthor = (author: string) =>
    dispatch({ type: "setAuthor", payload: author });

  return { state, setTitle, setBody, setAuthor };
};

export default useBlogFormReducer;
