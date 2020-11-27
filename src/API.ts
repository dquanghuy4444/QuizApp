import { shuffleArray } from './ultis';

export type Question = {
    category : string,
    correct_answer:string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type:string
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty{
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (amount:number , difficulty :Difficulty)=>{
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&diffculty=${difficulty}&type=multiple`;
    const response = await fetch(endPoint);
    const data = await response.json();
    return data.results.map((question:Question) =>(
        {
            ...question,
            answers: shuffleArray([...question.incorrect_answers , question.correct_answer])
        }
    ));
}