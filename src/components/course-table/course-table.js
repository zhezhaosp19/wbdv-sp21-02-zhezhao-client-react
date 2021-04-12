import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import './../course.css'

export default class CourseTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="course-table-grad">
                    <table className="table">
                        <tbody>
                        <tr className="top-bar-table">
                            <td className="priority-1">Title</td>
                            <td className="priority-2">Owned by
                            </td>
                            <td className="priority-3">Last Modified</td>
                            <td className="priority-1"></td>
                            <td className="priority-4">
                                <div className="float-right">
                                    <i className="fas fa-folder btn"></i>
                                    <i className="fas fa-sort-alpha-up btn"></i>
                                    <Link to="/courses/grid">
                                        <i className="fas fa-th btn"></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>

                        {/*<CourseRow title="CS1234" owner="alice" lastModify={"1/2/21"}/>*/}
                        {/*<CourseRow title="CS2345" owner="bob" lastModify={"11/2/20"}/>*/}

                        {
                            this.props.courses.map((course, idx) =>
                                <CourseRow
                                    deleteCourse={this.props.deleteCourse}
                                    updateCourse={this.props.updateCourse}
                                    key={idx} //unique identifier, index is the key
                                    course={course}
                                    title={course.title}
                                    owner={course.owner}
                                    lastModify={course.lastModify}
                                />)
                        }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}