import { useState } from "react";
import { updateQuestions } from "./App";

const SingleQuestion = ({ id, title, info }) => {
  const [getExpanded, setExpanded] = useState(false);

  return (
    <li className="question">
      <div>
        <h2>{title}</h2>
        <button onClick={() => setExpanded(updateQuestions(id))}>
          {getExpanded ? '-' : '+'}
        </button>
      </div>
      <h3 style={{ display: getExpanded ? 'block' : 'none' }}>{info}</h3>
    </li>
  );
};

export default SingleQuestion;