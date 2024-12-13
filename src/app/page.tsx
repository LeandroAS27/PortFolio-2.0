//components
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Initial from "./components/Home";
import ModalHeader from "./components/ModalHeader";
import Projects from "./components/Projects";
import Services from "./components/Services";
import WhatsappButton from "./components/WhatsappButton";

export default function Home() {
  return (
    <>
      <header id="home">
        <Initial/>
      </header>

      <main>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
      </main>

      <footer>
        <Footer/>
      </footer>

      <WhatsappButton/>
      <ModalHeader/>
    </>
  );
}