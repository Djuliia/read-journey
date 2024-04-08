import {
  Container,
  Title,
} from 'components/MyLibraryBooks/MyLibraryBooks.styled';
import book1 from '../../images/book (1).jpg';
import { BookWrap, BtnStart, BtnStop } from './MyReading.styled';
import { useState } from 'react';
import { PopUp } from 'components/PopUp/PopUp';
import { FinishedReadPopup } from 'components/PopUp/FinishedReadPopup';

export const MyReading = ({ isStart, handleStart }) => {
  const [isFinished, setIsFinished] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = book => {
    setIsModalOpen(true);
    console.log(book);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleFinished = () => {
    setIsFinished(true);
    openModal();
  };

  return (
    <>
      <Container>
        <Title>My reading</Title>
        <BookWrap>
          <img src={book1} alt="book" />

          <h3>Title</h3>
          <p>Author</p>

          <button
            onClick={isFinished && !isStart ? handleFinished : handleStart}
          >
            {!isStart ? <BtnStart /> : <BtnStop />}
          </button>
        </BookWrap>
      </Container>
      {isModalOpen ? (
        <PopUp isOpen={isModalOpen} onClose={closeModal}>
          <FinishedReadPopup />
        </PopUp>
      ) : null}
    </>
  );
};
