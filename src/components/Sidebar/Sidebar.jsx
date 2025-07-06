import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../assets/twooter-logo2.png";

import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineMessage,
  AiOutlinePlusCircle,
  AiOutlineInfoCircle,
  AiOutlineMail,
  AiOutlineLogin,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

export default function Sidebar() {
  const location = useLocation();
  const { pathname } = location;
  const [open, setOpen] = useState(false);

  const activeColor = "#3f51b5";
  const createPostActiveColor = "#3949ab";
  const itemBorderRadius = "1.5rem";
  const createPostBorderRadius = "2.5rem";
  const sidebarClass = "sidebar bg-dark p-3 d-flex flex-column flex-shrink-0";

  const navItems = [
    { to: "/", icon: <AiOutlineHome className="me-2" />, label: "Home" },
    {
      to: "/search",
      icon: <AiOutlineSearch className="me-2" />,
      label: "Search",
    },
    {
      to: "/notifications",
      icon: <AiOutlineBell className="me-2" />,
      label: "Notifications",
    },
    {
      to: "/tweety",
      icon: <AiOutlineMessage className="me-2" />,
      label: "Tweety",
    },
    {
      to: "/aboutus",
      icon: <AiOutlineInfoCircle className="me-2" />,
      label: "About Us",
    },
    {
      to: "/contact-us",
      icon: <AiOutlineMail className="me-2" />,
      label: "Contact Us",
    },
    {
      to: "/login",
      icon: <AiOutlineLogin className="me-2" />,
      label: "Log in",
    },
  ];

  const SidebarContent = ({ onLinkClick, isResponsive = false }) => (
    <>
      <div
        className="w-100 d-none d-sm-flex align-items-center mb-4 px-3"
        style={{
          justifyContent: "flex-start",
          gap: "0.75rem",
          position: "absolute",
          top: "0.7rem",
          left: "3rem",
          height: "5rem",
        }}
      >
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img
            src={logo}
            alt="Twooter Logo"
            className="rounded-circle "
            style={{ width: 40, height: 40, objectFit: "cover" }}
          />
          <span className="fs-4 fw-bold text-white ms-2">Twooter</span>
        </Link>
      </div>

      <ul
        className="nav nav-pills flex-column mb-auto w-100"
        style={{
          gap: "0.5rem",
          marginTop: isResponsive ? "1rem" : "2rem",
          marginBottom: isResponsive ? "1rem" : "2rem",
          alignItems: "center",
          paddingRight: isResponsive ? 0 : "1rem",
          paddingLeft: isResponsive ? 0 : "11rem",
        }}
      >
        {navItems.map(({ to, icon, label }) => (
          <li key={to} className="w-100">
            <Link
              to={to}
              className="nav-link text-white w-100 d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: pathname === to ? activeColor : "transparent",
                color: "#fff",
                fontWeight: pathname === to ? "bold" : "normal",
                borderRadius: itemBorderRadius,
                transition:
                  "background-color 0.3s, color 0.3s, border-radius 0.3s",
                minHeight: 48,
              }}
              onClick={onLinkClick}
            >
              {icon}
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="d-flex justify-content-center pe-3"
        style={{
          marginLeft: isResponsive ? 0 : "11rem",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Link
          to="/create-post"
          className="btn fw-bold d-flex align-items-center justify-content-center"
          style={{
            backgroundColor:
              pathname === "/create-post" ? createPostActiveColor : "#fff",
            color: pathname === "/create-post" ? "#fff" : "#3949ab",
            border: "none",
            fontWeight: "bold",
            borderRadius: createPostBorderRadius,
            transition:
              "background-color 0.3s, color 0.3s, border-radius 0.3s, box-shadow 0.3s",
            boxShadow:
              pathname === "/create-post"
                ? "0 0 0 0.2rem rgba(57,73,171,.25)"
                : "none",
            minHeight: 52,
            maxWidth: 200,
            padding: "0rem 1.5rem",
          }}
          onClick={onLinkClick}
        >
          <AiOutlinePlusCircle className="me-2" />
          Create Post
        </Link>
      </div>
    </>
  );

  SidebarContent.propTypes = {
    onLinkClick: PropTypes.func,
    isResponsive: PropTypes.bool,
  };

  return (
    <>
      <button
        className="btn btn-dark d-lg-none position-fixed"
        style={{ top: 10, left: 10, zIndex: 1051 }}
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle sidebar"
      >
        {open ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      <div
        className={sidebarClass + " d-none d-lg-flex"}
        style={{
          minHeight: "100vh",
          width: "25vw",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1050,
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          className="w-100 d-flex flex-column align-items-center"
          style={{
            height: "80vh",
            justifyContent: "space-between",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          <SidebarContent />
        </div>
      </div>

      {open && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{
            background: "rgba(0,0,0,0.5)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-dark rounded-4 shadow-lg mt-4 d-flex flex-column align-items-center"
            style={{
              width: 280,
              padding: "1.5rem",
              margin: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent onLinkClick={() => setOpen(false)} isResponsive={true} />
          </div>
        </div>
      )}
    </>
  );
}