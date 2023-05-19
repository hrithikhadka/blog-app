import React from "react";
import { HiArrowRight } from "react-icons/hi";
import Format from "date-fns/format";
import { Link } from "react-router-dom";

const SinglePost = ({
  title,
  _id,
  summary,
  photo,
  author,
  content,
  createdAt,
}) => {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <div className="left-side">
          {/* <img
            src="https://as2.ftcdn.net/v2/jpg/04/01/10/45/1000_F_401104518_VX8EVoEuhxfYPk2pj3d6nMkB50xHuHRF.jpg"
            alt=""
          /> */}
          <p>
            {" "}
            {author.username}
            {""} {Format(new Date(createdAt), "MMM d, yyyy")}
          </p>
        </div>
        <div className="right-side">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
          <p>{summary} </p>
          <Link to={`/post/${_id}`}>
            Read more{" "}
            <span>
              <HiArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
