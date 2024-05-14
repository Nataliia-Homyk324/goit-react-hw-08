import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../../components/PageTitle/PageTitle';
import ContactList from '../../components/ContactList/ContactList';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/contactsOps';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';
import Error from '../../components/Error/Error';
import { ThreeDots } from 'react-loader-spinner';
import css from './ContactsPage.module.css';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Your contacts</PageTitle>
      {isLoggedIn ? (
        <div className={css.container}>
          <h1 className={css.header}>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <div className={css.containerLoader}>
            {isLoading && !isError && (
              <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#6f6e6e"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            )}
          </div>
          {isError && (
            <Error>
              Whoops, something went wrong! <br />
              Please try reloading this page!
            </Error>
          )}
          <ContactList />
        </div>
      ) : (
        <p>Try logging into your account!</p>
      )}
    </>
  );
}
