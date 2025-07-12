import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
// import Footer from "./components/Footer/Footer.jsx";
import PostsProvider from "./Store/post-list-store.jsx";
import RightSidebar from "./components/RightSidebar/RightSidebar.jsx";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <PostsProvider>
      <div className="main">
        <Sidebar />
        <div className="body">
          {/* <Header /> */}
          
          <Outlet />
          {/* <Footer /> */}
        </div>
        <RightSidebar/>
      </div>
    </PostsProvider>
  );
}

export default App;
