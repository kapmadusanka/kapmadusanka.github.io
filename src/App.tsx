import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Metrics from "./components/Metrics";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="noise-overlay relative w-full overflow-x-hidden">
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Projects />
        <TechStack />
        <Metrics />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
