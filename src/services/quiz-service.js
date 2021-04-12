const QUIZ_URL = "http://localhost:4000/api/quizzes"

export const findQuizzesForCourse = () =>
    fetch(QUIZ_URL)
        .then(response => response.json())


export const findQuestionForQuiz = (quizId) =>
    fetch(`${QUIZ_URL}/${quizId}/questions`)
        .then(response => response.json())


export default {
    findQuizzesForCourse,
    findQuestionForQuiz
}
