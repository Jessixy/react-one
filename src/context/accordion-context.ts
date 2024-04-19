import { createContext, useContext } from "react";
import { AccordionContextType } from "../teststation/components/accordion/Accordion";

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
