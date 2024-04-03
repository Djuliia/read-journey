import { Logo } from 'components/Logo/Logo';
import { Field, Form, Formik } from 'formik';
import { NavLink } from 'react-router-dom';

export const LoginForm = () => {
  return (
    <div>
      <div>
        <Logo />
        <h1>
          Expand your mind, reading <span>a book</span>
        </h1>
        <Formik>
          <Form>
            <label htmlFor="email">Mail:</label>
            <Field type="email" name="email" id="email" />
            <label htmlFor="password">Password:</label>
            <Field type="text" name="password" id="password" />
            <button type="submit">Log In</button>
            <NavLink to="/register">Don’t have an account? </NavLink>
          </Form>
        </Formik>
      </div>
      <div>
        <img src="" alt="iPhone 15 Black" />
      </div>
    </div>
  );
};
