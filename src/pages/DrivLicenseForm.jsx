import { useState } from "react";
import { useTemplateContext } from "../contexts/TemplateSelectionContext";
import { FaSpinner } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DriverForm = () => {
  const navigate = useNavigate();

  const { setFormData } = useTemplateContext();

  const [formData, localSetFormData] = useState({
    full_name: "",
    dateofbirth: "",
    placeofbirth: "",
    profile_pic: null,
    gender: "",
    address: "",
    phone_number: "",
    license_number: "",
    date_issued: "",
    expiration_date: "",
    license_type: "",
  });

  const [errors, setErrors] = useState({});

  const [isLoading, setIsLoading] = useState(false);

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
      newErrors.full_name = "First name is required.";

    if (!formData.dateofbirth) {
      newErrors.dateofbirth = "Date of birth is required.";
    } else {
      const today = new Date();
      const dateofbirth = new Date(formData.dateofbirth);
      if (dateofbirth > today) {
        newErrors.dateofbirth = "Date of birth cannot be a future date.";
      }
    }
    if (!formData.placeofbirth.trim())
      newErrors.placeofbirth = "Place of birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.phone_number.trim()) {
      newErrors.phone_number = "Phone number is required.";
    } else if (!/^\d{11}$/.test(formData.phone_number)) {
      newErrors.phone_number = "Phone number must be an 11-digit number.";
    }
    if (!formData.profile_pic)
      newErrors.profile_pic = "profile_pic is required.";

    // License Info Validation
    if (!formData.license_number.trim())
      newErrors.license_number = "License number is required.";
    if (!formData.date_issued)
      newErrors.date_issued = "Date issued is required.";
    if (!formData.expiration_date) {
      newErrors.expiration_date = "Expiration date is required.";
    } else {
      const issuedDate = new Date(formData.date_issued);
      const expiration_date = new Date(formData.expiration_date);
      if (expiration_date <= issuedDate) {
        newErrors.expiration_date =
          "Expiration date must be after the date issued.";
      }
    }
    if (!formData.license_type)
      newErrors.license_type = "License type is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!validateForm) return;
    setFormData(formData);
    navigate("/driver-card");
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
                Full Name
              </label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your full name"
              />
              {errors.full_name && (
                <p className="text-red-500 text-sm">{errors.full_name}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                name="dateofbirth"
                value={formData.dateofbirth}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              {errors.dateofbirth && (
                <p className="text-red-500 text-sm">{errors.dateofbirth}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Place of Birth
              </label>
              <input
                type="text"
                name="placeofbirth"
                value={formData.placeofbirth}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your place of birth"
              />
              {errors.placeofbirth && (
                <p className="text-red-500 text-sm">{errors.placeofbirth}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Upload profile_pic
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
                <option value="M">Male</option>
                <option value="F">Female</option>
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
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your 11-digit phone number"
              />
              {errors.phone_number && (
                <p className="text-red-500 text-sm">{errors.phone_number}</p>
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
                name="license_number"
                value={formData.license_number}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                placeholder="Enter your license number"
              />
              {errors.license_number && (
                <p className="text-red-500 text-sm">{errors.license_number}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Date Issued
              </label>
              <input
                type="date"
                name="date_issued"
                value={formData.date_issued}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              {errors.date_issued && (
                <p className="text-red-500 text-sm">{errors.date_issued}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Expiration Date
              </label>
              <input
                type="date"
                name="expiration_date"
                value={formData.expiration_date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              {errors.expiration_date && (
                <p className="text-red-500 text-sm">{errors.expiration_date}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                License Type
              </label>
              <select
                name="license_type"
                value={formData.license_type}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="">Select license type</option>
                <option value="standard">Standard</option>
                <option value="commercial">Commercial</option>
                <option value="motorcycle">Motorcycle</option>
              </select>
              {errors.license_type && (
                <p className="text-red-500 text-sm">{errors.license_type}</p>
              )}
            </div>
          </fieldset>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-800 text-white font-semibold py-2 rounded-lg hover:bg-green-900 transition"
          >
            Create Card
          </button>
        </form>
      </section>
    </>
  );
};

export default DriverForm;
// MaryJesu99
// https://github.com/KaluDavid/PostgreSQL_Pros_2025_Hackathon.git
