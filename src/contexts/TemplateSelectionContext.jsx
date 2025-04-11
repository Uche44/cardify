import { createContext, useState, useContext } from "react";

// the context
const TemplateContext = createContext();

// the provider component
export const TemplateProvider = ({ children }) => {
  const [chooseTemplate, setChooseTemplate] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({});
  const [showRear, setShowRear] = useState(false);
  // const [showRearTwo, setShowRearTwo] = useState(false);

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    setChooseTemplate(false);
  };

  return (
    <TemplateContext.Provider
      value={{
        formData,
        setFormData,
        chooseTemplate,
        setChooseTemplate,
        selectedTemplate,
        setSelectedTemplate,
        handleTemplateSelect,
        // showRearOne,
        // setShowRearOne,
        showRear,
        setShowRear,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplateContext = () => useContext(TemplateContext);
