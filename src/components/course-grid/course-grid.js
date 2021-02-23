import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import '../course.css';

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div className="container-fluid">
        <div className="course-table-grad">
            <div className="navbar form-group row top-bar">
                <div className="col-5 priority-3">Recent Documents</div>
                <div className="col-3 priority-3">Owned by me
                    <i className="fas fa-caret-down btn"></i>
                </div>
                <div className="col priority-4">
                    <div className="float-right">
                        <i className="fas fa-folder btn"></i>
                        <i className="fas fa-sort-alpha-up btn"></i>
                        <Link to="/courses/table">
                            <i className="fas fa-list btn"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/*<h2>Course Grid {courses.length}</h2>*/}
        <div className="row class-card">
            {
                courses.map(course =>
                    <CourseCard
                        course={course}
                        deleteCourse={deleteCourse}
                        title={course.title}
                        updateCourse={updateCourse}
                    />
                )
            }
        </div>
    </div>

export default CourseGrid