import styles from './index.module.css';
import RatingCard from '../components/rating-card';
import ReviewItem from '../components/review-item';

const placeholderReviews = [
  'Matt And Jamie Were Wonderful Hosts For Our Party! The Palace Proved To Be The Perfect Place For Our Group. Everyone Was Super Comfortable, The Rooms Were Beautiful And We Had',
  'Why Do We See Rainbows In Soap Bubbles? What Makes An Oil Slick So Oddly Beautiful? Iridescent Colors, Which Transform Depending On The Angle You Look At Them, Are All Over Nature.',
  'Matt And Jamie Were Wonderful Hosts For Our Party! The Palace Proved To Be The Perfect Place For Our Group. Everyone Was Super Comfortable, The Rooms Were Beautiful And We Had',
  'Why Do We See Rainbows In Soap Bubbles? What Makes An Oil Slick So Oddly Beautiful? Iridescent Colors, Which Transform Depending On The Angle You Look At Them, Are All Over Nature.',
];

export function Index() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles['text-lg']}>Reviews</h1>
        <div className={styles['rating']}>
          <ReviewItem placeholder="Communication" value={90} />
          <ReviewItem placeholder="Item Condition" value={90} />
          <ReviewItem placeholder="Value" value={90} />
        </div>
        <div className={styles['reviews']}>
          {placeholderReviews.map((message) => (
            <RatingCard message={message} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
