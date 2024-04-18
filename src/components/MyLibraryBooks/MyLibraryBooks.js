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
import { useEffect, useState } from 'react';
import { PopUp } from 'components/PopUp/PopUp';
import { AboutBookPopup } from 'components/PopUp/AboutBookPopup';
import { useDispatch, useSelector } from 'react-redux';
import { selectOwnBooks } from '../../redux/books/selectors';
import { deleteFromLibrary, getOwn } from '../../redux/books/operations';
import toast from 'react-hot-toast';
import noImg from '../../images/noImg.webp';

export const MyLibraryBooks = () => {
  const ownBook = useSelector(selectOwnBooks);
  const dispatch = useDispatch();
  const statusMap = {
    all: true,
    unread: 'unread',
    'in-progress': 'in-progress',
    done: 'done',
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    dispatch(getOwn());
  }, [dispatch]);

  const handleDeleteBook = async bookId => {
    try {
      await dispatch(deleteFromLibrary(bookId));
      dispatch(getOwn());
    } catch (error) {
      toast.error('Error deleting book:', error);
    }
  };

  const openModal = book => {
    setSelectedBook(book);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleFilterChange = e => {
    setFilterStatus(e.target.value);
  };

  return (
    <>
      <Container>
        <HelperWrap>
          <Title>My Library</Title>
          <Select
            id="myBook"
            value={filterStatus}
            onChange={handleFilterChange}
          >
            <option value="all">All book</option>
            <option value="unread">Unread</option>
            <option value="in-progress">In progress</option>
            <option value="done">Done</option>
          </Select>
        </HelperWrap>

        {!ownBook ? (
          <NoBookWrap>
            <div>📚</div>
            <p>
              To start training, add <span>some of your books</span> or from the
              recommended ones
            </p>
          </NoBookWrap>
        ) : (
          <AddedList>
            {ownBook
              .filter(book => {
                const bookStatus = book.status;
                const filterValue = statusMap[filterStatus];
                if (filterValue === true) {
                  return true;
                }
                return bookStatus === filterValue;
              })
              .map(book => (
                <AddedItem key={book._id}>
                  <img
                    src={book.imageUrl ? book.imageUrl : noImg}
                    alt={book.title}
                    onClick={() => openModal(book)}
                  />
                  <InfoWrap>
                    <div>
                      <h3>{book.title}</h3>
                      <p>{book.author}</p>
                    </div>
                    <button onClick={() => handleDeleteBook(book._id)}>
                      <svg width="14" height="14">
                        <use href={`${sprite}#trash`} />
                      </svg>
                    </button>
                  </InfoWrap>
                </AddedItem>
              ))}
          </AddedList>
        )}
      </Container>
      {isModalOpen && (
        <PopUp isOpen={isModalOpen} onClose={closeModal}>
          <AboutBookPopup book={selectedBook} fromLibrary />
        </PopUp>
      )}
    </>
  );
};
