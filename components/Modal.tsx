import React from "react";

type ModalProps = {
  onClose: () => void;
};

const Modal = ({ onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
        <h2 className="text-3xl font-bold text-center text-cusPink">
          Wrong Passcode!
        </h2>
        <p className=" text-gray-400">Hint: Let's make it official</p>
        <div className="mt-4 flex justify-center">
          <button
            onClick={onClose}
            className="bg-cusPink text-white px-4 py-2 rounded-md hover:bg-pink-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
