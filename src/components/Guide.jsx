// import { FaNoteSticky } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";
const Guide = () => {
  useScrollAnimation();
  return (
    <section
      id="guide"
      className="scroll-element w-full h-fit mt-8 flex flex-col items-center"
    >
      <h2 className="text-[1.5rem] font-bold mb-4 md:text-4xl text-green-800">
        How to Create your own Card
      </h2>
      <div className="guide w-fit h-full px-4 md:flex md:flex-col md:items-start gap-4">
        <div className="flex gap-4 mb-2">
          <FaCalendar className="text-xl text-green-800" />

          <p className="md:text-[1.2rem]">Click on the card options button</p>
        </div>
        <div className="flex gap-4 mb-2">
          <FaCalendar className="text-xl text-green-800" />

          <p className="md:text-[1.2rem]">Select the card design you like</p>
        </div>
        <div className="flex gap-4 mb-2">
          <FaCalendar className="text-xl text-green-800" />

          <p className="md:text-[1.2rem]">Fill in the form with your details</p>
        </div>
        <div className="flex gap-4 mb-2">
          <FaCalendar className="text-xl text-green-800" />

          <p className="md:text-[1.2rem]">Click on the create card button</p>
        </div>
      </div>
    </section>
  );
};
export default Guide;
