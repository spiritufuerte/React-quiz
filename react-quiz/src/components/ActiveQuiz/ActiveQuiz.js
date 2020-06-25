import React from "react";
import classes from '../ActiveQuiz/ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";
import AnswerItem from "./AnswersList/AnswerItem/AnswerItem";

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>{props.answerNumber}</strong>&nbsp;
                {props.question}
            </span>

            <small> {props.answerNumber} of {props.quizLength}</small>
        </p>

        <ul>
            <AnswersList
                state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}/>
        </ul>
    </div>
)

export default ActiveQuiz;