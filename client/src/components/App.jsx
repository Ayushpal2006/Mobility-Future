import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Navbar/Layout";
import PostPage from "./PostPage/PostPage";

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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
