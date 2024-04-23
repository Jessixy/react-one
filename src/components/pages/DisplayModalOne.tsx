import { useState } from "react";
import ModalOne from "../../teststation/components/modal/ModalOne";

const DisplayModalOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Toggle Modal</button>
      <ModalOne open={isOpen} onClose={() => setIsOpen(false)}>
        <div>
          <h1>Modal Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            doloribus fugit sint dolorum, cupiditate culpa nostrum, accusantium
            nihil sapiente quisquam deleniti unde tempora minima tempore
            perferendis vitae libero, laborum enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            natus odio atque animi, assumenda perspiciatis ullam ea rem
            distinctio hic, aliquam minima recusandae laboriosam sapiente
            voluptatibus. Nostrum numquam nisi perspiciatis?
          </p>
        </div>
      </ModalOne>
    </>
  );
};

export default DisplayModalOne;
