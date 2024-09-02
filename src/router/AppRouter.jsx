import "../App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "../pages/About";
import { AuthContext } from "../context/AuthContext";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Help from "../pages/Help";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Media from "../pages/Media";
import { useContext } from "react";

function AppRouter() {
  const { isLogin } = useContext(AuthContext);
  return (
    <Router>
      <main className="bg-white dark:bg-slate-800">
        <Header />
        <Routes>
          {isLogin ? (
            <>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/help" element={<Help />}></Route>
              <Route path="/media" element={<Media />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
            </>
          ) : (
            <>
              <Route path="*" element={<Login />}></Route>
            </>
          )}
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default AppRouter;
