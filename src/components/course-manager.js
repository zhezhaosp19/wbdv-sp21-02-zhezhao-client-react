import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from "react-router-dom";

class CourseManager extends React.Component {
    state = {
        //property of class variable
        courses: [
            {title: "CS1234", owner: "alice", lastModify: "1/2/21"},
            {title: "CS5520", owner: "dan", lastModify: "12/22/20"},
            {title: "CS5610", owner: "emma", lastModify: "2/14/21"}
        ]
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "new Owner",
            lastModify: "Never"
        }
        this.state.courses.push(newCourse)
        //update the state
        this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        // console.log(course)
        const newCourses = this.state.courses.filter(course =>
            course !== courseToDelete
        )
        this.setState({
            courses: newCourses
        })
    }


    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                <Route path="/courses/table">
                    <CourseTable
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/editor"
                       render={(props) => {

                           return <CourseEditor/>
                       }}>
                </Route>
            </div>
        )
    }
}


export default CourseManager