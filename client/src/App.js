import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import Bubbles from "./components/Bubbles";

function App(props) {
  console.log(props)
  const [colorList, setColorList] = useState([]);
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <BubblePage />
        {/* <Bubbles /> */}
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  console.log("TCL: state", state);
  return {
    isLoading: state.isLoading,

    colors: state.colors
  };
};
export default connect(
  mapStateToProps,
  {}
)(App);