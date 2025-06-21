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

export const updateQuestions = (id) => {
    const foundQuestion = questionsData.find(question => question.id === id);
    return foundQuestion.isExpanded = !foundQuestion.isExpanded;
  }

function App() {
  const [questions, setQuestions ] = useState({});

  return (
    <>
      <div className='main'>
        <h1 className='title'>Questions</h1>
          {questionsData.map(question => {
            const {id, title, info} = question;
            return (
              <SingleQuestion key={id} id={id} title={title} info={info} />
            )
          })}
      </div>
    </>
  )
}

export default App;
