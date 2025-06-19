import { useState } from 'react';
import questions from './questions'
import './App.css'

const SingleQuestion = ({id, title, info}) => {
  const  [isExpanded, setExpanded] = useState(false); 
  console.log(title)
  return(
    <li className='question' key={id}>
      <div>
        <h2>{title}</h2>
        <button onClick={() => setExpanded(prev => !prev)}>
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      <h3 style={{ display: isExpanded ? 'block' : 'none' }}>{info}</h3>
    </li>
  )
}
//Napravi komponentu singleQuestion 
//u tu komponentu napravi state isExpanded 
//Na click dugmeta stavi da je taj isExpanded obrnuto od onoga sto je bio
function App() {
  return (
    <>
      <div className='main'>
        <h1 className='title'>Questions</h1>
          {questions.map(question => {
            const { id, title, info } = question;
            return (
              <SingleQuestion id={id} title={title} info={info}/>
            )
          })}
      </div>
    </>
  )
}

export default App;
