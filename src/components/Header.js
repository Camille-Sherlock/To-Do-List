import React from "react";
import InputWrapper from "./InputWrapper";
import { Route } from "react-router-dom";
import EchartsTest from "./EchartsTest";
import { BrowserRouter as Router } from "react-router-dom";

export default function Header(props) {
  const { mode, addNew, query, setSearchQuery } = props;
  return (
    <Router>
      <header>
        <h1>Things To Do</h1>
        <InputWrapper {...{ mode, addNew, query, setSearchQuery }} />
        <Route path="/echarts" exact children={<EchartsTest />} />
      </header>
    </Router>
  );
}
