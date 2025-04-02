import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./Component/about";
import Contact from "./pages/contact";
import Navbar from "./common/components/header/Navbar";
import Footer from "./common/components/footer/footer"; // Ensure 'Footer' is correctly capitalized

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route path="/contact" element={<Contact />} />{" "}
          <Route path="/projects" element={<h1> Projrcts </h1>} />
        </Routes>{" "}
        <Footer />
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
