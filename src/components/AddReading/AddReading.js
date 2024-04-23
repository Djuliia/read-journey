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
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

export const AddReading = ({ isStart, book, setIsStart }) => {
  const dispatch = useDispatch();
  const id = book._id;

  const handleSubmit = async ({ totalPages }, { resetForm }) => {
    try {
      if (!isStart) {
        const action = await dispatch(startReading({ page: totalPages, id }));

        if (startReading.fulfilled.match(action)) {
          toast.success('The reading has started');
          setIsStart(!isStart);
          resetForm();
        } else if (startReading.rejected.match(action)) {
          const error = action.error;
          if (
            error &&
            error.message === 'You have already started reading this book'
          ) {
            toast.error('You have already started reading this book');
            return;
          }
        }
      } else {
        const action = await dispatch(stopReading({ page: totalPages, id }));
        if (stopReading.fulfilled.match(action)) {
          // setIsStart(!isStart);
          resetForm();
        } else if (stopReading.rejected.match(action)) {
          const error = action.error;
          toast.error('Failed to stop reading', error);
          return;
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const validationSchema = Yup.object().shape({
    totalPages: Yup.number()
      .required('Number of pages is required')
      .positive('Number of pages must be positive')
      .integer('Number of pages must be an integer'),
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
      {!isStart ? <Progress /> : <Diary isStart={isStart} />}
    </Container>
  );
};
