import React from "react";
import classes from '../AnswerItem/AnswerItem.module.css'
const AnswerItem = props => {
    return (
        <li className={classes.AnswerItem}>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem;