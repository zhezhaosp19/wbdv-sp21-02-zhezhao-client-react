import React from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";

const LessonTabs = (
    {
        lessons = [
            {_id: "123", title: "Lesson A"},
            {_id: "234", title: "Lesson B"},
            {_id: "345", title: "Lesson C"}
        ]
    }) =>
    <div>
        <h1>Lessons</h1>
        <ul className="nav nav-tabs">
            {
                lessons.map(lesson =>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <EditableItem item={lesson}/>
                        </a>
                    </li>
                )
            }
            {/*<li className="nav-item">*/}
            {/*    <a className="nav-link" href="#">Lesson 1</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*    <a className="nav-link active" href="#">Lesson 2</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*    <a className="nav-link" href="#">Lesson 3</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*    <a className="nav-link" href="#">Lesson 4</a>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
            {/*    <a className="nav-link" href="#">Lesson 5</a>*/}
            {/*</li>*/}
        </ul>
    </div>

const stmp = (state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm = (dispatch) => ({})

export default connect(stmp, dtpm)(LessonTabs);