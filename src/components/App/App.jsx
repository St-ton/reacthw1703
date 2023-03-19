import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import AllPosts from "../../pages/AllPosts/AllPosts";
import AddPost from "../../pages/AddPost/AddPost";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleDeletePost = (postIndex) => {
    const confirmDelete = window.confirm("Are you sure to DELETE the POST ?");
    if (confirmDelete) {
      const updatedPosts = posts.filter((post, index) => index !== postIndex);
      setPosts(updatedPosts);
      toast("👍 Post successfully deleted !");
    }
  };

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="app">
      <div className="header">
        <Nav />
      </div>
      <div className="main">
        <Routes>
          <Route
            path="/"
            element={<AllPosts posts={posts} onDeletePost={handleDeletePost} />}
          />
          <Route
            path="/addpost"
            element={<AddPost onAddPost={handleAddPost} />}
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
      <ToastContainer autoClose={1000} theme="light" hideProgressBar={true} />
    </div>
  );
}
