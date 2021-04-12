import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Question from "./questions/question";

import quizService from "../../services/quiz-service";

const Quiz = () => {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        quizService.findQuestionForQuiz(quizId)
            .then((questions) => {
                setQuestions(questions)
            })
    }, [])
    const {quizId} = useParams()
    return(
        <div className="container">
            <h3>Quiz {quizId} </h3>
            <ul className="list-group">
                {
                    questions.map((question) => {
                        return(
                            <li className="list-group-item">
                                <Question question={question}/>
                                {/*{JSON.stringify(question)}*/}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quiz