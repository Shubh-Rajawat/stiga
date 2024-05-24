import "./App.css";
import "./css/style.css";
import "./css/font-awesome.css";
import "./css/responsive.css";
import Header from "./Header";
import Footer from "./Footer";
import { Home } from "./Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
