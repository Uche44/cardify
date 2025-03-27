// // import { FaUser } from "react-icons/fa";

// import { useTemplateContext } from "../contexts/TemplateSelectionContext";

// const TempOne = ({ formData }) => {
//   return (
//     <div className="w-full h-fit bg-white rounded-[1rem] flex flex-col items-center py-8 relative overflow-hidden z-3">
//       {/* decor div */}
//       <div className="w-full h-30 absolute top-6 bg-amber-900 z-4"></div>
//       <div className="w-[72%] h-fit py-4 pl-4 rounded-l-[7rem] self-end bg-amber-800 shadow-xl mt-4 z-5 ">
//         <img
//           className="border-black w-28 h-28 rounded-full"
//           src={
//             formData.image || "https://www.pinterest.com/pin/23432860624484677/"
//           }
//         />
//       </div>
//       <h3 className="text-[1.4rem] font-semibold mt-4">
//         {formData.firstName || "John Dany Doe"}
//       </h3>
//       <div className=" w-48 mt-4 flex gap-4">
//         <p>DOB:</p>
//         <p className="">{formData.dob || "May 12, 1995"}</p>
//       </div>

//       {/* gender */}
//       <div className=" w-48 flex gap-4">
//         <p>Gender:</p>
//         <p className="">{formData.gender || "Male"}</p>
//       </div>

//       {/* nin */}
//       <div className=" w-48 flex gap-4">
//         <p>NIN:</p>
//         <p className="">{formData.nin || "12345678901"}</p>
//       </div>

//       {/* state of origin */}
//       <div className=" w-48 flex gap-4">
//         <p>State:</p>
//         <p className="">
//           {formData.state || "Enugu"}, {formData.country || "Nigeria"}
//         </p>
//       </div>

//       {/* address */}
//       <div className=" w-fit ml-2 flex gap-4 mb-12">
//         <p>Address:</p>
//         <p className="">{formData.address || "Kogi, olamaboro"}</p>
//       </div>

//       {/* decor divs */}
//       <div className="w-[80%] h-12 absolute bottom-0 left-0 bg-amber-900 z-4 rounded-tr-[3rem]"></div>
//       <div className="w-[97%] h-6 absolute bottom-0 right-0 bg-amber-800 z-4 rounded-tl-[5rem]"></div>
//     </div>
//   );
// };

// // second template
// const TempTwo = ({ formData }) => {
//   return (
//     <div className="w-full h-fit bg-white mt-[19rem] rounded-[1rem] flex flex-col items-center py-8 relative overflow-hidden z-3">
//       {/* decor div */}
//       <div className="w-full h-30 absolute top-6 bg-blue-900 z-4"></div>
//       <div className="w-[72%] h-fit py-4 pl-4 rounded-l-[7rem] self-end bg-blue-800 shadow-xl mt-4 z-5 ">
//         <img
//           className="border-black w-28 h-28 rounded-full"
//           src={
//             formData.image || "https://www.pinterest.com/pin/23432860624484677/"
//           }
//         />
//       </div>
//       <h3 className="text-[1.4rem] font-semibold mt-4">
//         {formData.firstName || "John Dany Doe"}
//       </h3>
//       <div className=" w-48 mt-4 flex gap-4">
//         <p>DOB:</p>
//         <p className="">{formData.dob || "May 12, 1995"}</p>
//       </div>

//       {/* gender */}
//       <div className=" w-48 flex gap-4">
//         <p>Gender:</p>
//         <p className="">{formData.gender || "Male"}</p>
//       </div>

//       {/* nin */}
//       <div className=" w-48 flex gap-4">
//         <p>NIN:</p>
//         <p className="">{formData.nin || "12345678901"}</p>
//       </div>

//       {/* state of origin */}
//       <div className=" w-48 flex gap-4">
//         <p>State:</p>
//         <p className="">
//           {formData.state || "Enugu"}, {formData.country || "Nigeria"}
//         </p>
//       </div>

//       {/* address */}
//       <div className=" w-fit ml-2 flex gap-4 mb-12">
//         <p>Address:</p>
//         <p className="">{formData.address || "Kogi, olamaboro"}</p>
//       </div>

//       {/* decor divs */}
//       <div className="w-[80%] h-12 absolute bottom-0 left-0 bg-blue-900 z-4 rounded-tr-[3rem]"></div>
//       <div className="w-[97%] h-6 absolute bottom-0 right-0 bg-blue-800 z-4 rounded-tl-[5rem]"></div>
//     </div>
//   );
// };

// const BizTemplate = ({ formData }) => {
//   const { selectedTemplate, handleTemplateSelect } = useTemplateContext();

//   return (
//     <div className="w-full min-h-[100vh] p-8 bg-black flex flex-col items-center">
//       <h2 className="text-[1.5rem] font-bold text-green-800 mb-6">
//         Choose a Template for your ID Card
//       </h2>
//       {/* Template One */}
//       <div
//         className={`w-full h-40 bg-white rounded-lg mb-4 cursor-pointer ${
//           selectedTemplate === "templateOne" ? "border-4 border-green-800" : ""
//         }`}
//         onClick={() => handleTemplateSelect("templateOne")} // Select Template One
//       >
//         <TempOne formData={formData} />
//       </div>

