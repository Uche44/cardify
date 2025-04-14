import { useTemplateContext } from "../contexts/TemplateSelectionContext";
import { TempOne, TempTwo } from "./BizTemplate";
import { useState } from "react";

const BizCard = () => {
  const { selectedTemplate, formData,  } = useTemplateContext();
  const [showRear, setShowRear] = useState(false);

  return (
    <section className="w-full h-screen px-4 bg-black flex items-center justify-center">
      {selectedTemplate === "templateOne" ? (
        <TempOne
          formData={formData}
          showRear={showRear}
          setShowRear={setShowRear}
        />
      ) : selectedTemplate === "templateTwo" ? (
        <TempTwo
          formData={formData}
          showRear={showRear}
          setShowRear={setShowRear}
        />
      ) : (
        <div>
          <p className="text-white">
            No valid template selected. Please choose one!
          </p>
        </div>
      )}
      <button
        onClick={() => setShowRear(!showRear)}
        className="bg-green-800 px-4 py-2 mt-4 text-white rounded absolute bottom-[1rem] right-[1rem]"
      >
        {showRear ? "See Front" : "See Back"}
      </button>
    </section>
  );
};

export default BizCard;
