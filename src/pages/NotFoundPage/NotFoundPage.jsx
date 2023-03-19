import React from "react";
import s from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={s.wrap}>
      <h1>404 Not Found</h1>
      <p>
        <img src={require("./notfound.jpg")} alt="404 Not Found" />
      </p>
      <h2>The page you're looking for doesn't exist.</h2>
    </div>
  );
}
