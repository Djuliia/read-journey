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

export const AddBook = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Book title is required'),
    author: Yup.string().required('Author is required'),
    pages: Yup.number()
      .required('Number of pages is required')
      .positive('Number of pages must be positive')
      .integer('Number of pages must be an integer'),
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = book => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Container>
        <div>
          <Formik
            initialValues={{ title: '', author: '', pages: '' }}
            validationSchema={validationSchema}
            onSubmit={values => {
              console.log(values);
              openModal();
              //search
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <FormTitle>Filters:</FormTitle>
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
                    name="pages"
                    id="pages"
                    placeholder="0"
                  />
                </InputWrap>
                {errors.pages && touched.pages && (
                  <ErrorMsg name="pages" component="div" />
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
            <StyledLink to="/">Home</StyledLink>
            <NavLink to="/">
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