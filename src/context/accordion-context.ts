import { createContext, useContext } from "react";

type AccordionContextType = {
  title: string;
  contentText: string;
  open: boolean;
  toggleOpen: () => void;
};

export const AccordionContext = createContext<AccordionContextType>(
  {} as AccordionContextType
);

export const useAccordionContext = () => {
  const accordionContext = useContext(AccordionContext);
  if (accordionContext === undefined) {
    throw new Error(
      "useAccordionContext must be used within an AccordionContextProvider"
    );
  }
  return accordionContext;
};
