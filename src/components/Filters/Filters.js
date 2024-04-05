import { Label, StyledInput, StyledLink } from 'components/Auth/Form.styled';
import { Form, Formik } from 'formik';
import {
  BookWrap,
  BtnApply,
  Container,
  DescItem,
  DescList,
  DescWrap,
  FormTitle,
  InputWrap,
  LinkWrap,
  Title,
} from './Filters.styled';
import sprite from '../../images/sprite.svg';
import { NavLink } from 'react-router-dom';

export const Filters = () => {
  return (
    <Container>
      <div>
        <Formik
          initialValues={{ title: '', author: '' }}
          onSubmit={values => {
            console.log(values);
            //search
          }}
        >
          <Form>
            <FormTitle>Filters:</FormTitle>
            <InputWrap>
              <Label htmlFor="title">Enter text:</Label>
              <StyledInput type="text" name="title" id="title" />
            </InputWrap>
            <InputWrap>
              <Label htmlFor="author">Enter text:</Label>
              <StyledInput type="text" name="author" id="author" />
            </InputWrap>
            <BtnApply type="submit">To apply</BtnApply>
          </Form>
        </Formik>
      </div>
      <DescWrap>
        <Title>Start your workout</Title>
        <DescList>
          <DescItem>
            <div>1</div>
            <p>
              Create a personal library:
              <span> add the books you intend to read to it.</span>
            </p>
          </DescItem>
          <DescItem>
            <div>2</div>
            <p>
              Create your first workout:{' '}
              <span>define a goal, choose a period, start training.</span>
            </p>
          </DescItem>
        </DescList>
        <LinkWrap>
          <StyledLink to="/library">My library</StyledLink>
          <NavLink to="/library">
            <svg width="24px" height="24px">
              <use href={`${sprite}#log-in`} />
            </svg>
          </NavLink>
        </LinkWrap>
      </DescWrap>
      <BookWrap>
        📚
        <p>
          "Books are <span>windows</span> to the world, and reading is a journey
          into the unknown."
        </p>
      </BookWrap>
    </Container>
  );
};
