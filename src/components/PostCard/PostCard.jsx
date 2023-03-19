import React from "react";
import s from "./PostCard.module.css";

export default function PostCard({ post, onDeletePost }) {
  return (
    <div className={s.post_card}>
      <h2 className={s.post_title}>{post.title}</h2>
      <p className={s.post_text}>{post.text}</p>
      <span className={s.post_author}>by {post.author}</span>
      <div>
        <span className={s.post_date}>
          {new Date(post.timestamp).toLocaleString()}
        </span>
        <button className={s.post_btn} onClick={onDeletePost}>
          Delete post
        </button>
      </div>
    </div>
  );
}
