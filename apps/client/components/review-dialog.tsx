import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  Rating,
  Stack,
  TextField,
} from '@mui/material';
import { ReviewProps } from '../pages';
import { FC, useState } from 'react';

type Props = {
  open: boolean;
  closeModal: () => void;
};

const ReviewDialog: FC<Props> = ({ open, closeModal }) => {
  const [itemReview, setItemReview] = useState<ReviewProps>({} as ReviewProps);

  return (
    <Dialog maxWidth="md" open={open} onClose={closeModal}>
      <DialogTitle>Add a Review</DialogTitle>
      <DialogContent>
        <FormControl style={{ minWidth: '28rem' }}>
          <Stack spacing={1}>
            <Grid container justifyContent="space-between" alignItems="center">
              <p>Communication</p>
              <Rating
                name="half-rating"
                precision={0.5}
                onChange={(_, newValue) =>
                  setItemReview({ ...itemReview, communication: newValue })
                }
              />
            </Grid>
            <Grid container justifyContent="space-between" alignItems="center">
              <p>Item Condition</p>
              <Rating
                name="half-rating"
                precision={0.5}
                onChange={(_, newValue) =>
                  setItemReview({ ...itemReview, condition: newValue })
                }
              />
            </Grid>
            <Grid container justifyContent="space-between" alignItems="center">
              <p>Value</p>
              <Rating
                name="half-rating"
                precision={0.5}
                onChange={(_, newValue) =>
                  setItemReview({ ...itemReview, value: newValue })
                }
              />
            </Grid>
          </Stack>
          <TextField
            id="outlined-multiline-static"
            label="Review"
            multiline
            rows={4}
            style={{ marginTop: '1.5rem' }}
            onChange={(e) =>
              setItemReview({ ...itemReview, message: e.target.value })
            }
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => console.log(itemReview)}>Submit Review</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewDialog;
