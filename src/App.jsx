import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Destinations from "./pages/Destinations/Destinations";
import Trips from "./pages/Trip-Types/Trips";
import Contacts from "./pages/contacts/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/featured-destinations" element={<Destinations />} />
        <Route path="/trip-types" element={<Trips />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
