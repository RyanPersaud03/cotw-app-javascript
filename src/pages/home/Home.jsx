import React from "react";
import Header from "../../components/header/Header";
import "./home.css";

function Home() {
  return (
    <>
    <Header />
      <div className="main">
        <ul>
          <li>Reserve</li>
          <li>Wildlife</li>
          <li>Wepons</li>
          <li>Callers</li>
          <li>Tools</li>
          <li>Other</li>
          <li>Fast Search</li>
          <li>Settings</li>
          <li>About</li>
        </ul>
      </div>
    </>
  );
}

export default Home;