//       {/* Template Two */}
//       <div
//         className={`w-full h-40 bg-white rounded-lg mb-4 cursor-pointer ${
//           selectedTemplate === "templateTwo" ? "border-4 border-green-800" : ""
//         }`}
//         onClick={() => handleTemplateSelect("templateTwo")} // Select Template Two
//       >
//         <TempTwo formData={formData} />
//       </div>
//     </div>
//   );
// };

// export default BizTemplate;

import { useTemplateContext } from "../contexts/TemplateSelectionContext";

const TempOne = ({ formData }) => {
  return (
    <div className="w-full h-fit bg-white rounded-[1rem] flex flex-col items-center py-8 relative overflow-hidden z-3">
      {/* Decor div */}
      <div className="w-full h-30 absolute top-6 bg-amber-900 z-4"></div>
      <div className="w-[72%] h-fit py-4 pl-4 rounded-l-[7rem] self-end bg-amber-800 shadow-xl mt-4 z-5">
        <img
          className="border-black w-28 h-28 rounded-full"
          src={formData.image || "https://via.placeholder.com/150"}
          alt="User Profile"
        />
      </div>
      <h3 className="text-[1.4rem] font-semibold mt-4">
        {formData.firstName || "John Dany Doe"}
      </h3>
      <div className="w-48 mt-4 flex gap-4">
        <p>DOB:</p>
        <p>{formData.dob || "May 12, 1995"}</p>
      </div>

      {/* Gender */}
      <div className="w-48 flex gap-4">
        <p>Gender:</p>
        <p>{formData.gender || "Male"}</p>
      </div>

      {/* NIN */}
      <div className="w-48 flex gap-4">
        <p>NIN:</p>
        <p>{formData.nin || "12345678901"}</p>
      </div>

      {/* State of Origin */}
      <div className="w-48 flex gap-4">
        <p>State:</p>
        <p>
          {formData.state || "Enugu"}, {formData.country || "Nigeria"}
        </p>
      </div>

      {/* Address */}
      <div className="w-fit ml-2 flex gap-4 mb-12">
        <p>Address:</p>
        <p>{formData.address || "Kogi, olamaboro"}</p>
      </div>

      {/* Decor divs */}
      <div className="w-[80%] h-12 absolute bottom-0 left-0 bg-amber-900 z-4 rounded-tr-[3rem]"></div>
      <div className="w-[97%] h-6 absolute bottom-0 right-0 bg-amber-800 z-4 rounded-tl-[5rem]"></div>
    </div>
  );
};

// Second template
const TempTwo = ({ formData }) => {
  return (
    <div className="w-full h-fit bg-white mt-[19rem] rounded-[1rem] flex flex-col items-center py-8 relative overflow-hidden z-3">
      {/* Decor div */}
      <div className="w-full h-30 absolute top-6 bg-blue-900 z-4"></div>
      <div className="w-[72%] h-fit py-4 pl-4 rounded-l-[7rem] self-end bg-blue-800 shadow-xl mt-4 z-5">
        <img
          className="border-black w-28 h-28 rounded-full"
          src={formData.image || "https://via.placeholder.com/150"}
          alt="User Profile"
        />
      </div>
      <h3 className="text-[1.4rem] font-semibold mt-4">
        {formData.firstName || "John Dany Doe"}
      </h3>
      <div className="w-48 mt-4 flex gap-4">
        <p>DOB:</p>
        <p>{formData.dob || "May 12, 1995"}</p>
      </div>

      {/* Gender */}
      <div className="w-48 flex gap-4">
        <p>Gender:</p>
        <p>{formData.gender || "Male"}</p>
      </div>

      {/* NIN */}
      <div className="w-48 flex gap-4">
        <p>NIN:</p>
        <p>{formData.nin || "12345678901"}</p>
      </div>

      {/* State of Origin */}
      <div className="w-48 flex gap-4">
        <p>State:</p>
        <p>
          {formData.state || "Enugu"}, {formData.country || "Nigeria"}
        </p>
      </div>

      {/* Address */}
      <div className="w-fit ml-2 flex gap-4 mb-12">
        <p>Address:</p>
        <p>{formData.address || "Kogi, olamaboro"}</p>
      </div>

      {/* Decor divs */}
      <div className="w-[80%] h-12 absolute bottom-0 left-0 bg-blue-900 z-4 rounded-tr-[3rem]"></div>
      <div className="w-[97%] h-6 absolute bottom-0 right-0 bg-blue-800 z-4 rounded-tl-[5rem]"></div>
    </div>
  );
};

const BizTemplate = ({ formData }) => {
  const { selectedTemplate, handleTemplateSelect } = useTemplateContext();

  return (
    <div className="w-full min-h-[100vh] p-8 bg-black flex flex-col items-center">
      <h2 className="text-[1.5rem] font-bold text-green-800 mb-6">
        Choose a Template for your ID Card
      </h2>
      {/* Template One */}
      <div
        className={`w-full h-40 bg-white rounded-lg mb-4 cursor-pointer ${
          selectedTemplate === "templateOne" ? "border-4 border-green-800" : ""
        }`}
        onClick={() => handleTemplateSelect("templateOne")} // Select Template One
      >
        <TempOne formData={formData} />
      </div>

      {/* Template Two */}
      <div
        className={`w-full h-40 bg-white rounded-lg mb-4 cursor-pointer ${
          selectedTemplate === "templateTwo" ? "border-4 border-green-800" : ""
        }`}
        onClick={() => handleTemplateSelect("templateTwo")} // Select Template Two
      >
        <TempTwo formData={formData} />
      </div>
    </div>
  );
};

export default BizTemplate;
