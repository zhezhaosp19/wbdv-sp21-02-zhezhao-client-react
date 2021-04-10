import React, {useState} from 'react'
import {Link, useParams} from "react-router-dom";
import '../course.css'

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
    // const {layout} = useParams()

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    const courseDelete = () => {
        deleteCourse(course)
        setEditing(false)
    }

    return (
        <tr>
            <td className="priority-1">
                {
                    !editing &&
                    <Link to={`/courses/table/editor/${course._id}`}>
                        <i className="fas fa-file"></i>
                        {title}
                    </Link>
                }
                {
                    editing &&
                    <input type="text"
                           onChange={(event) => setNewTitle(event.target.value)}
                           value={newTitle}
                           className="form-control"/>
                }
            </td>
            <td className="priority-2">{owner}</td>
            <td className="priority-3">{lastModify}</td>
            <td className="priority-3">
                <Link to={`/courses/${course._id}/quizzes`}>Quizzes</Link>
            </td>
            <td className="priority-4">
                <div className="float-right">
                    {
                        editing &&
                        <i onClick={() => saveTitle()} className="fas fa-check btn btn-sm"></i>
                    }
                    {
                        !editing &&
                        <i onClick={() => setEditing(true)} className="fas fa-edit btn btn-sm"></i>
                    }
                    {
                        editing &&
                        <i onClick={() => courseDelete()} className="fas fa-trash btn btn-sm"></i>
                    }
                </div>

            </td>
        </tr>
    )}


export default CourseRow