import React, { useState } from 'react';
import './App.css';
import QuestionCardScreen from './Features/QuestionCard/Views/QuestionCardScreen';
import { fetchQuizQuestions , Difficulty , QuestionState } from './API';

type AnswerObject = {
  question : string,
  answer: string,
  correct: boolean,
  correctAnswer : string,
}

const TOTAL_QUESTIONS = 10;

function App() {

  const [isLoading , setIsLoading] = useState(false);
  const [questions , setQuestions] = useState<QuestionState[]>([]);
  const [number , setNumber] = useState(0);
  const [userAnswers , setUserAnswers] = useState<AnswerObject[]>([]);
  const [score , setScore] = useState(0);
  const [isGameOver , setIsGameOver] = useState(true);

  const startTrivia = async () =>{
    setIsLoading(true);
    setIsGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS , Difficulty.EASY);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);

    setIsLoading(false);
  }

  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) =>{
    if(!isGameOver){
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      correct || setScore(prev => prev + 1);

      const answerObject = {
        question : questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers(prev => [...prev , answerObject]);
    }
  }

  const nextQuestion = () =>{
    const nextNumQuestion = number + 1;
    if(nextNumQuestion === TOTAL_QUESTIONS){
      setIsGameOver(true);
    } else{
      setNumber(prev => prev + 1);
    }
 
  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      { isGameOver || userAnswers.length === TOTAL_QUESTIONS ?
      (      
        <button className="start" onClick={ startTrivia }>
          Start
        </button>
      ) : null
      }

    { !isGameOver || (<p className="score">Score: { score }</p>) }
      
      { isLoading && <p >Loading Question ...</p> }

      { !isLoading && !isGameOver ?
        <QuestionCardScreen 
        questionNum={number + 1} 
        totalQuestions={TOTAL_QUESTIONS}
        question={ questions[number].question }  
        answers={ questions[number].answers } 
        callback={checkAnswer} 
        userAnswer={userAnswers ? userAnswers[number] : undefined }
        ></QuestionCardScreen> : null
      }
    
      <button className="next" onClick={ nextQuestion }>
        Next Question
      </button>
    </div>
  );
}

export default App;
