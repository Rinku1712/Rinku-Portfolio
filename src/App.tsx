import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <div className="bg-scene" aria-hidden />
      <div className="bg-grid" aria-hidden />
      <div className="bg-noise" aria-hidden />

      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Highlights />
        <Contact />
      </main>
    </div>
  );
}
