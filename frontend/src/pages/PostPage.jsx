import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    // console.log(params);
    // console.log(id);
    fetch(`http://localhost:5000/post/${id}`).then((resp) => {
      resp.json().then((postInfo) => {
        setPostInfo(postInfo);
        // console.log(postInfo);
      });
    });
  }, []);

  if (!postInfo) {
    return "";
  }
  return (
    <div className="post-page">
      <time>{format(new Date(postInfo.createdAt), "MMM d, yyyy")}</time>
      <h1>{postInfo.title}</h1>
      <div className="author">by @{postInfo.author.username}</div>
      <div className="post-image">
        <img src={`http://localhost:5000/${postInfo.photo}`} alt="" />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
  );
};

export default PostPage;
