import React, {Component} from "react";
import classes from '../Quiz/Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
    state = {
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'what color is the sky?',
                rightAnswerId: 3,
                id: 1,
                answers: [
                    {text: 'black', id: 1},
                    {text: 'green', id: 2},
                    {text: 'blue', id: 3},
                    {text: 'yellow', id: 4}
                ]
            },
            {
                question: 'In what year was Lviv founded?',
                rightAnswerId: 1,
                id: 2,
                answers: [
                    {text: '1265', id: 1},
                    {text: '1300', id: 2},
                    {text: '1400', id: 3},
                    {text: '1200', id: 4}
                ]
            }
        ]

    }

    onAnswerClickHandler = answerId => {
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success'){
                return
            }
        }
        console.log(answerId);

        const  question = this.state.quiz[this.state.activeQuestion];

        if(question.rightAnswerId === answerId) {

            this.setState({answerState: {[answerId]: 'success'} } );

            const timeOut = window.setTimeout(()=> {
                if(this.isQuizFinished()) {
                    this.state.setState({
                        isFinished: true
                    });
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                window.clearTimeout();
            }, 1000)

        } else {
            this.setState({answerState: {[answerId]: 'error'}})
        }



    }
    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }


    render() {
        return (
            <div className={classes.Quiz}>

                <div className={classes.QuizWrapper}>
                    <h1>Answer all questions</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[0].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;