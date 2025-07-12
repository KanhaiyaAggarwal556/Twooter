import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./components/Post/createpost/CreatePost.jsx";
import Posts from "./components/Post/view_post/Posts/Posts.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import ContactUs from "./components/ContactUs/Contact.jsx";
import Search from "./components/SearchPage/search_page.jsx";
import Tweety from "./components/Tweety/tweety.jsx";
import Notifications from "./components/Notifications/notifications.jsx";
import LoginPage from "./components/Account/Login"
import SignUp from "./components/Account/SignUp"
import PasswordResetSystem from "./components/Account/ForgotPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Posts /> },
      { path: "/create-post", element: <CreatePost /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/search", element: <Search /> },
      { path: "/Tweety", element: <Tweety /> },
      { path: "/aboutUs", element: <AboutUs /> },
      { path: "/notifications", element: <Notifications /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/forgotpassword", element: <PasswordResetSystem /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
