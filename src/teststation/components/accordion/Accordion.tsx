import { MdSubdirectoryArrowLeft } from "react-icons/md";

import { useAccordionContext } from "../../../context/accordion-context";

export type AccordionProps = {
  children?: React.ReactNode;
};

const Accordion = ({ children }: AccordionProps) => {
  const { open } = useAccordionContext();

  return (
    <div className="w-full p-6">
      <div className="flex flex-col gap-2 rounded-lg ">
        <AccordionHeader></AccordionHeader>
        {open && <AccordionContent>{children}</AccordionContent>}
      </div>
    </div>
  );
};

export default Accordion;

export const AccordionHeader = () => {
  const { title, toggleOpen } = useAccordionContext();

  return (
    <div className="border-2 border-b border-gray-300 rounded-lg">
      <div className="flex flex-row items-center justify-between px-7 p-2">
        <h2>{title}</h2>
        <span></span>
        <button className="pointer p-2" type="button" onClick={toggleOpen}>
          <MdSubdirectoryArrowLeft />
        </button>
      </div>
    </div>
  );
};

export const AccordionContent = ({ children }: AccordionProps) => {
  const { contentText } = useAccordionContext();
  return (
    <div className="border-2 border-b border-gray-300 rounded-lg ">
      <div className="flex flex-grow flex-col gap-2 px-7 p-4 ">
        <p>{contentText}</p>
        <div>{children}</div>
      </div>
    </div>
  );
};
