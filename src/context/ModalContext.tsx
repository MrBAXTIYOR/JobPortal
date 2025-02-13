import  { createContext, useState, useContext } from 'react';

const ModalContext = createContext<any>(null);

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
