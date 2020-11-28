import React, { useEffect, useState } from 'react';
import QuestionCardScreen from '../../QuestionCard/Views/QuestionCardScreen';
import { fetchQuizQuestions , QuestionState } from '../Models/QuestionArea';
import './QuestionAreaScreen.css';

function QuestionAreaScreen(prop : any) {
  const { setIsSettingScreen , setting } = prop;
  const [isFinalScreen , setIsFinalScreen] = useState(false);

  const [questions , setQuestions] = useState([]);
  const [score , setScore] = useState(0);
  const [numQuestion , setNumQuestion] = useState(0);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() =>{
    let isActive = true

    const startTrivia = async () =>{
      const newQuestions = await fetchQuizQuestions(setting);
      if(isActive){
        console.log(newQuestions);
        setQuestions(newQuestions);
        setIsLoading(false);
      }
    }

    startTrivia();

    return () =>{
      isActive = false;
    };

  },[])
  

  if(isLoading){
    return (
      <h3 className="text-center mt-3">Loading ...</h3>
    )
  }

  const setNumQuestionFunc = () =>{
    if(numQuestion + 1 !== setting.totalQuestions){
      setNumQuestion(numQuestion + 1);
    }else{
      setIsFinalScreen(true);
    }
  }
  if(isFinalScreen){
    return (
      <div className="text-center">
        <h2>
          Bạn đã đạt { score } / { setting.totalQuestions } điểm
        </h2>
        <button onClick={ () => setIsSettingScreen(true) } className="btn btn-primary">Quay lại</button>
      </div>
    );
  }

  return (
    <div>
      <div className="body-questionarea">
        <QuestionCardScreen question={ questions[numQuestion] }
          score={ score }
          setScore={ setScore }
          setNumQuestionFunc={ setNumQuestionFunc }
          totalQuestions={ setting.totalQuestions }
        ></QuestionCardScreen>
      </div>
      <h3 className="text-center">Score : { score }</h3>
      <div className="header-questionarea">
        <button onClick={ setNumQuestionFunc } className="btn btn-success float-left">Bỏ qua</button>
        <button onClick={ () => setIsSettingScreen(true) } className="btn btn-primary float-right">Quay lại</button>
      </div>
    </div>
  );
}

export default QuestionAreaScreen;
