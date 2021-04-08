import React from "react";
import { StateProvider} from "./utils/GlobalState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import TakeQuiz from "./pages/TakeQuiz";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
// import QuizGen from "./pages/QuizGen"


function App() {
  return (
    <Router>
      <StateProvider>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />

            <Route exact path="/login"component={Login} />

            <Route exact path="/home" component={Home} />

            <Route exact path="/takeQuiz" component={TakeQuiz} />

            <Route exact path="/SignUp"component={SignUp} />

            <Route exact path="/search" component={Search} />

            <Route exact path="/createQuiz" component={CreateQuiz} />
            
            {/* <Route exact path="/QuizGen" component={QuizGen} /> */}

          </Switch>
        </div>
      </StateProvider>
    </Router>
  );
}

export default App;
