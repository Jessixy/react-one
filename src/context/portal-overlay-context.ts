import { createContext, useContext } from "react";
import { Blog } from "../teststation/components/forms/ModalForm";

type PortalContextType = {
  title: string;
  modalText: string;
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  addBlog: (blog: Blog) => void;
};

export const PortalContext = createContext<PortalContextType>(
  {} as PortalContextType
);

export const usePortalOverlayContext = () => {
  const portalContext = useContext(PortalContext);
  if (portalContext === undefined) {
    throw new Error(
      "usePortalOverlayContext must be used within a PortalProvider"
    );
  }
  return portalContext;
};
