import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './LoginForm.module.css';

const registrationSchema = Yup.object().shape({
  email: Yup.string()
    .email('must be a valid email')
    .required('This field is required'),
  password: Yup.string()
    .min(7, 'Too short! Min 30 symbols')
    .required('This field is required'),
});

export default function LoginForm() {
  const fieldId = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={registrationSchema}
    >
      <Form className={css.wrapper}>
        <div className={css.fileld}>
          <label className={css.label} htmlFor={`${fieldId}-email`}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            placeholder="Your email"
            id={`${fieldId}-email`}
          ></Field>
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.fileld}>
          <label className={css.label} htmlFor={`${fieldId}-password`}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            placeholder="password"
            id={`${fieldId}-password`}
          ></Field>
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
