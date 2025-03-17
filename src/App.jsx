import Headers from "./components/Headers/headers";
import Hero from "./components/Hero/hero";
import Companies from "./components/Companies/companies";
import Residencies from "./components/Residencies/residencies";
import Value from "./components/Value/value";
import Contact from "./components/Contact/contact";
import "./app.css";

function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient" />
        <Headers />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
    </div>
  );
}

export default App;
