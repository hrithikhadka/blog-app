import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  async function newPost(e) {
    const postData = new FormData();
    postData.set("title", title);
    postData.set("summary", summary);
    postData.set("content", content);
    postData.set("image", images[0]);
    e.preventDefault();
    // console.log(images);
    const reponse = await fetch("http://localhost:5000/post", {
      method: "POST",
      body: postData,
    });
    console.log(await reponse.json());
  }

  return (
    <main>
      <form action="" onSubmit={newPost}>
        <input
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="summary"
          placeholder={"Summary"}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <input type="file" onChange={(e) => setImages(e.target.files)} />
        <ReactQuill
          value={content}
          modules={modules}
          formats={formats}
          onChange={(newVal) => setContent(newVal)}
        />
        <button style={{ marginTop: ".5rem", backgroundColor: "#222" }}>
          Publish
        </button>
      </form>
    </main>
  );
};

export default CreatePost;
