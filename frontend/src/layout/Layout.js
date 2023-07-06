import React from "react";
import Navbar from "./Navbar";
import Routes from "./Routes";
import "../App.css";

function Layout() {
  return (
    <>
    <Navbar />
     <div className="container-fluid ">
        <div className="row h-100">
          <div className="col-md-2 side-bar">
            <p>Side Bar</p>
          </div>
          <div className="col">
          <Routes />
        </div>
        </div>
      </div>
      </>
     
  );
}

export default Layout;
