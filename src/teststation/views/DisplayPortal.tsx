import { useState } from "react";
import ModalForm, { Blog } from "../../teststation/components/forms/ModalForm";
import { PortalContext } from "../../context/portal-overlay-context";
import { PortalOverlay } from "../../teststation/components/portal/PortalOverlay";

const DisplayPortal = () => {
  const [isOpen, setisOpen] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  const portalContextValues = {
    title: "Modal Form",
    modalText: "This is the modal text",
    open: isOpen,
    onClose: () => setisOpen(false),
    addBlog: (blog: Blog) => setBlogs([...blogs, blog]),
  };

  return (
    <PortalContext.Provider value={portalContextValues}>
      <h1>React Portals Demo</h1>
      <button onClick={() => setisOpen(true)}>Open the Modal</button>
      <PortalOverlay>
        <ModalForm />
      </PortalOverlay>
      <div>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <div>
                <h3>{blog.title}</h3>
                <h3>{blog.body}</h3>
                <h3>{blog.author}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PortalContext.Provider>
  );
};

export default DisplayPortal;
