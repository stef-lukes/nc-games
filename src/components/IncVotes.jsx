import { useState } from "react";
import { incVotes } from "../utils/api";

import upVoteIcon from "../assets/upVote.svg";
import downVoteIcon from "../assets/downVote.svg";

const IncVotes = ({ singleReview, setSingleReview }) => {
  const [voteChange, setVoteChange] = useState(0);

  const upVote = (event) => {
    setVoteChange((currVotes) => currVotes + 1);
    incVotes(setSingleReview.review_id, 1);
    console.log(singleReview);
  };

  const downVote = (event) => {
    setVoteChange((currVotes) => currVotes - 1);
    incVotes(setSingleReview.review_id, 1);
  };

  return (
    <div className="vote-btns">
      <button onClick={upVote} onChange={downVote}>
        <img src={upVoteIcon} alt="" />
      </button>
      <button onClick={downVote} onChange={upVote}>
        <img src={downVoteIcon} alt="" />
      </button>
    </div>
  );
};

export default IncVotes;
