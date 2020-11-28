import React, { useState } from 'react';
import './SettingQuestionScreen.css';
import { Setting } from './../Models/SettingQuestion';

function SettingQuestionScreen(prop : any ) {

    const { setting , setSetting , setIsSettingScreen } = prop;

    const startAnswer = () =>{
        setIsSettingScreen(false)
    }

    const changeTotalQuestions =(e : React.ChangeEvent<HTMLInputElement>) :void =>{
        setSetting({...setting,totalQuestions:parseInt(e.currentTarget.value)});
    }

    const changeCategory =(e : React.ChangeEvent<HTMLSelectElement>) :void =>{
        setSetting({...setting,category:e.currentTarget.value});
    }

    const changeDifficulty =(e : React.ChangeEvent<HTMLSelectElement>) :void =>{
        setSetting({...setting,difficulty:e.currentTarget.value});
    }

    const changeType =(e : React.ChangeEvent<HTMLSelectElement>) :void =>{
        setSetting({...setting,type:e.currentTarget.value});
    }

    return (
        <div>
            <div className="form-group">
                <label htmlFor="total">Số lượng câu hỏi</label>
                <input type="number" className="form-control" value={ setting.totalQuestions } 
                onChange={ changeTotalQuestions } min="3" max="15"></input>
            </div>
            <div className="form-group">
                <label htmlFor="category">Đề tài</label>
                <select className="form-control" value={ setting.category } onChange={ changeCategory }>
                    <option value="any">Tất cả đề tài</option>
                    <option value="9">General Knowledge</option><option value="10">Entertainment: Books</option><option value="11">Entertainment: Film</option><option value="12">Entertainment: Music</option><option value="13">Entertainment: Musicals &amp; Theatres</option><option value="14">Entertainment: Television</option><option value="15">Entertainment: Video Games</option><option value="16">Entertainment: Board Games</option><option value="17">Science &amp; Nature</option><option value="18">Science: Computers</option><option value="19">Science: Mathematics</option><option value="20">Mythology</option><option value="21">Sports</option><option value="22">Geography</option><option value="23">History</option><option value="24">Politics</option><option value="25">Art</option><option value="26">Celebrities</option><option value="27">Animals</option><option value="28">Vehicles</option><option value="29">Entertainment: Comics</option><option value="30">Science: Gadgets</option><option value="31">Entertainment: Japanese Anime &amp; Manga</option><option value="32">Entertainment: Cartoon &amp; Animations</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="difficulty">Độ khó</label>
                <select className="form-control" onChange={ changeDifficulty } value={ setting. difficulty }>
                    <option value="any">Tất cả độ khó</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="type">Loại câu hỏi</label>
                <select className="form-control" onChange={ changeType } value={ setting.type }>
                    <option value="any">Tất cả các loại câu hỏi</option>
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True / False</option>
                </select>
            </div>
            <button className="btn btn-primary" style={{ width : "100%" }} onClick={ startAnswer } >Bắt đầu</button>

        </div>
    );
}

export default SettingQuestionScreen;
