import styles from './index.module.css';
import RatingCard from '../components/rating-card';
import ReviewItem from '../components/review-item';
import { useState } from 'react';
import { Button, Container, Grid, Stack } from '@mui/material';

const placeholderReviews = [
  'Matt And Jamie Were Wonderful Hosts For Our Party! The Palace Proved To Be The Perfect Place For Our Group. Everyone Was Super Comfortable, The Rooms Were Beautiful And We Had',
  'Why Do We See Rainbows In Soap Bubbles? What Makes An Oil Slick So Oddly Beautiful? Iridescent Colors, Which Transform Depending On The Angle You Look At Them, Are All Over Nature.',
  'Matt And Jamie Were Wonderful Hosts For Our Party! The Palace Proved To Be The Perfect Place For Our Group. Everyone Was Super Comfortable, The Rooms Were Beautiful And We Had',
  'Why Do We See Rainbows In Soap Bubbles? What Makes An Oil Slick So Oddly Beautiful? Iridescent Colors, Which Transform Depending On The Angle You Look At Them, Are All Over Nature.',
];

export function Index() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.page}>
      <Container maxWidth="lg">
        <h1 className={styles['text-lg']}>Reviews</h1>
        <div className={styles['rating']}>
          <Stack spacing={2}>
            <ReviewItem placeholder="Communication" value={90} />
            <ReviewItem placeholder="Item Condition" value={90} />
            <ReviewItem placeholder="Value" value={90} />
          </Stack>
        </div>
        <Grid container spacing={2} justifyContent="space-between">
          {placeholderReviews.map((message, i) => (
            <RatingCard message={message} key={i} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Index;
