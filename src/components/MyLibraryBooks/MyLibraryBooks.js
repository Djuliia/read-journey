import {
  AddedItem,
  AddedList,
  Container,
  HelperWrap,
  InfoWrap,
  NoBookWrap,
  Select,
  Title,
} from './MyLibraryBooks.styled';
import sprite from '../../images/sprite.svg';
import book1 from '../../images/book (1).jpg';
import book2 from '../../images/book (5).jpg';

export const MyLibraryBooks = ({ book }) => {
  const isBook = false;
  return (
    <Container>
      <HelperWrap>
        <Title>My Library</Title>
        <Select id="myBook">
          <option value="all">All book</option>
          <option value="unread">Unread</option>
          <option value="in-progress">In progress</option>
          <option value="done">Done</option>
        </Select>
      </HelperWrap>

      {!isBook ? (
        <NoBookWrap>
          <div>📚</div>
          <p>
            To start training, add <span>some of your books</span> or from the
            recommended ones
          </p>
        </NoBookWrap>
      ) : (
        <AddedList>
          <AddedItem>
            <img src={book1} alt="book" />
            <InfoWrap>
              <div>
                <h3>Title</h3>
                <p>Author</p>
              </div>
              <button>
                <svg width="14" height="14">
                  <use href={`${sprite}#trash`} />
                </svg>
              </button>
            </InfoWrap>
          </AddedItem>
          <AddedItem>
            <img src={book2} alt="book" />
            <InfoWrap>
              <div>
                <h3>Title</h3>
                <p>Author</p>
              </div>
              <button>
                <svg width="14" height="14">
                  <use href={`${sprite}#trash`} />
                </svg>
              </button>
            </InfoWrap>
          </AddedItem>
        </AddedList>
      )}
    </Container>
  );
};
