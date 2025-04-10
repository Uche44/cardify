import IdTemp from "../components/IdTemplate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

import { useTemplateContext } from "../contexts/TemplateSelectionContext";

const IdForm = () => {
  const navigate = useNavigate();

  const {
    chooseTemplate,
    setFormData,
    // selectedTemplate,
  } = useTemplateContext();

  const [isLoading, setIsLoading] = useState(false);

  const [formData, localSetFormData] = useState({
    full_name: "",
    profile_pic: null,
    dateofbirth: "",
    gender: "",
    address: "",
    country: "",
    state_of_origin: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    localSetFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.full_name.trim())
      newErrors.full_name = "Full name is required.";

    if (!formData.dateofbirth) {
      newErrors.dateofbirth = "Date of birth is required.";
    } else {
      const today = new Date();
      const dateofbirth = new Date(formData.dateofbirth);
      if (dateofbirth > today) {
        newErrors.dateofbirth = "Date of birth cannot be a future date.";
      }
      if (!formData.gender) newErrors.gender = "Gender is required.";
      // if (!formData.nin.trim()) {
      //   newErrors.nin = "NIN is required.";
      // } else if (!/^\d{11}$/.test(formData.nin)) {
      //   newErrors.nin = "NIN must be an 11-digit number.";
      // }
      if (!formData.address.trim()) newErrors.address = "Address is required.";
      if (!formData.country.trim()) newErrors.country = "Country is required.";
      if (!formData.state_of_origin.trim())
        newErrors.state_of_origin = "State of origin is required.";
      if (!formData.profile_pic)
        newErrors.profile_pic = "profile_pic is required.";

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!validateForm) return;
    setFormData(formData);
    navigate("/id-card");
    return formData;
  };

  return (
    <>
      {isLoading && (
        <div className="bg-black w-full h-screen flex flex-col items-center justify-center">
          <FaSpinner className="text-green-800 animate-spin text-[5rem]" />

          <p className="text-white animate-pulse text-[1.2rem] mt-2">
            Creating card...
          </p>
        </div>
      )}
      {chooseTemplate ? (
        <IdTemp formData={formData} />
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
                Details
              </legend>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Enter your full name"
                />
                {errors.full_name && (
                  <p className="text-red-500 text-sm">{errors.full_name}</p>
                )}
              </div>
            </fieldset>

            {/* Date of Birth */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateofbirth"
                value={formData.dateofbirth || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              {errors.dateofbirth && (
                <p className="text-red-500 text-sm">{errors.dateofbirth}</p>
              )}
            </div>

            {/* profile_pic */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Upload Image
              </label>
              <input
                type="file"
                name="profile_pic"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              {errors.profile_pic && (
                <p className="text-red-500 text-sm">{errors.profile_pic}</p>
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
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender}</p>
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

            {/* state_of_origin of Origin */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                State of Origin
              </label>
              <input
                type="text"
                // accepts="profile_pic/*"
                name="state_of_origin"
                value={formData.state_of_origin || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your state of origin"
              />
              {errors.state_of_origin && (
                <p className="text-red-500 text-sm">{errors.state_of_origin}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-800 text-white font-semibold py-2 rounded-lg hover:bg-green-900 transition cursor-pointer"
            >
              Create Card
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default IdForm;
