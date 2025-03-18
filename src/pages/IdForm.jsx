import { useState } from "react";

const IdForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    image: null,
    gender: "",
    address: "",
    country: "",
    state: "",
  });

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
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.country.trim()) newErrors.country = "Country is required.";
    if (!formData.state.trim())
      newErrors.state = "State of origin is required.";
    if (!formData.image) newErrors.image = "Image is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
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
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
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
          </div>
          <div className="mb-4">
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
          </div>
        </fieldset>

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
            value={formData.gender}
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

        {/* Address */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Address
          </label>
          <textarea
            name="address"
            value={formData.address}
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
            value={formData.country}
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
            name="state"
            value={formData.state}
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
          className="w-full bg-green-800 text-white font-semibold py-2 rounded-lg hover:bg-green-900 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default IdForm;
