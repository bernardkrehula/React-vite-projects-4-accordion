import { useState } from 'react';
import questions from './questions'
import './App.css'

function App() {
 const  [show, setShow] = useState(false); 

 const toggleShow = (id) => {
  setShow(lastState => lastState === id ? null : id)
 }

  return (
    <>
      <div className='main'>
        <h1 className='title'>Questions</h1>
        {questions.map(question => {
          const { id, title, info } = question;
          return (
          <li key={id} className='question'>
            <div>
              <h2>{title}</h2>
              <button onClick={() => toggleShow(id)}>+</button>
            </div>
            <h3 style={{display: show === id ? 'block' : 'none'}}>{info}</h3>
          </li>
          )
        })}
      </div>
    </>
  )
}

export default App;
