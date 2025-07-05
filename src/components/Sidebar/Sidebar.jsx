import  { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [to, setTo] = useState("/");

  const handleClick1 = () => {
    setTo("/");
  };
  const handleClick2 = () => {
    setTo("/create-post");
    console.log(to);
  };
  const handleClick3 = () => {
    setTo("/aboutus");
    console.log(to);
  };
  const handleClick4 = () => {
    setTo("/contact-us");
    console.log(to);
  };
  return (
    <div>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar">
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
            <Link
              to="/"
              className={`nav-link text-white ${to === "/" && "active "}`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </Link>
          </li>
          <li onClick={handleClick2}>
            <Link
              to="/create-post"
              className={`nav-link text-white ${
                to === "/create-post" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </Link>
          </li>
          <li onClick={handleClick3}>
            <Link
              to="/aboutus"
              className={`nav-link text-white ${
                to === "/aboutus" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              About Us
            </Link>
          </li>
          <li onClick={handleClick4}>
            <Link
              to="/contact-us"
              className={`nav-link text-white ${
                to === "/contact-us" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Contact US
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
