import React, { useEffect, useState } from 'react';
import { QuestionCardModel  } from '../Models/QuestionCard';
import { QuestionState  } from './../../QuestionArea/Models/QuestionArea';

type Props = {
  question:QuestionState,
  score:number,
  setScore:React.Dispatch<React.SetStateAction<number>>,
  setNumQuestionFunc:any,
  totalQuestions:number
};

const QuestionCardScreen : React.FC<Props> = ({question , score , setScore , setNumQuestionFunc , totalQuestions}) =>{
  console.log(question);
  const {  answers } = question;

  const setMyAnswer = (myAnswer : string) =>{
    if(myAnswer === question.correct_answer){
      setScore(score + 1);
    }
    setNumQuestionFunc()
  }

  return (
    <div>
      <h3 dangerouslySetInnerHTML={{__html: question.question }} />
      <div className="row">
        {
          answers.map((answer:string) => <button className="btn btn-primary col-6 mt-2 " style={{ height : "50px" }} onClick={ () =>{setMyAnswer(answer)}}>{answer}</button>)
        }
      </div>
    </div>
  );
}

export default QuestionCardScreen;
