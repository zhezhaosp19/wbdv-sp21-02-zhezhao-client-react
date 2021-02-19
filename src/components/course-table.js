import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <link to="/courses/grid">
                    <i className="fas fa-2x fa-th float-right"></i>
                </link>

                <h2>Course Table</h2>

                <table className="table">
                    <tbody>
                        {/*<CourseRow title="CS1234" owner="alice" lastModify={"1/2/21"}/>*/}
                        {/*<CourseRow title="CS2345" owner="bob" lastModify={"11/2/20"}/>*/}
                        {
                            this.props.courses.map((course, idx) =>
                                <CourseRow
                                    deleteCourse={this.props.deleteCourse}
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
        )
    }
}