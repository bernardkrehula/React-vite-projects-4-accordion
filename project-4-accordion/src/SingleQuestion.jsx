import { useState } from "react";

const SingleQuestion = ({ id, title, info, isExpanded, updateQuestions }) => {

  return (
    <li className="question">
      <div>
        <h2>{title}</h2>
        <button onClick={() => updateQuestions(id)}>
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      <h3 style={{ display: isExpanded ? 'block' : 'none' }}>{info}</h3>
    </li>
  );
};

export default SingleQuestion;