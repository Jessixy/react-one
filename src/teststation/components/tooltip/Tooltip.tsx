import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type TooltipProps = {
  text?: string;
  children?: React.ReactNode;
};

export const CustomTooltip = ({ text, children }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseEnter = () => setShowTooltip(true);
    const onMouseLeave = () => setShowTooltip(false);
    ref.current?.addEventListener("mouseenter", onMouseEnter);
    ref.current?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      ref.current?.removeEventListener("mouseenter", onMouseEnter);
      ref.current?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const tooltip = showTooltip ? (
    <div className=" relative ">
      <div className="absolute z-10  bottom-4 left-[45%] w-48 px-4 py-2 text-black bg-orange-200  rounded-lg shadow-xl">
        {text}
      </div>
    </div>
  ) : null;

  return (
    <div ref={ref}>
      {children}
      {createPortal(tooltip, document.body)}
    </div>
  );
};
