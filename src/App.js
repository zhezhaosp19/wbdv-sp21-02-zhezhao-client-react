import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/landing-page";
import {BrowserRouter, Route} from "react-router-dom";
import CourseManager from "./components/course-manager";

function App() {
  return (
      //browser router allows us to choose one component to another component
      <BrowserRouter>
          <div>
              {/*<CourseManager/>*/}
              <Route path="/" exact={true} component={LandingPage}/>
              <Route path="/courses" component={CourseManager}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
