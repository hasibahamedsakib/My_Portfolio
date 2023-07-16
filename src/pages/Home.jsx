import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Gaper from "../Components/Gaper/Gaper";
import Portfolio from "../Components/Portfolio/Portfolio";
import Service from "../Components/Service/Service";
import Skills from "../Components/Skills/Skills";

const Home = () => {
  return (
    <div id="home">
      <section id="banner">
        <Banner />
      </section>
      {/* <Gaper /> */}
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="service">
        <Service />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
