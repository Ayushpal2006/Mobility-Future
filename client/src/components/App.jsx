import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./Navbar/Layout";
import PostPage from "./PostPage/PostPage";
import ClientPro from "./Profile/clientpro";
import SearchPage from "./SearchPage/SearchPage";
import OurProfileRenderer from "./OurProfile/OurProfileRenderer";
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from "./AboutUs/AboutUs";
import Login from "./Login/Login";
import Home from "./Home/Home";
import TOSPage from "./TOSPage/TOSPage";
import PrivacyPage from "./Privacy/PrivacyPage";
import StackPage from "./StackPage/StackPage";
import useAuth from "../hooks/useAuth";

function App() {
  const [flashMessage, setFlashMessage] = useState("");

  const { isAuthenticated, loading } = useAuth();

  // console.log(isAuthenticated);

  //inline Css
  const loadingStyle = {
    display: loading ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 9999,
  };

  const flashMessageStyle = {
    position: "fixed",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    zIndex: 9999,
    fontSize: "1rem",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  if (loading) {
    return (
      <div style={loadingStyle} className="loading">
        Activating Backend Server..
      </div>
    );
  }

  const handleNotLoggedIn = () => {
    setFlashMessage("You must be logged in to access this page.");
    setTimeout(() => {
      setFlashMessage("");
    }, 3000);
  };

  return (
    <Router>
      <div>
        {flashMessage && (
          <div style={flashMessageStyle} className="flash-message">
            {flashMessage}
          </div>
        )}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route
              path="/postJob"
              element={
                isAuthenticated ? (
                  <PostPage />
                ) : (
                  <>
                    {handleNotLoggedIn()}
                    <Navigate to="/" />
                  </>
                )
              }
            />
            <Route
              path="/account"
              element={
                isAuthenticated ? (
                  <ClientPro />
                ) : (
                  <>
                    {handleNotLoggedIn()}
                    <Navigate to="/" />
                  </>
                )
              }
            />
            <Route
              path="/search"
              element={
                isAuthenticated ? (
                  <SearchPage />
                ) : (
                  <>
                    {handleNotLoggedIn()}
                    <Navigate to="/" />
                  </>
                )
              }
            />
            <Route
              path="/ourProfile/:id"
              element={
                isAuthenticated ? (
                  <OurProfileRenderer />
                ) : (
                  <>
                    {handleNotLoggedIn()}
                    <Navigate to="/" />
                  </>
                )
              }
            />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/tos" element={<TOSPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/stack" element={<StackPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
