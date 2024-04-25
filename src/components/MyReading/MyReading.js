import {
  Container,
  Title,
} from 'components/MyLibraryBooks/MyLibraryBooks.styled';

import { BookWrap, BtnStart, BtnStop } from './MyReading.styled';
import noImg from '../../images/noImg.webp';

export const MyReading = ({ isStart, book }) => {
  return (
    <>
      <Container>
        <Title>My reading</Title>
        <BookWrap>
          <img src={book.imageUrl ? book.imageUrl : noImg} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <button>{!isStart ? <BtnStart /> : <BtnStop />}</button>
        </BookWrap>
      </Container>
    </>
  );
};
