import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Container } from './AddReading.styled';
import {
  BtnApply,
  FormTitle,
  InputWrap,
} from 'components/Filters/Filters.styled';
import { ErrorMsg, Label, StyledInput } from 'components/Auth/Form.styled';
import { Progress } from './Progress';
import { Diary } from '../Diary/Diary';
import { startReading, stopReading } from '../../redux/books/operations';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { PopUp } from 'components/PopUp/PopUp';
import { FinishedReadPopup } from 'components/PopUp/FinishedReadPopup';
import { selectReadingBooks } from '../../redux/books/selectors';

export const AddReading = ({ isStart, book, setIsStart }) => {
  const dispatch = useDispatch();
  const id = book._id;
  const bookInfo = useSelector(selectReadingBooks);
  const progress = bookInfo?.progress;
  const finishProgress = progress?.find(item => item.finishReading);
  const finishReading = finishProgress?.finishReading;
  console.log(finishReading);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // const handleSubmit = async ({ totalPages }, { resetForm }) => {
  //   try {
  //     if (!isStart) {
  //       const action = await dispatch(startReading({ page: totalPages, id }));

  //       if (startReading.fulfilled.match(action)) {
  //         toast.success('The reading has started');
  //         setIsStart(!isStart);
  //         resetForm();
  //       } else if (startReading.rejected.match(action)) {
  //         const error = action.error;
  //         if (
  //           error &&
  //           error.message === 'You have already started reading this book'
  //         ) {
  //           toast.error('You have already started reading this book');
  //           return;
  //         }
  //       }
  //     } else {
  //       const action = await dispatch(stopReading({ page: totalPages, id }));
  //       if (stopReading.fulfilled.match(action)) {
  //         // setIsStart(!isStart);
  //         resetForm();
  //       } else if (stopReading.rejected.match(action)) {
  //         const error = action.error;
  //         toast.error('Failed to stop reading', error);
  //         return;
  //       }
  //     }
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };
  const handleSubmit = async ({ totalPages }, { resetForm }) => {
    try {
      const action = isStart
        ? await dispatch(stopReading({ page: totalPages, id }))
        : await dispatch(startReading({ page: totalPages, id }));

      if (
        action.type === 'books/stopReading/fulfilled' ||
        action.type === 'books/startReading/fulfilled'
      ) {
        if (isStart && totalPages === book.totalPages) {
          openModal();
        }
        setIsStart(!isStart);
        resetForm();
      } else {
        const errorMessage = action.error
          ? action.error.message
          : 'Operation failed';
        toast.error(errorMessage);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const validationSchema = Yup.object().shape({
    totalPages: Yup.number()
      .required('Number of pages is required')
      .positive('Number of pages must be positive')
      .integer('Number of pages must be an integer')
      .max(book.totalPages, `Total pages cannot exceed ${book.totalPages}`),
  });

  return (
    <Container>
      <Formik
        initialValues={{ totalPages: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <FormTitle>{isStart ? 'Stop page' : 'Start page'}</FormTitle>
            <InputWrap>
              <Label htmlFor="pages">Number of pages:</Label>
              <StyledInput
                type="number"
                name="totalPages"
                id="pages"
                placeholder="0"
                className={`special ${
                  touched.totalPages && errors.totalPages ? 'error' : ''
                } ${touched.totalPages && !errors.totalPages ? 'success' : ''}`}
              />
            </InputWrap>
            {errors.totalPages && touched.totalPages && (
              <ErrorMsg name="totalPages" component="div" />
            )}
            {
              <BtnApply type="submit">
                {isStart ? 'To stop' : 'To start'}
              </BtnApply>
            }
          </Form>
        )}
      </Formik>
      {!isStart && finishReading ? <Diary isStart={isStart} /> : <Progress />}
      {isModalOpen && (
        <PopUp isOpen={isModalOpen} onClose={closeModal}>
          <FinishedReadPopup />
        </PopUp>
      )}
    </Container>
  );
};
