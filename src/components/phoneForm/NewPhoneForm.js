import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import {
  Form,
  FormInputGroup,
  Field,
  ErrorMessage,
  InputErrorGroup,
} from './NewPhoneForm.styled';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';

export const FormContact = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleAdd = newContact => {
    const duplicateContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (duplicateContact !== undefined) {
      return alert(`${duplicateContact.name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const PhoneValidateSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(7, 'Too Short!')
      .max(12, 'Too Long!')
      .required('Required'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={PhoneValidateSchema}
        onSubmit={(values, actions) => {
          handleAdd(values);
          actions.resetForm();
        }}
      >
        <Form>
          <FormInputGroup>
            <label htmlFor="name">Name</label>
            <InputErrorGroup>
              <Field id="name" name="name" placeholder="Luna" />
              <ErrorMessage name="name" component="span" />
            </InputErrorGroup>
          </FormInputGroup>

          <FormInputGroup>
            <label htmlFor="number">Number</label>
            <InputErrorGroup>
              <Field id="number" name="number" placeholder="1234567" />
              <ErrorMessage name="number" component="span" />
            </InputErrorGroup>
          </FormInputGroup>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
