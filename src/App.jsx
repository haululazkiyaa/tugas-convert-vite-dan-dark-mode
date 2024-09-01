import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Media from "./pages/Media";

export const AppContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.loginStatus || false);
  const [darkTheme, setDarkTheme] = useState(localStorage.darkTheme || false);

  const handleLogin = () => {
    localStorage.setItem("loginStatus", true);
    setIsLogin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("loginStatus");
    setIsLogin(false);
  };

  const changeTheme = () => {
    if (darkTheme) {
      localStorage.removeItem("darkTheme");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("darkTheme", true);
      document.documentElement.classList.add("dark");
    }
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    }
  });

  const appProps = {
    isLogin,
    handleLogin,
    handleLogout,
    darkTheme,
    changeTheme,
  };

  return (
    <AppContext.Provider value={appProps}>
      <Router>
        <main className="bg-white dark:bg-slate-800">
          <Header {...appProps} />
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
                <Route path="*" element={<Login {...appProps} />}></Route>
              </>
            )}
          </Routes>
          <Footer />
        </main>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
