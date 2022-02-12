import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";

function SinglePost() {
  const { user } = useContext(Context);
  // SELECT location
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  // PHOTO url
  const PF = "http://localhost:5000/images/";

  // EDIT post state initialisation
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  // FETCHING single post from mongodb
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  // HANDLE delete
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

    // HANDLE update
    const handleUpdate = async() => {
      try {
        await axios.put(`/posts/${post._id}`, {
        username: user.username , title, desc
        });
        // window.location.reload();
        setUpdateMode(false)
      } catch (err) {}
    };
    

  // RETURN single post
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {/* SINGLE post image */}
        {post.photo && (
          <img src={PF + post.photo} className="singlePostImg" alt="" />
        )}

        {/* TITLE , edit and delete button */}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            onChange={(e) =>setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon fas fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singlePostIcon fas fa-trash-alt"
                  onClick={handleDelete} //handle delete post
                ></i>
              </div>
            )}
          </h1>
        )}

        {/* SINGLE Post Info */}
        <div className="singlePostInfo">
          {/* AUTHOR and date of post */}
          <span className="singlePostAuthor">
            Author :
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostAuthor">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        {/* DESCRIPTION if its in update mode */}
        {updateMode ? (
          <textarea cols="30" rows="10"className="singlePostDescInput" value={desc} onChange={(e) =>setDesc(e.target.value)}/>
        ) : (
          <p className="singlePostDesc" >{desc}</p>
        )}
        {updateMode && (<button className="singlePostButton" onClick={handleUpdate}>Update</button>) }
        
      </div>
    </div>
  );
}

export default SinglePost;
