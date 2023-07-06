import React from "react";
import "./app-header.css"

const AppHeader = ({active, done}) => {
    return (
        <div className="head">
            <h1 className="title">My Todo List</h1>
            <h2 className="statusBar">Done {done} tasks, left to do {active} </h2>
        </div>
    );
  };

  export default AppHeader;