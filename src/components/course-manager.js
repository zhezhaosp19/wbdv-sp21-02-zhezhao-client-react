import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Route} from "react-router-dom";
import courseService from "../services/course-service";

class CourseManager extends React.Component {
    state = {
        //property of class variable
        courses: []
        //     {title: "CS1234", owner: "alice", lastModify: "1/2/21"},
        //     {title: "CS5520", owner: "dan", lastModify: "12/22/20"},
        //     {title: "CS5610", owner: "emma", lastModify: "2/14/21"}
        // ]
    }

    componentDidMount = () =>
        courseService.findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "me",
            lastModify: "Never"
        }

        courseService.createCourse(newCourse)
            .then(course => this.setState((prevState) => {
            let nextState = {...prevState}
            nextState.courses.push(newCourse)
            return nextState
        }))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses =
                        prevState.courses.filter(course => course !== courseToDelete)
                    return nextState
                })
            })
    }

    updateCourse = (courseToUpdate) => {
        courseService.updateCourse(courseToUpdate._id, courseToUpdate)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(course =>
                    course._id === courseToUpdate._id ? courseToUpdate : course)
            })))
    }


    render() {
        return (
            <div>
                <h1>Course Manager</h1>
                <button onClick={this.addCourse}>Add Course</button>
                {/*show course table only if the url is in /courses/table */}
                <Route path="/courses/table">
                    <CourseTable
                        deleteCourse={this.deleteCourse}
                        updateCourse={this.updateCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>

                {/*<Route path="/courses/editor"*/}
                {/*       render={(props) =>*/}
                {/*           <CourseEditor props={props}/>*/}
                {/*       }>*/}
                {/*</Route>*/}

                <Route path="/courses/editor"
                       render={(props) =>
                           <CourseEditor
                               {...props}/>
                       }>
                </Route>
            </div>
        )
    }
}


export default CourseManager