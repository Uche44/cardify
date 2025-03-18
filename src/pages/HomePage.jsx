import Header from "../components/Header";
import Hero from "../components/Hero";
import CardOptions from "../components/CardOptions";
import Guide from "../components/Guide";
const HomePage = () => {
  return (
    <section className="w-full min-h-[100vh] bg-black text-white flex flex-col items-center">
      <Header />
      <Hero />
      <img
        src="/images/card.jpg"
        alt="card image"
        className="w-[85%] h-[14rem] md:w-[70%] md:h-[30rem]"
      />
      {/* <div className="w-[85%] h-[14rem] md:w-[70%] md:h-[30rem] bg-img"></div> */}
      <CardOptions />
      <Guide/>
    </section>
  );
};
export default HomePage;
