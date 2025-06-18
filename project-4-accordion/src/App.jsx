import questions from './questions'
import './App.css'

function App() {
  const showInfo = () => {
    
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
              <button onClick={showInfo}>+</button>
            </div>
            <h3>{info}</h3>
          </li>
          )
        })}
      </div>
    </>
  )
}

export default App
