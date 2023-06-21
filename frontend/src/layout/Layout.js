import React from "react";
import "../App.css";

function Layout() {
  return (
    <>
      <h1>Movie Madness</h1>
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-md-2 side-bar">
            <p>Side Bar</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
