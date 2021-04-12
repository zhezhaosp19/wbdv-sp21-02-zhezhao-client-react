import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

import quizService from "../../services/quiz-service";

const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizService.findQuizzesForCourse()
            .then((quizzes) => {
                setQuizzes(quizzes)
            })
    }, [])
    return(
        <div className="container">
            <h2>Quizzes</h2>
            <ul className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <li className="list-group-item">
                                {quiz.title}
                                <Link to={`/courses/${courseId}/quizzes/${quiz._id}`} className="btn btn-primary float-right">Start</Link>

                            </li>
                        )
                        // <Divider>
                    })
                }
            </ul>
        </div>
    )
}

export default QuizzesList