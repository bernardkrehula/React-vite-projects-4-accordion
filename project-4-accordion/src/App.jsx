import { useState } from 'react';
import questionsData from './questionsData'
import './App.css'
import SingleQuestion from './SingleQuestion';

//Napravi funkciju updateQuestions 
//Ta funkcija treba da primi id
//Uz pomoc toga id naci pitanje
//I updejtovati isExpanded u suprotno od onoga sto je bio
//Tu funkciju proslijedi do singleQuestion
//I pozovi je onClick u singleQuestion



function App() {
  const [questions, setQuestions ] = useState(questionsData);

  const updateQuestions = (id) => {
    
      setQuestions((prev) => {
        return prev.map((question) => {
          return question.id === id ? {...question, isExpanded: !question.isExpanded } : question
        })
      })
  }
  return (
    <>
      <div className='main'>
        <h1 className='title'>Questions</h1>
          {questions.map(question => {
            return (
              <SingleQuestion key={id} {...question} updateQuestions={updateQuestions}/>
            )
          })}
      </div>
    </>
  )
}
const bla = {name: 'Bernard'}
const bla2 = {...bla}
export default App;
