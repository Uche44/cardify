import { useState } from "react";
import BizTemplate from "../components/BizTemplate";
import { handleSubmit as submitForm } from "../lib/handleSubmit";
import { useFetchData } from "../hooks/useFetchData";

const BizForm = () => {
  const { fetchSubmittedData } = useFetchData();

  const [chooseTemplate, setChooseTemplate] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    profilePicture: null,
    companyName: "",
    companyLogo: null,
    phoneNumber: "",
    email: "",
    website: "",
    address: "",
    socialMedia: "",
  });

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
    if (!formData.jobTitle.trim())
      newErrors.jobTitle = "Job title is required.";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required.";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone number is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required.";
    if (formData.website && !/^https?:\/\/.+\..+/.test(formData.website))
      newErrors.website = "Enter a valid website URL.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.socialMedia.trim())
      newErrors.socialMedia = "Social media handle is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    const url = "https://cardify-api-by76.onrender.com/business-info/";
    await submitForm(e, url, formData, validateForm, fetchSubmittedData);
  };

  return (
    <>
      {chooseTemplate ? (
        <BizTemplate
          formData={formData}
          onTemplateSelect={handleTemplateSelect}
          selectedTemplate={selectedTemplate}
        />
      ) : (
        <section className="w-full min-h-[100vh] flex flex-col items-center bg-black px-4 py-8">
          <h2 className="text-green-800 font-bold text-[1.5rem] mb-6">
            Your Professional Business Card is a Few Clicks Away
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[600px] bg-white p-6 rounded-lg shadow-md"
          >
            {/* Personal Info Section */}
            <fieldset className="mb-6">
              <legend className="text-lg font-semibold text-gray-700 mb-4">
                Personal Info
              </legend>
              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>

              {/* Job Title */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Enter your job title"
                />
                {errors.jobTitle && (
                  <p className="text-red-500 text-sm">{errors.jobTitle}</p>
                )}
              </div>

              {/* Profile Picture */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Profile Picture
                </label>
                <input
                  type="file"
                  name="profilePicture"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
            </fieldset>

            {/* Business Info Section */}
            <fieldset className="mb-6">
              <legend className="text-lg font-semibold text-gray-700 mb-4">
                Business Info
              </legend>
              {/* Company Name */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Enter your company name"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">{errors.companyName}</p>
                )}
              </div>

              {/* Company Logo */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Company Logo
                </label>
                <input
                  type="file"
                  name="companyLogo"
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>

              {/* Contact Information */}
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
                  placeholder="Enter your phone number"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Website (Optional)
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Enter your website URL"
                />
                {errors.website && (
                  <p className="text-red-500 text-sm">{errors.website}</p>
                )}
              </div>

              {/* Physical Address */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Physical Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Enter your physical address"
                ></textarea>
                {errors.address && (
                  <p className="text-red-500 text-sm">{errors.address}</p>
                )}
              </div>

              {/* Social Media Handles */}
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Social Media Handles
                </label>
                <input
                  type="text"
                  name="socialMedia"
                  value={formData.socialMedia}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  placeholder="Enter your social media handles"
                />
                {errors.socialMedia && (
                  <p className="text-red-500 text-sm">{errors.socialMedia}</p>
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
      )}
    </>
  );
};

export default BizForm;
