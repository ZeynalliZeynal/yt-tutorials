import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./data/consts.js";

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${baseUrl}posts`);
        setPosts(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div className="App">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="title">{post.title}</div>
          <div className="body">{post.postText}</div>
          <div className="footer">{post.username}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
