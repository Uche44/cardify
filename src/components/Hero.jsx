import { useTypingEffect } from "../hooks/useTypingEffect";

const Hero = () => {
  const text = useTypingEffect([
    "Id Cards",
    "Business Cards",
    "Drivers License.",
  ]);

  return (
    
    <section className="h-[90vh] flex flex-col items-center relative">
      <h1 className="text-[2.5rem] text-white font-bold mt-[50%] text-center md:mt-[10rem] md:text-[4rem]">
        Create Your Perfect <br />{" "}
        <span className="text-center text-green-800">{text}</span>
      </h1>

      <div className="w-fit flex gap-2 absolute top-[56%]">
        <button className="bg-green-800 px-7 py-3 rounded-[10px] mt-6 font-semibold text-white hover:brightness-125">
          Join Us
        </button>
        <button className="border-white border-2 px-5 py-3 rounded-[10px] mt-6 font-semibold text-white cursor-pointer">
          Request Demo
        </button>
      </div>
    </section>
    
  );
};

export default Hero;
