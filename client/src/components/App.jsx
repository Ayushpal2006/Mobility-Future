import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Navbar/Layout";
import PostPage from "./PostPage/PostPage";
import Clientpro from "./Profile/clientpro";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/home"
            element={
              <div className="Test">
                <h1>xHome</h1>
              </div>
            }
          />
          <Route path="/postJob" element={<PostPage />} />
          <Route path="/Account" element={<Clientpro/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
