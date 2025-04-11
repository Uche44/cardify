import { useTemplateContext } from "../contexts/TemplateSelectionContext";
import { useEffect, useRef } from "react";

import html2canvas from "html2canvas";

const DriverCard = () => {
  const { formData } = useTemplateContext();

  const profilePicUrl = formData.profile_pic
    ? URL.createObjectURL(formData.profile_pic)
    : null;

  useEffect(() => {
    return () => {
      if (profilePicUrl) {
        URL.revokeObjectURL(profilePicUrl);
      }
    };
  }, [profilePicUrl]);

  const cardRef = useRef(null);

  const handleDownload = async () => {
    const canvas = await html2canvas(cardRef.current, { scale: 2 });
    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "drivers_license.png";
    link.click();
  };

  return (
    <div className="w-full min-h-screen py-8 flex items-center justify-center bg-black">
      <div
        ref={cardRef}
        className="w-[400px] bg-white rounded-lg shadow-lg overflow-hidden"
      >
        {/* Header */}
        <div className="bg-green-800 text-white text-center py-4">
          <h2 className="text-2xl font-bold">Driver's License</h2>
          <p className="text-sm">Issued by the Department of Motor Vehicles</p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center py-6 px-4">
          {profilePicUrl ? (
            <img
              src={profilePicUrl}
              alt="Driver Profile"
              className="w-24 h-24 rounded-full border-4 border-green-800"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
              No Image
            </div>
          )}
          <h3 className="text-xl font-semibold mt-4">
            {formData.full_name || "John Doe"}
          </h3>
          <p className="text-gray-600">{formData.license_type || "Standard"}</p>
        </div>

        {/* Details Section */}
        <div className="px-6 py-4">
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Date of Birth</p>
            <p className="text-gray-800 font-medium">
              {formData.dateofbirth || "N/A"}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Place of Birth</p>
            <p className="text-gray-800 font-medium">
              {formData.placeofbirth || "N/A"}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Gender</p>
            <p className="text-gray-800 font-medium">
              {formData.gender === "M"
                ? "Male"
                : formData.gender === "F"
                ? "Female"
                : "N/A"}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Address</p>
            <p className="text-gray-800 font-medium">
              {formData.address || "N/A"}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Phone Number</p>
            <p className="text-gray-800 font-medium">
              {formData.phone_number || "N/A"}
            </p>
          </div>
        </div>

        {/* License Info Section */}
        <div className="bg-gray-100 px-6 py-4">
          <div className="mb-4">
            <p className="text-gray-500 text-sm">License Number</p>
            <p className="text-gray-800 font-medium">
              {formData.license_number || "N/A"}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Date Issued</p>
            <p className="text-gray-800 font-medium">
              {formData.date_issued || "N/A"}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-500 text-sm">Expiration Date</p>
            <p className="text-gray-800 font-medium">
              {formData.expiration_date || "N/A"}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-green-800 text-white text-center py-2">
          <p className="text-sm">Valid in all states and territories</p>
        </div>
      </div>

      {/* download btn */}

      <button
        onClick={handleDownload}
        className="mt-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 fixed bottom-4 right-4"
      >
        Download as Image
      </button>
    </div>
  );
};

export default DriverCard;
