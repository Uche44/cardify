import { useState } from "react";

const DriverForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    placeOfBirth: "",
    image: null,
    gender: "",
    address: "",
    phoneNumber: "",
    licenseNumber: "",
    dateIssued: "",
    expirationDate: "",
    licenseType: "",
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

    // Driver's Info Validation
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.dob) {
      newErrors.dob = "Date of birth is required.";
    } else {
      const today = new Date();
      const dob = new Date(formData.dob);
      if (dob > today) {
        newErrors.dob = "Date of birth cannot be a future date.";
      }
    }
    if (!formData.placeOfBirth.trim())
      newErrors.placeOfBirth = "Place of birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{11}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be an 11-digit number.";
    }
    if (!formData.image) newErrors.image = "Image is required.";

    // License Info Validation
    if (!formData.licenseNumber.trim())
      newErrors.licenseNumber = "License number is required.";
    if (!formData.dateIssued) newErrors.dateIssued = "Date issued is required.";
    if (!formData.expirationDate) {
      newErrors.expirationDate = "Expiration date is required.";
    } else {
      const issuedDate = new Date(formData.dateIssued);
      const expirationDate = new Date(formData.expirationDate);
      if (expirationDate <= issuedDate) {
        newErrors.expirationDate =
          "Expiration date must be after the date issued.";
      }
    }
    if (!formData.licenseType)
      newErrors.licenseType = "License type is required.";

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
        Your Driver&apos;s License is a Click Away!
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[600px] bg-white p-6 rounded-lg shadow-md"
      >
        {/* Driver's Info */}
        <fieldset className="mb-6">
          <legend className="text-lg font-semibold text-gray-700 mb-4">
            Driver's Info
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
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Place of Birth
            </label>
            <input
              type="text"
              name="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Enter your place of birth"
            />
            {errors.placeOfBirth && (
              <p className="text-red-500 text-sm">{errors.placeOfBirth}</p>
            )}
          </div>
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
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
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Enter your 11-digit phone number"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>
        </fieldset>

        {/* License Info */}
        <fieldset className="mb-6">
          <legend className="text-lg font-semibold text-gray-700 mb-4">
            License Info
          </legend>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              License Number
            </label>
            <input
              type="text"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              placeholder="Enter your license number"
            />
            {errors.licenseNumber && (
              <p className="text-red-500 text-sm">{errors.licenseNumber}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Date Issued
            </label>
            <input
              type="date"
              name="dateIssued"
              value={formData.dateIssued}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.dateIssued && (
              <p className="text-red-500 text-sm">{errors.dateIssued}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Expiration Date
            </label>
            <input
              type="date"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            {errors.expirationDate && (
              <p className="text-red-500 text-sm">{errors.expirationDate}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              License Type
            </label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">Select license type</option>
              <option value="standard">Standard</option>
              <option value="commercial">Commercial</option>
              <option value="motorcycle">Motorcycle</option>
            </select>
            {errors.licenseType && (
              <p className="text-red-500 text-sm">{errors.licenseType}</p>
            )}
          </div>
        </fieldset>

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

export default DriverForm;
