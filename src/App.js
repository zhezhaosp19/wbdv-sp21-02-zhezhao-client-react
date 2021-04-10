import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/landing-page";
import {BrowserRouter, Route} from "react-router-dom";
import CourseManager from "./components/course-manager";
import QuizzesList from "./components/quizzes/quizzes-list";
import Quiz from "./components/quizzes/quiz";

function App() {
  return (
      //browser router allows us to choose one component to another component
      <BrowserRouter>
          <div>
              {/*<CourseManager/>*/}
              <Route path="/" exact={true} component={LandingPage}/>
              <Route path="/courses" component={CourseManager}/>
              <Route path="/courses/:courseId/quizzes" exact={true} component={QuizzesList}/>
              <Route path="/courses/:courseId/quizzes/:quizId" exact={true} component={Quiz}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
