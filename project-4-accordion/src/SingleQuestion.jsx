import { useState } from "react";
import questionsData from './questionsData';

const SingleQuestion = ({id, title, info, isExpanded}) => {
  const  [getExpanded, setExpanded] = useState(false); 
  
  const updateQuestions = (id, expanded) => {
    setExpanded({
      isExpanded: true
    })
    console.log(getExpanded)
  }
  return(
    <li className='question' key={id}>
      <div>
        <h2>{title}</h2>
        <button onClick={() => updateQuestions(id, isExpanded)}>
        </button>
      </div>
      <h3 style={{ display: getExpanded ? 'block' : 'none' }}>{info}</h3>
    </li>
  )
}
export default SingleQuestion;