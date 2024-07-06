import React from "react";
import { Link } from "react-router-dom"
import Header from "../../components/header/Header";
import "./home.css";

function Home() {
  return (
    <>
    <Header />
      <div className="main">
        <ul>
          <li><Link to="/reserve">Reserve</Link></li>
          <li><Link to="/wildlife">Wildlife</Link></li>
          <li><Link to="/wepons">Wepons</Link></li>
          <li><Link to="/callers">Callers</Link></li>
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/other">Other</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Home;
