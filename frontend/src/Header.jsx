import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      method: "GET",
      credentials: "include",
    }).then((rsp) => {
      rsp.json().then((userDetails) => {
        setUsername(userDetails.username);
      });
    });
  }, []);

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create Post</Link>
            <a href="">Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
