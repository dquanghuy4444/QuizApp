import { shuffleArray } from './../../../ultis';
import { Setting } from './../../SettingQuestion/Models/SettingQuestion';

export type Question = {
    category : string,
    correct_answer:string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type:string
}

export type QuestionState = {
    category : string,
    correct_answer:string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type:string,
    answers: string[]
}

// export type QuestionState = Question & { answers: string[] };

// export enum Difficulty{
//     EASY = "easy",
//     MEDIUM = "medium",
//     HARD = "hard",
// }

export const fetchQuizQuestions = async (setting : Setting )=>{
    const DEFAULT_PARAM = "any";
    let endPoint = `https://opentdb.com/api.php?amount=${setting.totalQuestions}`; 
    
    if(setting.difficulty !== DEFAULT_PARAM){
        endPoint += `&difficulty=${setting.difficulty}`;
    } 
    if(setting.type !== DEFAULT_PARAM){
        endPoint += `&type=${setting.type}`;
    } 
    if(setting.category !== DEFAULT_PARAM){
        endPoint += `&category=${setting.category}`;
    } 
    
    const response = await fetch(endPoint);
    const data = await response.json();
    return data.results.map((question:Question) =>(
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers , question.correct_answer])
        }
    ));
}