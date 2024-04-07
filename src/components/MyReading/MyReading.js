import {
  Container,
  Title,
} from 'components/MyLibraryBooks/MyLibraryBooks.styled';
import book1 from '../../images/book (1).jpg';
import { BookWrap } from './MyReading.styled';

export const MyReading = () => {
  return (
    <Container>
      <Title>My Reading</Title>
      <BookWrap>
        <img src={book1} alt="book" />

        <h3>Title</h3>
        <p>Author</p>

        <button>
          <div></div>
        </button>
      </BookWrap>
    </Container>
  );
};
