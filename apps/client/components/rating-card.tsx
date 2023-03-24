import { Avatar } from '@mui/material';
import styles from '../pages/index.module.css';

const RatingCard = ({ message }) => {
  return (
    <div style={{ maxWidth: '49%' }}>
      <div className={styles['flex-center']}>
        <Avatar
          alt="Bob Ross Avatar"
          src="/avatar.jpg"
          style={{ height: 50, width: 50 }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>Bob Ross</p>
          <p>23 June 2023</p>
        </div>
      </div>
      <div
        style={{
          margin: '1rem auto',
        }}
      >
        {message}
      </div>
    </div>
  );
};

export default RatingCard;
