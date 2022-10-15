import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import FormComponent from "./components/form/form";
import ResumeComponent from "./components/resume/resume";
import Auth from "./pages/auth.js";
import { Logout } from "./components/logout/logout.js";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={FormComponent} />
      <Route path="/view_resume/:id" exact component={ResumeComponent} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/logout" exact component={Logout} />
    </Router>
  );
}

export default App;
