import { usePortalOverlayContext } from "../../../context/portal-overlay-context";
import useBlogFormReducher from "../../../hooks/useBlogFormReducer";

export type Blog = {
  id?: number;
  title: string;
  body: string;
  author: string;
};

const ModalForm = () => {
  const { state, setTitle, setBody, setAuthor } = useBlogFormReducher();
  const { addBlog, onClose } = usePortalOverlayContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addBlogPost();
    resetForm();
  };

  const addBlogPost = () => {
    const newBlog = {
      id: Math.floor(Math.random() * 1000000000),
      title: state.title,
      body: state.body,
      author: state.author,
    };
    addBlog(newBlog);
    onClose();
  };

  const resetForm = () => {
    setTitle("");
    setBody("");
    setAuthor("mario");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 border border-neutral-100 rounded-lg p-6 w-[400px]"
      >
        <label>Blog Title:</label>
        <input
          value={state.title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          required
          className="border border-neutral-200 rounded-lg p-1 px-2"
        />
        <label>Blog Body:</label>
        <textarea
          value={state.body}
          onChange={(e) => setBody(e.target.value)}
          required
          className="border border-neutral-200 rounded-lg p-1 px-2"
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={state.author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border border-neutral-200 rounded-lg p-1 px-2"
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
          <option value="puttymutti">Puttymutti</option>
        </select>
        <button className="bg-neutral-100 rounded-lg p-3 ponter">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
