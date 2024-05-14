import { Formik, ErrorMessage, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';
import * as Yup from 'yup';

const validation = Yup.object().shape({
  email: Yup.string().email().required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Invalid password format, min 8 symbol'),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(reponse => {
        console.log(reponse);
        toast.success('Success login!!!');
      })
      .catch(error => {
        console.log(error);
        toast.success('try again!!!!');
      });

    actions.resetForm();
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Email
          <Field className={css.formInput} type="email" name="email" />
          <ErrorMessage name="email" component="span" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.formInput} type="password" name="password" />
          <ErrorMessage name="password" component="span" />
        </label>
        <button className={css.buttonLogIn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
