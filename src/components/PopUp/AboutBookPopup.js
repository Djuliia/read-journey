import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { AboutBookWrap, BookItem, BtnAdd } from './AboutBookPopup.styled';

export const AboutBookPopup = ({ book, fromLibrary, fromRecommended }) => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAction = () => {
    if (fromLibrary) {
      navigate('/reading');
    } else {
      if (fromRecommended) {
        console.log(fromRecommended);
        // dispatch(addToLibrary(book));
      }
    }
  };

  return (
    <AboutBookWrap>
      <BookItem>
        <img src={book} alt="book1" />
        <h3>Book title</h3>
        <p>Author</p>
        <span>pages</span>
      </BookItem>
      <BtnAdd onClick={handleAction}>
        {fromLibrary ? 'Start reading' : 'Add to library'}
      </BtnAdd>
    </AboutBookWrap>
  );
};
