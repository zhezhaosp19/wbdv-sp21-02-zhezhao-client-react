const initialState = {
    lessons: [
        {_id: "123", title: "Lesson 1"},
        {_id: "234", title: "Lesson 2"},
        {_id: "345", title: "Lesson 3"}
    ]
}

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            // alert("create lesson ")
            const newState = {
                lessons: [
                    ...state.lessons,
                    {
                        title: "New Lesson Title",
                        id: (new Date()).getTime()
                    }
                ]
            }
            return newState
        case "DELETE_LESSON":
            alert("Remove the lesson " + action.lessonToDelete.title)
            const newState1 = {
                lessons: state.lessons.filter(lesson => lesson._id !== action.lessonToDelete._id)
            }
            return newState1
        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(lesson => {
                    if(lesson._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return lesson
                    }
                })
            }
        default:
            return state
    }
}

export default lessonReducer;