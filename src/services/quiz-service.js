// const QUIZ_URL = "http://localhost:4000/api/quizzes"
const QUIZ_URL = "https://wbdv-sp21-server-node-zhezhao.herokuapp.com/"

export const findQuizzesForCourse = () =>
    fetch(QUIZ_URL)
        .then(response => response.json())


export const findQuestionForQuiz = (quizId) =>
    fetch(`${QUIZ_URL}/${quizId}/questions`)
        .then(response => response.json())

export const submitQuiz = (quizId, questions) => {
    fetch(`${QUIZ_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export const findAttemptsForQuiz = (quizId) =>
    fetch(`${QUIZ_URL}/${quizId}/attempts`)
        .then(response => response.json())

export default {
    findQuizzesForCourse,
    findQuestionForQuiz,
    submitQuiz,
    findAttemptsForQuiz
}
