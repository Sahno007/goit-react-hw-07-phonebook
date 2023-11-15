import DeleteContactButton from 'components/DeleteContactButton/DeleteContactButton';
import PropTypes from 'prop-types';

const ContactItem = ({ userName, userNumber, id }) => {
  return (
    <li id={id}>
      <p>{`${userName}: ${userNumber}`}</p>
      <DeleteContactButton userId={id} />
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  userName: PropTypes.string,
  userNumber: PropTypes.string,
  id: PropTypes.string,
};