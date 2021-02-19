import React from 'react'

const CourseRow = ({title, owner, lastModify, deleteCourse, course}) =>
    <tr>
        <td>
            <link to="/courses/editor">
                {title}
            </link>
        </td>
        <td>{owner}</td>
        <td>{lastModify}</td>
        <td>
            <i className="fas fa-check"></i>
            <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
            <i className="fas fa-edit"></i>
        </td>
    </tr>

export default CourseRow