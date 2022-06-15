import userIcon from "../assets/profile-icon.svg";
import commentIcon from "../assets/comments-icon.svg";
import votesIcon from "../assets/vote-icon.svg";
import dayjs from "dayjs";

const ReviewCard = ({ review }) => {
  const date = dayjs(review.created_at, "MMM DD YY h-mm");
  console.log(date);
  return (
    <li className="rev-card">
      <img
        className="rev-card-img"
        src={review.review_img_url}
        alt={review.title}
      />
      <h3>{review.title}</h3>

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
    </li>
  );
};

export default ReviewCard;
