import React from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";

const LessonTabs = (
    {
        lessons = [],
        createLesson,
        deleteLesson,
        updateLesson
    }) =>
    <div>
        <h1>Lessons</h1>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <EditableItem
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                item={lesson}
                            />
                        </a>
                    </li>
                )
            }
            <li className="nav-item">
                <i onClick={createLesson} className="nav-link fas fa-plus plus btn btn-sm" id="plus-topic"></i>
            </li>
        </ul>
    </div>

const stmp = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => {
    return {
        createLesson: () => dispatch({type: "CREATE_LESSON"}),
        deleteLesson: (item) => dispatch({
            type: "DELETE_LESSON",
            lessonToDelete: item
        }),
        updateLesson: (lesson) => dispatch({
            type: "UPDATE_LESSON",
            lesson
        })
    }
}

export default connect(stmp, dtpm)(LessonTabs);