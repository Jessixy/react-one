import { Accordion } from "../../teststation/components/accordion/Accordion";

const DisplayAccordion = () => {
  return (
    <>
      <Accordion>Beliebige Child Component</Accordion>
      <Accordion size="large">Beliebige Child Component</Accordion>
      <Accordion className="w-[30%]"></Accordion>
      <div></div>
    </>
  );
};

export default DisplayAccordion;
