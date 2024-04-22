import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import {
  ErrorMsg,
  Label,
  StyledInput,
  StyledLink,
} from 'components/Auth/Form.styled';
import {
  BtnApply,
  FormTitle,
  InputWrap,
  LinkWrap,
  Title,
} from 'components/Filters/Filters.styled';
import { NavLink } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import book1 from '../../images/book (1).jpg';
import book2 from '../../images/book (2).jpg';
import book3 from '../../images/book (3).jpg';
import {
  BookItem,
  BookList,
  Container,
  RecommendedWrap,
} from './AddBook.styled';
import { useState } from 'react';
import { PopUp } from 'components/PopUp/PopUp';
import { AddBookPopup } from 'components/PopUp/AddBookPopup';
import { addFromFilter } from '../../redux/books/operations';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

export const AddBook = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Book title is required'),
    author: Yup.string().required('Author is required'),
    totalPages: Yup.number()
      .required('Number of pages is required')
      .positive('Number of pages must be positive')
      .integer('Number of pages must be an integer'),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleSubmit = async values => {
    try {
      const action = await dispatch(addFromFilter(values));
      if (addFromFilter.fulfilled.match(action)) {
        openModal();
      } else if (addFromFilter.rejected.match(action)) {
        const error = action.error;
        if (error && error.message === 'Such book already exists') {
          toast.error('This book already exists in your library');
          return;
        }
      }
    } catch (error) {
      toast.error('Failed to add book: ', error.message);
    }
  };

  return (
    <>
      <Container>
        <div>
          <Formik
            initialValues={{ title: '', author: '', totalPages: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <FormTitle>Create your library:</FormTitle>
                <InputWrap>
                  <Label htmlFor="title">Book title:</Label>
                  <StyledInput
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter text"
                  />
                </InputWrap>
                {errors.title && touched.title && (
                  <ErrorMsg name="title" component="div" />
                )}
                <InputWrap>
                  <Label htmlFor="author">The author:</Label>
                  <StyledInput
                    type="text"
                    name="author"
                    id="author"
                    placeholder="Enter text"
                  />
                </InputWrap>
                {errors.author && touched.author && (
                  <ErrorMsg name="author" component="div" />
                )}
                <InputWrap>
                  <Label htmlFor="pages">Number of pages:</Label>
                  <StyledInput
                    type="number"
                    name="totalPages"
                    id="pages"
                    placeholder="0"
                  />
                </InputWrap>
                {errors.totalPages && touched.totalPages && (
                  <ErrorMsg name="totalPages" component="div" />
                )}
                <BtnApply type="submit">Add book</BtnApply>
              </Form>
            )}
          </Formik>
        </div>
        <RecommendedWrap>
          <Title>Recommended books</Title>
          <BookList>
            <BookItem>
              <img src={book1} alt="book" />
              <h3>Title</h3>
              <p>Author</p>
            </BookItem>
            <BookItem>
              <img src={book2} alt="book" />
              <h3>Title</h3>
              <p>Author</p>
            </BookItem>
            <BookItem>
              <img src={book3} alt="book" />
              <h3>Title</h3>
              <p>Author</p>
            </BookItem>
          </BookList>
          <LinkWrap>
            <StyledLink to="/recommended">Home</StyledLink>
            <NavLink to="/recommended">
              <svg width="24px" height="24px">
                <use href={`${sprite}#log-in`} />
              </svg>
            </NavLink>
          </LinkWrap>
        </RecommendedWrap>
      </Container>
      <PopUp isOpen={isModalOpen} onClose={closeModal}>
        <AddBookPopup />
      </PopUp>
    </>
  );
};
