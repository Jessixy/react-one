import ReactDom from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { PortalContext } from "../../../context/portal-overlay-context";
import { useContext } from "react";

type PortalProps = {
  children: React.ReactNode;
};

const PortalOverlay = ({ children }: PortalProps) => {
  const { open, onClose, title, modalText } = useContext(PortalContext);

  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg flex flex-col justify-center p-6 max-w-lg">
        <div className="flex justify-between items-center px-6 py-2">
          <h1>{title}</h1>
          <button className="pointer p-2" type="button" onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>
        <hr />
        <div className="px-6 py-4">{modalText}</div>
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>,
    document.getElementById("portal")!
  );
};

export { PortalOverlay };
