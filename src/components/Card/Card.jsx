import styles from './Card.module.css';
import PropTypes from 'prop-types';

const Card = ({ user }) => {
  return (
    <>
      <div className={styles.card}>
        <h1 className="text-3xl font-bold underline">{user.username}</h1>
      </div>
    </>
  );
};

Card.propTypes = {
  user: PropTypes.string,
};

export default Card;
