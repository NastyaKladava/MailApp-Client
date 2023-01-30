import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Register from "./pages/RegisterPage/RegisterPage";
import UserProfile from "./pages/UserProfilePage/UserProfilePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Register />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/profile/:id" element={<UserProfile />} />
      </Route>
    </Routes>
  );
};

export default App;
