import { useState, useEffect } from "react";
import { getReviewComments } from "../utils/api";

const Comments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getReviewComments(review_id).then(({ comments }) => {
      console.log(comments);
      setComments(comments);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) return <p className="loading">Loading...</p>;

  if (comments.length === 0)
    return (
      <>
        <h3>Comments:</h3>
        <p>This post currently has no comments</p>
      </>
    );

  return (
    <>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="single-comment">
              <div className="comm-user">
                <h4>{comment.author}</h4>
              </div>
              <p>{comment.body}</p>
              <div className="comm-timestamp">
                <h5>{comment.created_at}</h5>
              </div>
              <div className="comm-votes">
                <h5>{comment.votes}</h5>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Comments;
