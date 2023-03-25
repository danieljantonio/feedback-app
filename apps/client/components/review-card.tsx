import { Avatar, Grid, Stack } from '@mui/material';
import styles from '../pages/index.module.css';
import { grey } from '@mui/material/colors';

const RatingCard = ({ message }) => {
  return (
    <Grid item md={6}>
      <div className={styles['flex-center']}>
        <Avatar
          alt="Bob Ross Avatar"
          src="/avatar.jpg"
          style={{ height: 65, width: 65 }}
        />
        <Stack spacing={1}>
          <p style={{ fontWeight: 500 }}>Bob Ross</p>
          <p style={{ color: grey[600] }}>23 June 2023</p>
        </Stack>
      </div>
      <div
        style={{
          margin: '1rem auto',
        }}
      >
        {message}
      </div>
    </Grid>
  );
};

export default RatingCard;
