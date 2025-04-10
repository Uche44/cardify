import { useTemplateContext } from "../contexts/TemplateSelectionContext";
import { TempOne, TempTwo } from "./IdTemplate";

const IdCard = () => {
  const { selectedTemplate, formData } = useTemplateContext();

  return (
    <section className="w-full h-screen px-4 bg-black flex items-center justify-center">
      {selectedTemplate === "templateOne" ? (
        <TempOne formData={formData} />
      ) : selectedTemplate === "templateTwo" ? (
        <TempTwo formData={formData} />
      ) : (
        <div>
          <p className="text-white">
            No valid template selected. Please choose one!
          </p>
        </div>
      )}
    </section>
  );
};

export default IdCard;
