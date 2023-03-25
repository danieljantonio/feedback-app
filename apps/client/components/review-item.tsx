import { Grid, LinearProgress } from '@mui/material';
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
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item justifyContent="center" alignItems="center">
            <LinearProgress
              variant="determinate"
              value={(value / 5) * 100}
              style={{ height: 5, width: 120, borderRadius: 5 }}
            />
          </Grid>
          <Grid item>
            <p
              style={{
                color: blue[600],
                fontWeight: 500,
                marginLeft: '0.5rem',
              }}
            >
              {value.toFixed(1)}
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ReviewItem;
