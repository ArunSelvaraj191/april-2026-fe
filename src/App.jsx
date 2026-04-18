import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./modules/LoginPage";
import Navbar from "./modules/Navbar";
import RegisterPage from "./modules/RegisterPage";
import { ThemeProvider } from "./modules/context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
