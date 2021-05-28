import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./containers/Home/index";
import SignIn from "./containers/SignIn/SignIn.jsx";
import SignUp from "./containers/SignUp/SignUp.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
