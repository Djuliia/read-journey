import {
  Container,
  Title,
} from 'components/MyLibraryBooks/MyLibraryBooks.styled';

import { BookWrap, BtnStart, BtnStop } from './MyReading.styled';
import { useState } from 'react';
import { PopUp } from 'components/PopUp/PopUp';
import { FinishedReadPopup } from 'components/PopUp/FinishedReadPopup';
import { useLocation } from 'react-router-dom';

export const MyReading = ({ isStart, handleStart }) => {
  const location = useLocation();
  const { book } = location.state;

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
          <img src={book.imageUrl} alt="book" />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
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
