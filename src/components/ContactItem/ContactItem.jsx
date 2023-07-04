import { useDispatch } from 'react-redux';
import { Item, Text, Btn } from './ContactItem.styled';
import { deleteContactThunk } from 'redux/thunk';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => dispatch(deleteContactThunk(id));

  return (
    <Item id={id}>
      <Text>
        {name}: {number}
      </Text>
      <Btn type="button" onClick={handleDeleteContact}>
        Delete
      </Btn>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
