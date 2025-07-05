import "./App.css";
import Header from "./components/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import PostsProvider from "./Store/post-list-store.jsx";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <PostsProvider>
      <div className="main">
        <Sidebar />
        <div className="body">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostsProvider>
  );
}

export default App;
