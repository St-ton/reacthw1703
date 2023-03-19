import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import s from "./AddPost.module.css";

export default function AddPost({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: uuidv4(),
      title,
      author,
      text,
      timestamp: Date.now(),
    };
    console.log(event);
    toast("👍 Post successfully created !");
    onAddPost(newPost);
    setTitle("");
    setAuthor("");
    setText("");
  };

  return (
    <>
      <h1 className={s.h1}>Add New Post</h1>
      <div className={s.container}>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.form_left}>
            <input
              type="text"
              id="title"
              value={title}
              placeholder="Title"
              onChange={handleTitleChange}
              required
            />
            <input
              type="text"
              id="author"
              value={author}
              placeholder="Author ID"
              onChange={handleAuthorChange}
              required
            />
            <button type="submit">Add Post</button>
          </div>
          <div className={s.form_right}>
            <textarea
              id="text"
              value={text}
              placeholder="Text"
              onChange={handleTextChange}
              required
            ></textarea>
          </div>
        </form>
        <ToastContainer autoClose={1000} theme="light" hideProgressBar={true} />
      </div>
    </>
  );
}
