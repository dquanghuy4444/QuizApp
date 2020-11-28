import React from 'react';
import { QuestionState } from './../../QuestionArea/Models/QuestionArea'

export interface QuestionCardModel {
    question:QuestionState,
    score:number,
    setScore:React.Dispatch<React.SetStateAction<number>>,
}



