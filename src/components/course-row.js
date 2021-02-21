import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {updateCourse} from "../services/course-service";

const CourseRow = (
    {
        title,
        owner,
        lastModify,
        deleteCourse,
        updateCourse,
        course
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }
    return (
        <tr>
            <td>
                {
                    !editing &&
                    <Link to="/courses/editor">
                        {title}
                    </Link>
                }
                {
                    editing &&
                    <input type="text"
                           onChange={(event) => setNewTitle(event.target.value)} value={newTitle} className="form-control"/>
                }
            </td>
            <td>{owner}</td>
            <td>{lastModify}</td>
            <td>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash btn btn-sm float-right"></i>
                {
                    editing &&
                    <i onClick={() => saveTitle()} className="fas fa-check btn btn-sm float-right"></i>
                }
                {
                    !editing &&
                    <i onClick={() => setEditing(true)} className="fas fa-edit btn btn-sm float-right"></i>
                }
            </td>
        </tr>
    )}


export default CourseRow