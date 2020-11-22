import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import './styles/App.css';


const App = () => {
return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pages/About" component={About} />
      </Switch>
    </Router>
  );
};

export default App;