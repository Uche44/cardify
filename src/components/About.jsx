import { FaUser } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";
const About = () => {
  useScrollAnimation();
  return (
    <section
      id="about"
      className="scroll-element flex flex-col items-center w-full h-fit mt-6 px-8 py-2 md:gap-4 md:px-36 md:mt-14"
    >
      <div className="flex items-center justify-center h-[4rem] w-[14rem] gap-2">
        <h2 className="text-[1.6rem] font-bold text-green-800 mb-6 md:text-4xl">
          Who We Are
        </h2>
        <FaUser className="text-[2rem] mb-6 text-green-800" />
      </div>
      <p className="text-center">
        At Cardify, we make professional ID cards and business cards easy, fast,
        and stylish. Choose from a variety of templates, customize your details,
        and generate high-quality cards in seconds. Whether for work, events, or
        personal branding, Cardify helps you stand out effortlessly. Design,
        preview, and download your perfect card today!
      </p>
    </section>
  );
};

export default About;
