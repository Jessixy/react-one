type ModalOneProps = {
  children?: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const ModalOne = ({ children, open, onClose }: ModalOneProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors w-full ${
        open ? "visible bg-black/50 :" : "invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow p-6 transition-all max-w-md ${
          open ? "scale-100 opacity-100" : "scale-110 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50"
          onClick={onClose}
        >
          X
        </button>
        <div className="flex justify-center items-center mt-4">{children}</div>
      </div>
    </div>
  );
};

export default ModalOne;
