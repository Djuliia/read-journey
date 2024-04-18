import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AboutBookWrap, BookItem, BtnAdd } from './AboutBookPopup.styled';
import { addFromFilter } from '../../redux/books/operations';
import toast from 'react-hot-toast';
import { selectBookByTitle } from '../../redux/books/selectors';
// import { store } from '../../redux/store';

export const AboutBookPopup = ({ book, fromLibrary, fromRecommended }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const existingBook = useSelector(state =>
    selectBookByTitle(state, book.title)
  );

  const handleAction = async () => {
    if (fromLibrary) {
      navigate('/reading', { state: { book } });
    } else {
      if (fromRecommended) {
        try {
          // const existingBook = selectBookByTitle(store.getState(), book.title);

          if (existingBook) {
            toast.error('This book already exists in your library');
            return;
          } else {
            await dispatch(addFromFilter(book._id));
            toast.success('Book successfully added to your library');
          }
        } catch (error) {
          toast.error('This book already exists in your library');
        }
      }
    }
  };

  return (
    <AboutBookWrap>
      <BookItem>
        <img src={book.imageUrl} alt="title" />
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <span>{book.totalPages}</span>
      </BookItem>
      <BtnAdd onClick={handleAction}>
        {fromLibrary ? 'Start reading' : 'Add to library'}
      </BtnAdd>
    </AboutBookWrap>
  );
};
