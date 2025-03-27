import IdTemp from "../components/IdTemplate";

import { useState } from "react";

const IdForm = () => {
  const [chooseTemplate, setChooseTemplate] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    image: null,
    dob: "",
    gender: "",
    nin: "",
    address: "",
    country: "",
    state: "",
  });

  // choose template
  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    setChooseTemplate(false);
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required.";

    if (!formData.dob) {
      newErrors.dob = "Date of birth is required.";
    } else {
      const today = new Date();
      const dob = new Date(formData.dob);
      if (dob > today) {
        newErrors.dob = "Date of birth cannot be a future date.";
      }
      if (!formData.gender) newErrors.gender = "Gender is required.";
      if (!formData.nin.trim()) {
        newErrors.nin = "NIN is required.";
      } else if (!/^\d{11}$/.test(formData.nin)) {
        newErrors.nin = "NIN must be an 11-digit number.";
      }
      if (!formData.address.trim()) newErrors.address = "Address is required.";
      if (!formData.country.trim()) newErrors.country = "Country is required.";
      if (!formData.state.trim())
        newErrors.state = "State of origin is required.";
      if (!formData.image) newErrors.image = "Image is required.";

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) return;

  //   try {
  //     // Convert formData to FormData object
  //     const formDataToSend = new FormData();
  //     Object.keys(formData).forEach((key) => {
  //       formDataToSend.append(key, formData[key]);
  //     });

  //     // Send POST request
  //     const response = await axios.post(
  //       "https://cardify-api.onrender.com/nin-info/",
  //       formDataToSend,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     console.log("Response Data:", response.data);
  //     alert("Form submitted successfully!");
  //   } catch (error) {
  //     if (error.response) {
  //       console.log("Server Error:", error.response.data);
  //     } else if (error.request) {
  //       console.log("Network Error:", error.request);
  //     } else {
  //       console.log("Error:", error.message);
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    // console.log("clicked");
    e.preventDefault();

    if (!validateForm()) return;

    // Create a FormData object
    const data = new FormData();
    data.append("name", formData.fullName);
    data.append("name", formData.image);
    data.append("name", formData.dob);
    data.append("gender", formData.gender);
    data.append("nin", formData.nin);
    data.append("address", formData.address);
    data.append("country", formData.country);
    data.append("state", formData.state);

    try {
      const response = await fetch(
        "https://cardify-api.onrender.com/nin-info/",
        {
          method: "POST",
          body: data, // Send FormData (not JSON)
        }
      );

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {chooseTemplate ? (
        <IdTemp
          formData={formData}
          onTemplateSelect={handleTemplateSelect}
          selectedTemplate={selectedTemplate}
        />
      ) : (
        <section className="w-full min-h-[100vh] flex flex-col items-center px-4 py-8 bg-black">
          <h2 className="text-[1.5rem] font-bold text-green-800 mb-6">
            Your ID is a Click Away!
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[600px] bg-white p-6 rounded-lg shadow-md"
          >
            {/* Full Name */}
            <fieldset className="mb-6">
              <legend className="text-lg font-semibold text-gray-700 mb-4">
                Full Name
              </legend>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Enter your first name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              {/* <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Middle Name
                </label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Enter your middle name (optional)"
                />
              </div> */}
              {/* <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div> */}
            </fieldset>

            {/* Date of Birth */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              {errors.dob && (
                <p className="text-red-500 text-sm">{errors.dob}</p>
              )}
            </div>

            {/* Image */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Upload Image
              </label>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image}</p>
              )}
            </div>

            {/* Gender */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender}</p>
              )}
            </div>

            {/* NIN */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                National Identification Number (NIN)
              </label>
              <input
                type="text"
                name="nin"
                value={formData.nin || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your 11-digit NIN"
              />
              {errors.nin && (
                <p className="text-red-500 text-sm">{errors.nin}</p>
              )}
            </div>

            {/* Address */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Address
              </label>
              <textarea
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your address"
              ></textarea>
              {errors.address && (
                <p className="text-red-500 text-sm">{errors.address}</p>
              )}
            </div>

            {/* Country */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your country"
              />
              {errors.country && (
                <p className="text-red-500 text-sm">{errors.country}</p>
              )}
            </div>

            {/* State of Origin */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                State of Origin
              </label>
              <input
                type="text"
                // accepts="image/*"
                name="state"
                value={formData.state || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your state of origin"
              />
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-800 text-white font-semibold py-2 rounded-lg hover:bg-green-900 transition cursor-pointer"
            >
              Submit
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default IdForm;
