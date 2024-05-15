import css from './Contact.module.css';
import { FaUser, FaRegEdit } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/contactsOps';
import ContainerModalForm from '../ContainerModalForm/ContainerModalForm';
import {
  selectIsDeletingContact,
  selectIsEditingContact,
} from '../../redux/contacts/selectors';
import EditForm from '../EditForm/EditForm';
import ConfirmForm from '../ConfirmForm/ConfirmForm';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const [confirm, setConfirm] = useState(false);
  const [update, setUpadate] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  const isDeleteContact = useSelector(selectIsDeletingContact) === id;
  const isEditContact = useSelector(selectIsEditingContact) === id;

  // const handleDelete = () => dispatch(deleteContact(id));

  const handleDeleteItem = () => {
    dispatch(deleteContact(id));
    setConfirm(false);
  };

  const handleUpdateContact = updatedData => {
    dispatch(updateContact(updatedData));
  };

  return (
    <div className={css.containerContac}>
      <div className={css.thumbContact}>
        <p className={css.nameContact}>
          <FaUser /> {name}
        </p>
        <p className={css.nameContact}>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <div className={css.thumbBtn}>
        <button className={css.buttonContact} onClick={() => setConfirm(true)}>
          {isDeleteContact ? (
            <CircularProgress size={15} />
          ) : (
            <>
              <BsTrash className={css.iconContact} size="15" /> Delete
            </>
          )}
        </button>
        <button
          className={css.buttonContact}
          onClick={() => {
            setCurrentContact({ id, name, number });
            setUpadate(true);
          }}
        >
          {isEditContact ? (
            <CircularProgress size={15} />
          ) : (
            <>
              <FaRegEdit className={css.iconContact} size="15" /> Edit
            </>
          )}
        </button>
      </div>

      <ContainerModalForm visible={confirm} setVisible={setConfirm}>
        <ConfirmForm onClick={handleDeleteItem} setVisible={setConfirm} />
      </ContainerModalForm>

      <ContainerModalForm visible={update} setVisible={setUpadate}>
        <EditForm
          updateContact={handleUpdateContact}
          contact={currentContact}
          setVisible={setUpadate}
        />
      </ContainerModalForm>
    </div>
  );
}
