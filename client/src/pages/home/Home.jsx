import Header from "../../components/header/Header";
import "./home.css";
import Posts from "./../../components/posts/Posts";
import Sidebar from "./../../components/sidebar/Sidebar";
// import Ads from "../../components/Ads/Ads";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Ads from "../../components/Ads/Ads";

function Home() {
  // FETCH post using axios
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      {/* <Ads/> */}
      <div className="home">  
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

export default Home;
