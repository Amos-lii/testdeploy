import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Post from "./components/Post";
import Test from "./components/Test";
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Post" exact component={Post} />
        <Route path="/Test" exact component={Test} />
      </Switch>
    </Router>
  );
}

export default App;
