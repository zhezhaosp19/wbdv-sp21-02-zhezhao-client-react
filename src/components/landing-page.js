import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <>
        <h1>Welcome to WebDev Course Manager</h1>
        <div className="list-group">
            <Link to="/courses/table" className="list-group-item-light">
                Courses Table
            </Link>
            <Link to="/courses/grid" className="list-group-item-light">
                Courses Grid
            </Link>
            <Link to="/courses/editor" className="list-group-item-light">
                Course Editor
            </Link>
        </div>
    </>