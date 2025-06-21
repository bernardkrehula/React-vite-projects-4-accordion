import { useState } from "react";
import questionsData from './questionsData';

const SingleQuestion = ({id, title, info }) => {
  const  [getExpanded, setExpanded] = useState(false); 
  
  const updateQuestions = (id) => {
    const foundQuestion = questionsData.find(question => question.id === id);
    
    setExpanded(foundQuestion.isExpanded = !foundQuestion.isExpanded);
  }
  return(
    <li className='question' key={id}>
      <div>
        <h2>{title}</h2>
        <button onClick={() => updateQuestions(id)}>
        </button>
      </div>
      <h3 style={{ display: getExpanded ? 'block' : 'none' }}>{info}</h3>
    </li>
  )
}
export default SingleQuestion;