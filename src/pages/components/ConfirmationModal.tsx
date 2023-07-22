import { Button } from '@/components/ui/button';
import { useDeleteBookMutation } from '@/redux/features/books/bookApi';
import React from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ConfirmationModal = ({bookId}:any) => {
  const [deleteBook, {data:book}] = useDeleteBookMutation(bookId)
  const navigate = useNavigate()
  let subtitle: any;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Button onClick={openModal}>Delete</Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="h-[250px] w-[500px]">
          <h2 className="text-3xl text-center">Confirmation Modal</h2>
          <h1 className="text-2xl text-center mt-5">
            Are you sure you want to delete the book?
          </h1>
          <div className="flex justify-center space-x-4 mt-10">
            <Button className="bg-red-600 text-white" onClick={() =>{
              deleteBook({id:bookId}).unwrap().then((payload) => {
                toast.success(payload.message)
                navigate("/books")
              }).catch((err) => toast.error(err.data.message))
              closeModal()
            }}>Confirm</Button>
            <Button onClick={() => closeModal()}>Cancel</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
