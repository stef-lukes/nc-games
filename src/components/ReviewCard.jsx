import { Link } from "react-router-dom";
import userIcon from "../assets/profile-icon.svg";
import commentIcon from "../assets/comments-icon.svg";
import votesIcon from "../assets/vote-icon.svg";
import dateIcon from "../assets/date-icon.svg";

const ReviewCard = ({ review }) => {
  return (
    <Link className="rev-card" to={`/reviews/${review.review_id}`}>
      <img
        className="rev-card-img"
        src={review.review_img_url}
        alt={review.title}
      />
      <h3>{review.title}</h3>

      <div className="bottom-left">
        <div className="rev-card-icon tooltip">
          <span class="tooltiptext ttt-user">timestamp</span>
          <img className="dateIcon" src={dateIcon} alt="" />
          <h5>
            {review.created_at.slice(0, 10) +
              ` @ ${review.created_at.slice(11, 16)}`}
          </h5>
        </div>
      </div>

      <div className="bottom-right">
        <div className="rev-card-icon tooltip">
          <span class="tooltiptext ttt-user">user</span>
          <img src={userIcon} alt="" />
          <h4>{review.owner}</h4>
        </div>
        <div className="rev-card-icon tooltip">
          <span class="tooltiptext ttt-votes">votes</span>
          <img src={votesIcon} alt="" />
          <h5>{review.votes}</h5>
        </div>
        <div className="rev-card-icon tooltip">
          <span class="tooltiptext ttt-comments">comments</span>
          <img src={commentIcon} alt="" />
          <h5>{review.comment_count}</h5>
        </div>
      </div>
    </Link>
  );
};

export default ReviewCard;
