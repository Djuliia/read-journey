import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Container } from './AddReading.styled';
import {
  BtnApply,
  FormTitle,
  InputWrap,
} from 'components/Filters/Filters.styled';
import { ErrorMsg, Label, StyledInput } from 'components/Auth/Form.styled';
import { useState } from 'react';
import { Progress } from './Progress';
import { Diary } from '../Diary/Diary';

export const AddReading = () => {
  const [isStart, setIsStart] = useState(false);

  const handleSubmit = async values => {
    console.log(values);
  };

  const validationSchema = Yup.object().shape({
    pages: Yup.number()
      .required('Number of pages is required')
      .positive('Number of pages must be positive')
      .integer('Number of pages must be an integer'),
  });
  return (
    <Container>
      <Formik
        initialValues={{ pages: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <FormTitle>Filters:</FormTitle>
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
              <ErrorMsg name="page" component="div" />
            )}
            {
              <BtnApply type="submit" onClick={() => setIsStart(prev => !prev)}>
                {isStart ? 'To stop' : 'To start'}
              </BtnApply>
            }
          </Form>
        )}
      </Formik>
      {!isStart ? <Progress /> : <Diary />}
    </Container>
  );
};
