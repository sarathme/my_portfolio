import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import GridContainer from "./ui/GridContainer";

function App() {
  return (
    <>
      <Header />
      <GridContainer>
        <Hero />
        <About />

        <Skills />
        <Projects />
        <Contact />

        <Footer />
      </GridContainer>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
