import { Avatar, Grid, Stack } from '@mui/material';
import styles from '../pages/index.module.css';
import { grey } from '@mui/material/colors';
import date from 'date-and-time';

const RatingCard = ({ review, dummyUserId }) => {
  return (
    <Grid item md={6}>
      <div className={styles['flex-center']}>
        <Avatar
          alt="User Avatar"
          src={`https://i.pravatar.cc/75?img=${dummyUserId * 3}`}
          style={{ height: 65, width: 65 }}
        />
        <Stack spacing={1}>
          <p style={{ fontWeight: 500 }}>Bob Ross</p>
          <p style={{ color: grey[600] }}>
            {date.format(new Date(review.createdAt), 'DD MMM YYYY')}
          </p>
        </Stack>
      </div>
      <div
        style={{
          margin: '1rem auto',
        }}
      >
        {review.message}
      </div>
    </Grid>
  );
};

export default RatingCard;
