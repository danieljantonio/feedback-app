import { Grid, LinearProgress } from '@mui/material';
import styles from '../pages/index.module.css';
import { blue } from '@mui/material/colors';

const ReviewItem = ({ placeholder, value }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <p>{placeholder}</p>
      <Grid item>
        <Grid
          container
          direction="row"
          spacing={2}
          justifyContent="space-around"
          alignItems="center"
        >
          <LinearProgress
            variant="determinate"
            value={value}
            style={{ height: 5, width: 120, borderRadius: 5 }}
          />
          <p
            style={{ color: blue[600], fontWeight: 500, marginLeft: '0.5rem' }}
          >
            4.8
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReviewItem;
