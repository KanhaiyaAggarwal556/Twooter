import React, { useState } from "react";
import {Link} from "react-router-dom"

export default function Sidebar() {
  const [to, setTo] = useState("/");
  
  const handleClick1 = () => {
    setTo( "/");
  };
  const handleClick2 = () => {
    setTo("/create-post" );
    console.log(to);
  };
  return (
    <div >
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Twooter</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={handleClick1}>
            <Link to="/" className={`nav-link text-white ${ to==="/" && "active "}`} aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </Link> 
          </li>
          <li onClick={handleClick2}>
            <Link to="/create-post" className={`nav-link text-white ${to==="/create-post" && "active"}`}>
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
}
