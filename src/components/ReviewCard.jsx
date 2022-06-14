const ReviewCard = ({ review }) => {
  return (
    <li className="rev-card">
      <img src={review.review_img_url} alt={review.title} />
      <h3>{review.title}</h3>
      <h4>{review.owner}</h4>
      <h4>
        {review.created_at.slice(0, 10)} @ {review.created_at.slice(11, 16)}
      </h4>
      <div className="rev-card-icon">
        <h5>{review.votes}</h5>
      </div>
      <div className="rev-card-icon">
        <h5>{review.comment_count}</h5>
      </div>
    </li>
  );
};

export default ReviewCard;
