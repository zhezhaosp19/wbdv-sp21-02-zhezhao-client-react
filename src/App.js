import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      //browser router allows us to choose one component to another component
      <BrowserRouter>
          <div className="container-fluid">
              <CourseManager/>
          </div>
      </BrowserRouter>
  );
}

export default App;
