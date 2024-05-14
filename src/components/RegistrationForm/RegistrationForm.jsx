import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';
import * as Yup from 'yup';

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string().email().required('Required'),
  password: Yup.string().required('Required').min(8),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
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
      validationSchema={validation}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.formInput} type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.formInput} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.formInput} type="password" name="password" />
        </label>
        <button className={css.buttonSignup} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
