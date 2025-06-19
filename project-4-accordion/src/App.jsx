import { useState } from 'react';
import questions from './questions'
import './App.css'

function App() {
 const  [isExpanded, setExpanded] = useState(false); 

 const SingleQuestion = (expanded) => {
  setExpanded(!expanded);
 }
//Napravi komponentu singleQuestion 
//u tu komponentu napravi state isExpanded 
//Na click dugmeta stavi da je taj isExpanded obrnuto od onoga sto je bio

  return (
    <>
      <div className='main'>
        <h1 className='title'>Questions</h1>
        {questions.map(question => {
          const { id, title, info } = question;
          return (
          <>
{/*           <SingleQuestion/>
 */}        <li key={id} className='question'>
            <div>
              <h2>{title}</h2>
              <button onClick={() => SingleQuestion(isExpanded)}>+</button>
            </div>
            <h3 style={{display: isExpanded ? 'block' : 'none'}}>{info}</h3>
          </li>
          </>
          )
        })}
      </div>
    </>
  )
}

export default App;
