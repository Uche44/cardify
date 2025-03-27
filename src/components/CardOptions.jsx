import { FaIdCard, FaShoppingBag, FaBus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const CardOptions = () => {
  
  const navigate = useNavigate();

  return (
    <section className="card-options w-full h-fit mt-6 px-4 py-2 md:flex md:gap-4 md:px-36 md:mt-14">
      <div className="py-4 px-6 border-[1px] border-gray-200 rounded-[1rem] md:px-8 md:p-10 md:hover:border-green-800">
        <div className="h-fit w-fit flex gap-2 md:mb-2">
          <FaIdCard className="text-4xl text-green-800" />
          <h2 className="font-bold text-[1.5rem] md:text-3xl">Id Cards</h2>
        </div>
        <p>Provide a government-issued ID to create your ID card.</p>
        <button
          onClick={() => navigate("/id-form")}
          className="px-4 py-2 mt-2 bg-green-800 cursor-pointer rounded-[5px] md:px-6 md:mt-3  active:scale-95 active:bg-green-900 "
        >
          Get Yours
        </button>
      </div>

      {/* business card div */}
      <div className="py-4 px-6 border-[1px] border-gray-200 rounded-[1rem] mt-3 md:mt-0 md:px-8 md:p-10 md:hover:border-green-800">
        <div className="h-fit w-fit flex gap-2 md:mb-2">
          <FaShoppingBag className="text-4xl text-green-800" />
          <h2 className="font-bold text-[1.5rem] md:text-3xl">
            Business Cards
          </h2>
        </div>
        <p>Enhance your professional identity with a custom business card.</p>
        <button
          onClick={() => navigate("/biz-form")}
          className="px-4 py-2 mt-2 bg-green-800 cursor-pointer rounded-[5px]  md:px-6 md:mt-3  active:scale-95 active:bg-green-900"
        >
          Get Yours
        </button>
      </div>

      {/* drivers license div */}
      <div className="py-4 px-6 border-[1px] border-gray-200 rounded-[1rem] mt-3 md:mt-0 md:px-8 md:p-10 md:hover:border-green-800">
        <div className="h-fit w-fit flex gap-2 md:mb-2">
          <FaBus className="text-4xl text-green-800" />
          <h2 className="font-bold text-[1.5rem] md:text-3xl">
            Drivers License
          </h2>
        </div>
        <p>Apply for a state-issued drivers license for road accessibility.</p>
        <button onClick={() => navigate("/driver-form")} 
        className="px-4 py-2 mt-2 bg-green-800 cursor-pointer rounded-[5px]  md:px-6 md:mt-3 active:scale-95 active:bg-green-900">
          Get Yours
        </button>
      </div>
    </section>
  );
};
export default CardOptions;
