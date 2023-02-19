import React from "react";
import { HiArrowRight } from "react-icons/hi";

const SinglePost = () => {
  return (
    <>
      <li className="single-post">
        <article>
          <div className="single-post-wrapper">
            <div className="left-side">
              <img
                src="https://ichef.bbci.co.uk/news/240/cpsprodpb/10974/production/_128665976_4218ce01d77f96e1814ccc318025928331c5bc160_328_4818_27111000x563.jpg"
                alt=""
              />
              <p>
                {" "}
                <strong>David Rahul,</strong>
                {""} August 7,2021
              </p>
            </div>
            <div className="right-side">
              <h2>Russia rains missiles in Ukraine</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores expedita, natus doloremque hic velit delectus quia
                quibusdam? Debitis reiciendis magni quidem in rem amet.
              </p>
              <a href="/#">
                Read more{" "}
                <span>
                  <HiArrowRight />
                </span>
              </a>
            </div>
          </div>
        </article>
      </li>
    </>
  );
};

export default SinglePost;
