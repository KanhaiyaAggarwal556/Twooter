import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./components/Post/createpost/CreatePost.jsx";
import Posts from "./components/Post/view_post/Posts.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import Login from "./components/Login/logIn.jsx";
import SignUpForm from "./components/SignUp/Signup.jsx";
import ContactUs from "./components/ContactUs/Contact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Posts /> },
      { path: "/create-post", element: <CreatePost /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/aboutUs", element: <AboutUs /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/SignUp", element: <SignUpForm /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
