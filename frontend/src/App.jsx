import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
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
