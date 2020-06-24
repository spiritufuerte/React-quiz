import React, {Component} from "react";
import classes from '../Quiz/Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
    state = {
        quiz: [
            {
                question: 'what color is the sky?',
                answers: [
                    {text: 'black', id: 1},
                    {text: 'green', id: 2},
                    {text: 'blue', id: 3},
                    {text: 'yellow', id: 4}
                ]
            }
        ]

    }

    render() {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Answer all questions</h1>
                    <ActiveQuiz
                    answers={this.state.quiz[0].answers}
                    question={this.state.quiz[0].question}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;