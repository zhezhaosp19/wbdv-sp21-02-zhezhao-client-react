import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = () =>
    <div>
        <h2>
            <Link to="/courses/table">
                <i className="fas fa-arrow-left"></i>
            </Link>
            Course Editor
        </h2>
    </div>

export default CourseEditor