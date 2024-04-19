import { AccordionContext } from "../../context/accordion-context";
import { useToggle } from "../../hooks/useToggle";
import Accordion from "../../teststation/components/accordion/Accordion";

const DisplayAccordion = () => {
  const { status: open, toggleStatus: toggleOpen } = useToggle();
  return (
    <>
      <AccordionContext.Provider
        value={{
          title: "Accordion Title",
          contentText: "Accordion Content",
          open: open,
          toggleOpen: toggleOpen,
        }}
      >
        <Accordion>Beliebige Child Component</Accordion>
        <Accordion size="large">Beliebige Child Component</Accordion>
        <Accordion size="middle">Beliebige Child Component</Accordion>
      </AccordionContext.Provider>
    </>
  );
};

export default DisplayAccordion;
