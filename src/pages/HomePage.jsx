import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import CardOptions from "../components/CardOptions";
import Guide from "../components/Guide";
import Footer from "../components/Footer";
import useScrollAnimation from "../hooks/useScrollAnimation";
const HomePage = () => {
  useScrollAnimation();
  return (
    <section className="w-full min-h-[100vh] bg-black text-white flex flex-col items-center">
      <Header />
      <Hero />
      <img
        src="/images/card.jpg"
        alt="card image"
        className="scroll-element w-[85%] h-[14rem] md:w-[70%] md:h-[30rem]"
      />

      <About />
      <CardOptions />
      <Guide />
      <Footer />
    </section>
  );
};
export default HomePage;
