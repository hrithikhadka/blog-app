import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  return (
    <main>
      <form action="">
        <input type="title" placeholder={"Title"} />
        <input type="summary" placeholder={"Summary"} />
        <input type="file" />
        <ReactQuill />
      </form>
    </main>
  );
};

export default CreatePost;
