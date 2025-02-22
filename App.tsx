import * as React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Dashboard from "./pages/dashboard";
import Index from './pages/index';
import SignIn from './pages/signin';
import SignUp from "./pages/signup";
import BiasAnalysisPage from "./pages/neu";

function App() {

  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/neutral" component={BiasAnalysisPage} />
        </Switch>
  </BrowserRouter>
  );
}

export default App;
