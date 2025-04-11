import { useTemplateContext } from "../contexts/TemplateSelectionContext";

// import { useState } from "react";

export const TempOne = ({ showRear, setShowRear }) => {
  const { formData } = useTemplateContext();

  const profilePicUrl = formData.profilePicture
    ? URL.createObjectURL(formData.profilePicture)
    : null;

  const logo = formData.companyLogo
    ? URL.createObjectURL(formData.companyLogo)
    : null;

  return (
    <div
      className={`w-full h-[14rem] px-4 bg-gradient-to-br from-orange-800 via-orange-600 to-orange-300 rounded-[1rem] flex items-center py-8 relative overflow-hidden z-3 transform transition-transform duration-500 `}
    >
      {/* Front View */}
      {!showRear && (
        <>
          <div className="h-full -z-1 absolute bg-gray-800 w-25 ml-8"></div>
          <img
            className="border-black border-2 w-32 h-32 rounded-full ml-4 mr-8"
            src={logo || "https://via.placeholder.com/150"}
            alt="User Profile"
          />

          <h3 className="text-[1.6rem] text-gray-800 ml-9 self-start mt-4 font-semibold ">
            {formData.companyName || "Disney Inc"}
          </h3>
          <p className="absolute  text-gray-800 text-[1.2rem] left-49 top-20">
            {formData.website || "yourexample.com"}
          </p>
        </>
      )}

      {/* Back View */}
      {showRear && (
        <>
          <div className="w-48 mt-4 flex flex-col gap-4">
            <img
              src={profilePicUrl}
              alt=""
              className="border-2 w-20 h-20 rounded-full"
            />

            <p className="text-[1.3rem] font-bold text-gray-800 -mt-2">
              {formData.fullName || "John Dany Doe"}
            </p>

            <p className="text-gray-800 -mt-4">
              {formData.jobTitle || "Operations Manager"}
            </p>
          </div>
          {/* detail div */}

          <div className="w-48 mt-4 flex flex-col">
            <div className="w-48 flex gap-4">
              <p>Tel:</p>
              <p>{formData.phoneNumber || "12345678901"}</p>
            </div>
            <div className="w-48 flex gap-4">
              <p>email:</p>
              <p>{formData.email || "example@gmail.com"}</p>
            </div>
            <div className="w-fit ml-2 flex gap-4 mb-12">
              <p>social:</p>
              <p>{formData.socialMedia || "facebook.com/john"}</p>
            </div>
          </div>
        </>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setShowRear(!showRear)}
        className="bg-green-800 px-4 py-2 mt-4 text-white rounded absolute bottom-[1rem] right-[1rem]"
      >
        {showRear ? "See Front" : "See Back"}
      </button>
    </div>
  );
};

export const TempTwo = ({ showRear, setShowRear }) => {
  const { formData } = useTemplateContext();

  const profilePicUrl = formData.profilePicture
    ? URL.createObjectURL(formData.profilePicture)
    : null;

  return (
    <div
      className={`w-full h-[14rem] mt-32 px-4 bg-gradient-to-bl from-green-800 via-green-600 rounded-[1rem] flex items-center py-8 relative overflow-hidden z-3 transform transition-transform duration-500 md:mt-0 `}
    >
      {/* Front View */}
      {!showRear && (
        <>
          <div className="h-full -z-1 absolute bg-gray-700 w-25 ml-8"></div>
          <img
            className="border-black border-2 w-32 h-32 rounded-full ml-4 mr-8"
            src={formData.companyLogo || "https://via.placeholder.com/150"}
            alt="User Profile"
          />

          <h3 className="text-[1.4rem] text-gray-800 ml-6 self-start mt-4 font-semibold ">
            {formData.companyName || "Disney Inc"}
          </h3>
          <p className="absolute  text-gray-800 text-[1.2rem] left-49 top-20">
            {formData.website || "yourexample.com"}
          </p>
        </>
      )}

      {/* Back View */}
      {showRear && (
        <>
          <div className="w-48 mt-4 flex flex-col gap-4">
            <img
              src={profilePicUrl}
              alt=""
              className="border-2 w-20 h-20 rounded-full"
            />

            <p className="text-[1.3rem] font-bold text-gray-800 -mt-2">
              {formData.fullName || "John Dany Doe"}
            </p>

            <p className="text-gray-800 -mt-4">
              {formData.jobTitle || "Operations Manager"}
            </p>
          </div>
          {/* detail div */}

          <div className="w-48 mt-4 flex flex-col">
            <div className="w-48 flex gap-4">
              <p>Tel:</p>
              <p>{formData.phoneNumber || "12345678901"}</p>
            </div>
            <div className="w-48 flex gap-4">
              <p>email:</p>
              <p>{formData.email || "example@gmail.com"}</p>
            </div>
            <div className="w-fit ml-2 flex gap-4 mb-12">
              <p>social:</p>
              <p>{formData.socialMedia || "facebook.com/john"}</p>
            </div>
          </div>
        </>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setShowRear(!showRear)}
        className="bg-green-800 px-4 py-2 mt-4 text-white rounded absolute bottom-[1rem] right-[1rem]"
      >
        {showRear ? "See Front" : "See Back"}
      </button>
    </div>
  );
};

const BizTemplate = () => {
  // const [showRearOne, setShowRearOne] = useState(false);
  // const [showRearTwo, setShowRearTwo] = useState(false);

  const {
    selectedTemplate,
    handleTemplateSelect,
    formData,
    showRearOne,
    setShowRearOne,
    showRearTwo,
    setShowRearTwo,
  } = useTemplateContext();

  return (
    <section className="w-full min-h-[100vh] py-8 px-2 bg-black flex flex-col items-center md:grid md:grid-cols-3 md:gap-4">
      <h2 className="text-[1.5rem] font-bold text-green-800 mb-6 fixed top-[1rem] left-[50%] translate-x-[-50%] z-10">
        Choose a Template for your Business Card
      </h2>
      {/* Template One */}
      <div
        className={`w-full h-40 mb-4 cursor-pointer ${
          selectedTemplate === "templateOne" ? "border-4 border-green-800" : ""
        }`}
      >
        <TempOne
          formData={formData}
          showRear={showRearOne}
          setShowRear={setShowRearOne}
        />

        {/* select button */}
        <button
          onClick={() => handleTemplateSelect("templateOne")}
          className="bg-green-800 px-4 py-2 mt-4 text-white rounded"
        >
          use template
        </button>
      </div>

      {/* Template Two */}
      <div
        className={`w-full h-40 mb-4 cursor-pointer ${
          selectedTemplate === "templateTwo" ? "border-4 border-green-800" : ""
        }`}
      >
        <TempTwo
          formData={formData}
          showRear={showRearTwo}
          setShowRear={setShowRearTwo}
        />

        {/* select button */}
        <button
          onClick={() => handleTemplateSelect("templateTwo")}
          className="bg-green-800 px-4 py-2 mt-4 text-white rounded"
        >
          use template
        </button>
      </div>
    </section>
  );
};

export default BizTemplate;
