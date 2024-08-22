import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Navbar/Layout";
import PostPage from "./PostPage/PostPage";
import ClientPro from "./Profile/clientpro";
import SearchPage from "./SearchPage/SearchPage";
import OurProfileRenderer from "./OurProfile/OurProfileRenderer";
import ContactUs from "./ContactUs/ContactUs";
import AboutUs from "./AboutUs/AboutUs";
import Login from "./Login/Login";
import Application from "./Profile/Application";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/postJob" element={<PostPage />} />
          <Route path="/account" element={<ClientPro />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/ourProfile/:id" element={<OurProfileRenderer />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Apple" element={<Application />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
