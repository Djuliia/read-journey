import { AboutBookWrap, BookItem, BtnAdd } from './AboutBookPopup.styled';

// import { useDispatch } from 'react-redux';

export const AboutBookPopup = ({ book }) => {
  // const dispatch = useDispatch();

  const handleAddToLibrary = () => {
    // dispatch(addToLibrary(book));
  };

  return (
    <AboutBookWrap>
      <BookItem>
        <img src={book} alt="book1" />
        <h3>Book title</h3>
        <p>Author</p>
        <span>pages</span>
      </BookItem>
      <BtnAdd onClick={handleAddToLibrary}>Add to library</BtnAdd>
    </AboutBookWrap>
  );
};
