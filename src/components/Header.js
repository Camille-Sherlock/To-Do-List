import React from "react";
import InputWrapper from "./InputWrapper";

export default function Header(props) {
  const { mode, addNew, query, setSearchQuery } = props;
  return (
    <header>
      <h1>Things To Do</h1>
      <InputWrapper {...{ mode, addNew, query, setSearchQuery }} />
    </header>
  );
}
