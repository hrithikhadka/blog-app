import { useEffect, useState } from "react";
import Posts from "../Posts";
import Title from "../Title";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <main>
      <Title />
      {posts.length > 0 &&
        posts.map((post) => <Posts key={post._id} post={post} />)}
    </main>
  );
};

export default IndexPage;
