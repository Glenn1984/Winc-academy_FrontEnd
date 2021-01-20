import React from "react";
import "./styles/App.css";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const App = () => {
  const state = useSelector(state => state);
  
  return (
    <Router>
      <Route
        path={["/:name", "/"]}
        render={(matchProps => {
          return (
            <>
              <Header />
              <Navbar
                {...matchProps}
                {...state}
              />
              <Main
                {...matchProps}
                {...state}
              />
              <Footer />
            </>
          )
        })} />
    </Router>
  );
}

export default App;
