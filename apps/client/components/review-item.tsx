import { LinearProgress } from '@mui/material';
import styles from '../pages/index.module.css';
import { blue } from '@mui/material/colors';

const ReviewItem = ({ placeholder, value }) => {
  return (
    <div className={styles['rating-item']}>
      <p>{placeholder}</p>
      <div className={styles['rating-value-container']}>
        <LinearProgress
          variant="determinate"
          value={value}
          style={{ height: 5, width: 120, borderRadius: 5 }}
        />
        <p style={{ color: blue[600], fontWeight: 500 }}>4.8</p>
      </div>
    </div>
  );
};

export default ReviewItem;
