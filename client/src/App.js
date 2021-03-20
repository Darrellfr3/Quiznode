import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages here

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />

          <Route exact path="/login"component={Login} />

          <Route exact path="/home" component={Home} />

          <Route exact path="/logout" component={Logout} />

          <Route exact path="/quiz" component={Quiz} />

          <Route exact path="/createQuiz"component={CreateQuiz} />

          <Route exact path="/takeQuiz" component={TakeQuiz} />
 
          <Route exact path="/createQuestion" component={CreateQuestion} />

          <Route component={NoMatch} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
