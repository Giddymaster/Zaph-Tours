import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Destinations from "./pages/Destinations/Destinations";
import Trips from "./pages/Trip-Types/Trips";
import Contacts from "./pages/contacts/Contacts";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/trip-types" element={<Trips />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;
