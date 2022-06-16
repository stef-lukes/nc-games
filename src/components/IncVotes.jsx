import { useState } from "react";
import { incVotes } from "../utils/api";

import votesIcon from "../assets/vote-icon.svg";
import upVoteIcon from "../assets/upVote.svg";
import downVoteIcon from "../assets/downVote.svg";

const IncVotes = ({ singleReview }) => {
  const [voteChange, setVoteChange] = useState(0);
  const [err, setErr] = useState(null);

  const upVote = (event) => {
    setVoteChange((currVotes) => currVotes + 1);
    incVotes(singleReview.review_id, 1).catch((err) => {
      setVoteChange((currVotes) => currVotes - 1);
      setErr("Something went wrong, please try again.");
    });
    event.currentTarget.disabled = true;
  };

  const downVote = (event) => {
    setVoteChange((currVotes) => currVotes - 1);
    incVotes(singleReview.review_id, -1).catch((err) => {
      setVoteChange((currVotes) => currVotes + 1);
      setErr("Something went wrong, please try again.");
    });
    event.currentTarget.disabled = true;
  };

  if (err) return <h2>{err}</h2>;

  return (
    <div className="vote-btns">
      <button onClick={upVote}>
        <img src={upVoteIcon} alt="" />
      </button>
      <button onClick={downVote}>
        <img src={downVoteIcon} alt="" />
      </button>
      <img src={votesIcon} alt="" />
      <h4>{singleReview.votes + voteChange}</h4>
    </div>
  );
};

export default IncVotes;
