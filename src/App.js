import React from "react";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero"; // Import the Hero component
import About from "./About"; // Import the About component
import Projects from "./Projects"; // Import the Projects component
import Contact from "./Contact"; // Import the Contact component
import Footer from "./Footer"; // Import the Footer component

function App() {
  return (
    <div className="App font-mono">
      <Header />
      <Hero /> {/* Add the Hero component */}
      <About /> {/* Add the About component */}
      <Projects /> {/* Add the Projects component */}
      <Contact /> {/* Add the Contact component */}
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

export default App;
