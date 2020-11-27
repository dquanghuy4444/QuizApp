import React from 'react';

export interface QuestionCardModel {
    question: string,
    answers: string[],
    callback: any,
    userAnswer: any,
    questionNum: number,
    totalQuestions: number,
}


export const getRatioQuestion = (q: QuestionCardModel) :string => {
    return `${q.questionNum} / ${q.totalQuestions}`;
}


