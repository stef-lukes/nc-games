import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import IncVotes from "../components/IncVotes";

import userIcon from "../assets/profile-icon.svg";
import commentIcon from "../assets/comments-icon.svg";
import dateIcon from "../assets/date-icon.svg";

const SingleReview = () => {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    getReviewById(review_id)
      .then((review) => {
        setSingleReview(review);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, [review_id]);

  if (isError)
    return (
      <>
        <h2>Oops! Something went wrong...</h2>
        <h3>{isError.msg}</h3>
      </>
    );

  if (isLoading) return <p className="loading">Loading...</p>;

  return (
    <main className="single-rev">
      <section className="single-rev-body">
        <img src={singleReview.review_img_url} alt="" />
        <h2>{singleReview.title}</h2>
        <h3>
          <span>Category:</span> {singleReview.category}
        </h3>

        <h3>
          <span>Designer:</span> {singleReview.designer}
        </h3>
        <div className="user-and-date">
          <div className="keyIcon-value">
            <img src={userIcon} alt="" />
            <h4>{singleReview.owner}</h4>
          </div>
          <div className="keyIcon-value">
            <img className="w20" src={dateIcon} alt="" />
            <h4>
              {singleReview.created_at.slice(0, 10) +
                ` @ ${singleReview.created_at.slice(11, 16)}`}
            </h4>
          </div>
        </div>
        <p>{singleReview.review_body}</p>
      </section>
      <section className="single-rev-info">
        <div className="keyIcon-value">
          <IncVotes singleReview={singleReview} />
        </div>
        <div className="keyIcon-value">
          <img src={commentIcon} alt="" />
          <h4>{singleReview.comment_count}</h4>
        </div>
      </section>
    </main>
  );
};

export default SingleReview;
