import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import { getReviews } from "../utils/api";

const ReviewsList = () => {
  const { category } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviews(category).then((reviews) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [category]);

  if (isLoading) return <p className="loading">Loading...</p>;

  return (
    <section className="rev-section">
      <h2 className="rev-list-heading">
        {category ? `${category} Games` : "All Reviews"}
      </h2>
      <ul className="rev-list">
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </section>
  );
};

export default ReviewsList;
