import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Posts from "./pages/Posts/Posts";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  function addToPosts(obj) {
    setPosts([obj, ...posts]);
    console.log(posts);
  }

  function removePost(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: "DELETE",
    }).then((res) => {
      setPosts(posts.filter((p) => p.id !== postId));
    });
  }

  return (
    <div className="App">
      <Header addToPosts={addToPosts} />
      <Posts posts={posts} removePost={removePost} />
    </div>
  );
}

export default App;
