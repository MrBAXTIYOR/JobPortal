import { X } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const Modal = ({ children }: any) => {
  const { isModalOpen, closeModal } = useModal();

  return (
    <CSSTransition
      in={isModalOpen}
      timeout={300}
      classNames="modal-transition"  // Animatsiya uchun sinf nomini yangilash
      unmountOnExit
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
        <div className="bg-white rounded-lg w-full max-w-lg relative">
          <button
            onClick={() => closeModal()}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>

          <div className="">{children}</div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
