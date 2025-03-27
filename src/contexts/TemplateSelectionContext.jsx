import { createContext, useState, useContext } from "react";

// Create the context
const TemplateContext = createContext();

// Create the provider component
export const TemplateProvider = ({ children }) => {
  const [chooseTemplate, setChooseTemplate] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    setChooseTemplate(false);
  };

  return (
    <TemplateContext.Provider
      value={{
        chooseTemplate,
        setChooseTemplate,
        selectedTemplate,
        setSelectedTemplate,
        handleTemplateSelect,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

// export const useTemplateContext = () => {
//   const context = useContext(TemplateContext);
//   if (!context) {
//     throw new Error(
//       "useTemplateContext must be used within a TemplateProvider"
//     );
//   }
//   return context;
// };
export const useTemplateContext = () => useContext(TemplateContext);
