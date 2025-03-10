import Hero from "./components/Hero/Hero";
import Home from "./pages/Home/Home";
import About from "./components/About/About";
import Destinations from "./pages/featured-destinations/Destinations";

function App() {
  return (
    <div>
      <Hero />
      <Home />
      <About />
      <Destinations />
    </div>
  );
}

export default App;
