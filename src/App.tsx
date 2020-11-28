import React, { useState } from 'react';
import './App.css';
import SettingQuestionScreen from './Features/SettingQuestion/Views/SettingQuestionScreen';
import { Setting } from '../src/Features/SettingQuestion/Models/SettingQuestion';
import QuestionAreaScreen from './Features/QuestionArea/Views/QuestionAreaScreen';

type AnswerObject = {
  question : string,
  answer: string,
  correct: boolean,
  correctAnswer : string,
}

function App() {

  const [isSettingScreen , setIsSettingScreen] = useState(true);

  const [setting , setSetting] = useState<Setting>({
    totalQuestions : 10,
    category:"any",
    difficulty:"any",
    type:"any"
  });

  // const startTrivia = async () =>{
  //   const newQuestions = await fetchQuizQuestions(setting);
  //   console.log(newQuestions);
  // }

  // !isSettingScreen && startTrivia();

  // const [questions , setQuestions] = useState<QuestionState[]>([]);
  // const [number , setNumber] = useState(0);
  // const [userAnswers , setUserAnswers] = useState<AnswerObject[]>([]);
  // const [score , setScore] = useState(0);
  // const [isGameOver , setIsGameOver] = useState(true);

  // const startTrivia = async () =>{
  //   setIsLoading(true);
  //   setIsGameOver(false);

  //   const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS , Difficulty.EASY);
  //   setQuestions(newQuestions);
  //   setScore(0);
  //   setUserAnswers([]);
  //   setNumber(0);

  //   setIsLoading(false);
  // }

  // const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) =>{
  //   if(!isGameOver){
  //     const answer = e.currentTarget.value;
  //     const correct = questions[number].correct_answer === answer;
  //     correct || setScore(prev => prev + 1);

  //     const answerObject = {
  //       question : questions[number].question,
  //       answer,
  //       correct,
  //       correctAnswer: questions[number].correct_answer,
  //     };

  //     setUserAnswers(prev => [...prev , answerObject]);
  //   }
  // }

  // const nextQuestion = () =>{
  //   const nextNumQuestion = number + 1;
  //   if(nextNumQuestion === TOTAL_QUESTIONS){
  //     setIsGameOver(true);
  //   } else{
  //     setNumber(prev => prev + 1);
  //   }
 
  // }

  return (
    <>
      <h1 className="text-center">Quiz App</h1>
      <div className="main">
          { isSettingScreen ?
            <SettingQuestionScreen setting={ setting } setSetting={ setSetting } setIsSettingScreen={ setIsSettingScreen }></SettingQuestionScreen> : 
            <QuestionAreaScreen setIsSettingScreen={ setIsSettingScreen } setting={ setting }></QuestionAreaScreen>
          }     
      </div>
    </>
  );
}

export default App;
