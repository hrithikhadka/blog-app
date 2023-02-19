import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Layout";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path={"/register"} element={<div>register page</div>} />
      </Route>
    </Routes>
  );
}

export default App;
