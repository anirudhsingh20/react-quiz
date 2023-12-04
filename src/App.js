import { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import QUIZ_DATA from './Quiz.json'

function App() {
  const quiz_data = [...QUIZ_DATA.questions];
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  function handleSelect(optionId) {
    if (quiz_data[questionIndex].correctAnswer === optionId) {
      setScore((prevScore) => prevScore + 1);
    }

    if (questionIndex + 1 < quiz_data.length) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      console.log('completed');
    }
  }

  return (
    <>
      <header className='navbar'>React Quiz</header>
      {(questionIndex + 2 < quiz_data.length) ? <Quiz answers={quiz_data[questionIndex].options} question={quiz_data[questionIndex].question} onSelect={handleSelect} /> :  `Completed score: ${score}`}
    </>
  );
}

export default App;
