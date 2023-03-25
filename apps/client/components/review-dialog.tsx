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
  Typography,
} from '@mui/material';
import { ReviewProps } from '../pages';
import { FC, useEffect, useState } from 'react';

type Props = {
  open: boolean;
  closeModal: () => void;
  onSubmit: (newReview) => void;
  isSubmitting: boolean;
  isSubmitted: boolean;
};

const ReviewDialog: FC<Props> = ({
  open,
  closeModal,
  onSubmit,
  isSubmitting,
  isSubmitted,
}) => {
  const [itemReview, setItemReview] = useState<ReviewProps>({} as ReviewProps);

  const handleSubmit = () => {
    onSubmit(itemReview);
    setItemReview({} as ReviewProps);
  };

  return (
    <Dialog maxWidth="md" open={open} onClose={closeModal}>
      <DialogTitle>Add a Review</DialogTitle>
      <DialogContent style={{ minWidth: '28rem', minHeight: '5rem' }}>
        {isSubmitted ? (
          <Typography>Review Submitted!</Typography>
        ) : isSubmitting ? (
          <Typography>Submitting Review...</Typography>
        ) : (
          <FormControl style={{ minWidth: '28rem' }}>
            <Stack spacing={1}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <p>Communication</p>
                <Rating
                  name="half-rating"
                  precision={0.5}
                  onChange={(_, newValue) =>
                    setItemReview({ ...itemReview, communication: newValue })
                  }
                />
              </Grid>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <p>Item Condition</p>
                <Rating
                  name="half-rating"
                  precision={0.5}
                  onChange={(_, newValue) =>
                    setItemReview({ ...itemReview, condition: newValue })
                  }
                />
              </Grid>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
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
        )}
      </DialogContent>
      {!isSubmitted && !isSubmitted ? (
        <DialogActions>
          <Button onClick={handleSubmit} disabled={isSubmitting}>
            Submit Review
          </Button>
        </DialogActions>
      ) : null}
    </Dialog>
  );
};

export default ReviewDialog;
