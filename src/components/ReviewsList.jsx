import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../utils/api";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews().then((reviews) => {
      console.log(reviews);
      setReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p className="loading">Loading...</p>;

  return (
    <section className="rev-section">
      <h2>Current Reviews</h2>
      <ul className="rev-list">
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </section>
  );
};

export default ReviewsList;
