import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOps';

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(30, 'Too long. Max 30 symbols')
    .required('This field is required'),
  email: Yup.string()
    .email('must be a valid email')
    .required('This field is required'),
  password: Yup.string()
    .min(7, 'Too short! Min 7 symbols')
    .required('This field is required'),
});

export default function RegistrationForm() {
  const dispath = useDispatch();
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    dispath(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={registrationSchema}
    >
      <Form className={css.wrapper}>
        <div className={css.fileld}>
          <label className={css.label} htmlFor={`${fieldId}-name`}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            placeholder="Your name"
            id={`${fieldId}-name`}
          ></Field>
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
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
          Registe
        </button>
      </Form>
    </Formik>
  );
}
