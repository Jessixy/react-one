import { MdSubdirectoryArrowLeft } from "react-icons/md";
import {
  AccordionContext,
  useAccordionContext,
} from "../../../context/accordion-context";
import { BiCollapseVertical } from "react-icons/bi";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes } from "react";
import { cn } from "../../../libs/utils";
import { useToggle } from "../../../hooks/useToggle";

interface AccordionProps
  extends HTMLAttributes<React.JSX.Element>,
    VariantProps<typeof AccordionItem> {
  children?: React.ReactNode;
  variant?: string;
  size?: string;
}
//

export type AccordionIconProps = {
  openIcon: React.ReactNode;
  closeIcon: React.ReactNode;
};

export type AccordionContextType = {
  title: string;
  contentText: string;
  open: boolean;
  toggleOpen: () => void;
};

export const Accordion = ({ children }: AccordionProps) => {
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
        <AccordionItem>{children}</AccordionItem>
      </AccordionContext.Provider>
    </>
  );
};

export const AccordionItem = ({
  children,
  className,
  variant,
  size,
  ...props
}: AccordionProps) => {
  const { open } = useAccordionContext();
  return (
    <div
      {...props}
      className={cn(
        accordionContainerVariants({
          children,
          className,
          variant,
          size,
          ...props,
        })
      )}
    >
      <div className="flex flex-col gap-3 rounded-lg">
        <AccordionHeader></AccordionHeader>
        {open && <AccordionContent>{children}</AccordionContent>}
      </div>
    </div>
  );
};

// Header
export const AccordionHeader = () => {
  const { title, toggleOpen } = useAccordionContext();

  return (
    <div className="border border-b border-gray-300 rounded-lg">
      <div className="flex flex-row items-center justify-between px-7 p-2">
        <h2>{title}</h2>
        <span></span>
        <button className="pointer p-2" type="button" onClick={toggleOpen}>
          <AccordionIcon
            closeIcon={<MdSubdirectoryArrowLeft />}
            openIcon={<BiCollapseVertical />}
          />
        </button>
      </div>
    </div>
  );
};

// Icon
export const AccordionIcon = ({ openIcon, closeIcon }: AccordionIconProps) => {
  const { open } = useAccordionContext();
  return <span>{open ? openIcon : closeIcon}</span>;
};

// Content
export const AccordionContent = ({ children }: AccordionProps) => {
  const { contentText } = useAccordionContext();
  return (
    <div className="border border-b border-gray-300 rounded-lg ">
      <div className="flex flex-grow flex-col gap-2 px-7 p-4 ">
        <p>{contentText}</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

// Custom Styles
const accordionContainerVariants = cva(``, {
  variants: {
    variant: {
      default: "bg-transparent",
    },
    size: {
      full: "w-full h-auto p-6",
      large: "w-[80%] h-auto p-5",
      middle: "w-[50%] h-auto p-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "full",
  },
});
