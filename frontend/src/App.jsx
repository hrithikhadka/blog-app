import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Header from "./Header";
import CreatePost from "./pages/CreatePost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import PostPage from "./pages/PostPage";

// axios.defaults.baseURL = "http://127.0.0.1:5000";
// axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />}></Route>
        </Routes>
      </Router>
    </UserContextProvider>
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<HomePage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/register" element={<Register />} />
    //   </Route>
    // </Routes>
  );
}

export default App;
