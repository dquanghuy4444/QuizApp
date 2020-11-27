import React from 'react';
import { QuestionCardModel , getRatioQuestion } from '../Models/QuestionCard';

function QuestionCardScreen(prop : QuestionCardModel) {

  return (
    <div>
      <p className="number">
        Question : { getRatioQuestion(prop) }
      </p>
      <p dangerouslySetInnerHTML={{ __html: prop.question }}></p>
      <div>
        {
          prop.answers.map(answer =>(
            <div>
              <button disabled={prop.userAnswer} value={answer} onClick={prop.callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default QuestionCardScreen;
