import styles from './index.module.css';
import RatingCard from '../components/review-card';
import ReviewItem from '../components/review-item';
import { useState } from 'react';
import { Button, Container, Grid, Stack } from '@mui/material';
import ReviewDialog from '../components/review-dialog';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { blue } from '@mui/material/colors';

const placeholderReviews = [
  'Matt And Jamie Were Wonderful Hosts For Our Party! The Palace Proved To Be The Perfect Place For Our Group. Everyone Was Super Comfortable, The Rooms Were Beautiful And We Had',
  'Why Do We See Rainbows In Soap Bubbles? What Makes An Oil Slick So Oddly Beautiful? Iridescent Colors, Which Transform Depending On The Angle You Look At Them, Are All Over Nature.',
  'Matt And Jamie Were Wonderful Hosts For Our Party! The Palace Proved To Be The Perfect Place For Our Group. Everyone Was Super Comfortable, The Rooms Were Beautiful And We Had',
  'Why Do We See Rainbows In Soap Bubbles? What Makes An Oil Slick So Oddly Beautiful? Iridescent Colors, Which Transform Depending On The Angle You Look At Them, Are All Over Nature.',
];

export type ReviewProps = {
  message: string;
  communication: number;
  condition: number;
  value: number;
};

export type Review = {
  id: number;
  message: string;
  communication: number;
  condition: number;
  value: number;
  productId: number;
};

export type ReviewStats = {
  _avg: {
    communication: number | null;
    condition: number | null;
    value: number | null;
  };
};

export function Index() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const reviewsQuery = useQuery('getReviews', () => {
    return axios
      .get('http://localhost:3333/api/reviews')
      .then((res) => res.data as Review[]);
  });

  const reviewStatsQuery = useQuery('getStats', () => {
    return axios
      .get('http://localhost:3333/api/reviews/stats')
      .then((res) => res.data as ReviewStats);
  });

  const createReview = useMutation({
    mutationFn: (newReview) => {
      return axios.post('http://localhost:3333/api/reviews', newReview);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getReviews'] });
      queryClient.invalidateQueries({ queryKey: ['getStats'] });
    },
  });

  return (
    <div className={styles.page}>
      <Container maxWidth="lg">
        <h1 className={styles['text-lg']}>Reviews</h1>
        <div className={styles['rating']}>
          {!reviewStatsQuery.isLoading && reviewStatsQuery.data ? (
            reviewStatsQuery.data._avg.communication ? (
              <Stack spacing={2}>
                <ReviewItem
                  placeholder="Communication"
                  value={reviewStatsQuery.data._avg.communication}
                />
                <ReviewItem
                  placeholder="Item Condition"
                  value={reviewStatsQuery.data._avg.condition}
                />
                <ReviewItem
                  placeholder="Value"
                  value={reviewStatsQuery.data._avg.value}
                />
              </Stack>
            ) : (
              <Grid
                container
                justifyContent="center"
                sx={{
                  padding: '2rem',
                  border: `1px solid ${blue[100]}`,
                  color: blue[500],
                }}
              >
                No Reviews has been submitted
              </Grid>
            )
          ) : null}
          <Button
            variant="outlined"
            style={{ marginTop: '1rem' }}
            onClick={() => setModalIsOpen(true)}
          >
            Add Review
          </Button>
        </div>
        <Grid container spacing={2} justifyContent="space-between">
          {!reviewsQuery.isLoading &&
            reviewsQuery.data.map((review, i) => (
              <RatingCard message={review.message} key={i} />
            ))}
        </Grid>
        <ReviewDialog
          open={modalIsOpen}
          closeModal={() => setModalIsOpen(false)}
          onSubmit={(newReview) => createReview.mutate(newReview)}
          isSubmitting={createReview.isLoading}
          isSubmitted={createReview.isSuccess}
        />
      </Container>
    </div>
  );
}

export default Index;
