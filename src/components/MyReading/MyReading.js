import {
  Container,
  Title,
} from 'components/MyLibraryBooks/MyLibraryBooks.styled';

import { BookWrap, BtnStart, BtnStop } from './MyReading.styled';
import { useState } from 'react';
import { PopUp } from 'components/PopUp/PopUp';
import { FinishedReadPopup } from 'components/PopUp/FinishedReadPopup';
import noImg from '../../images/noImg.webp';

export const MyReading = ({ isStart, setIsStart, book }) => {
  const [isFinished, setIsFinished] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
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
          <img src={book.imageUrl ? book.imageUrl : noImg} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <button onClick={isFinished && !isStart ? handleFinished : null}>
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
