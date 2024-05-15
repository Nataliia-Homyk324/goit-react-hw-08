import PageTitle from '../../components/PageTitle/PageTitle';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <section className={css.bgImg}>
      <div className={css.tumb}>
        <PageTitle>Register your account</PageTitle>
        <RegistrationForm />
      </div>
    </section>
  );
}
