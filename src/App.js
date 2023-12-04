import './App.css';
import Quiz from './components/Quiz';
import QUIZ_DATA from './Quiz.json'

function App() {

  let answers = QUIZ_DATA.questions[0].options;
  console.log(typeof answers);
  return (
    <>
      <header className='navbar'>
        React Quiz
      </header>
      <Quiz answers={answers}  question={QUIZ_DATA.questions[0].question} />
    </>
  );
}

export default App;
