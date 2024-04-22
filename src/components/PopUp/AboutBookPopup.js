import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AboutBookWrap, BookItem, BtnAdd } from './AboutBookPopup.styled';
import { addToLibrary } from '../../redux/books/operations';
import toast from 'react-hot-toast';
import { selectBookByTitle } from '../../redux/books/selectors';
import noImg from '../../images/noImg.webp';

export const AboutBookPopup = ({ book, fromLibrary, fromRecommended }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const existingBook = useSelector(state =>
    selectBookByTitle(state, book.title)
  );

  const handleAction = async () => {
    if (fromLibrary) {
      navigate('/reading', { state: book });
    } else {
      if (fromRecommended) {
        try {
          if (existingBook) {
            return;
          } else {
            await dispatch(addToLibrary(book._id));
            toast.success('Book successfully added to your library');
          }
        } catch (error) {
          toast.error(error.message);
        }
      }
    }
  };

  return (
    <AboutBookWrap>
      <BookItem>
        <img src={book.imageUrl ? book.imageUrl : noImg} alt={book.title} />
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <span>{book.totalPages}</span>
      </BookItem>
      <BtnAdd
        onClick={handleAction}
        style={{ display: existingBook && !fromLibrary ? 'none' : 'active' }}
      >
        {fromLibrary ? 'Start reading' : 'Add to library'}
      </BtnAdd>
    </AboutBookWrap>
  );
};
