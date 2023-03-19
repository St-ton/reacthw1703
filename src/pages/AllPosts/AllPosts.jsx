import PostCard from "../../components/PostCard/PostCard";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import s from "./AllPosts.module.css";

export default function AllPosts({ posts, onDeletePost }) {
  return (
    <>
      <h1 className={s.h1}>All Posts</h1>
      <div className={s.container}>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <PostCard
              key={index}
              post={post}
              onDeletePost={() => onDeletePost(index)}
            />
          ))
        ) : (
          <p className={s.p}>No posts yet. Why not add one?</p>
        )}
      </div>
      {/* <ToastContainer autoClose={1000} theme="light" hideProgressBar={true} /> */}
    </>
  );
}
