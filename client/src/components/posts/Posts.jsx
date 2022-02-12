import Ads from "../Ads/Ads";
import Post from "../post/Post";
import "./posts.css";

function Posts({ posts }) {
  return (
    <>
     
      <hr />
      <div className="posts">
        {posts.map((p) => (
          <Post post={p} />
        ))}
        ;
      </div>
    </>
  );
}

export default Posts;
