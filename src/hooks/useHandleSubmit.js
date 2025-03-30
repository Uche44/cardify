import axios from "axios";

export const useHandleSubmit = async (
  e,
  url,
  formData,
  validateForm,
  fetchSubmittedData
) => {
  e.preventDefault();

  if (typeof validateForm !== "function") {
    console.error("validateForm is not defined");
    return;
  }
  if (!validateForm()) return;

  try {
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    formDataToSend.forEach((value, key) => {
      console.log(key, value);
    });

    const response = await axios.post(url, formDataToSend, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("Response Status:", response.status);
    console.log("Response Headers:", response.headers);
    console.log("Response Data:", response.data);

    alert("Form submitted successfully!");

    if (typeof fetchSubmittedData === "function") {
      fetchSubmittedData();
    }
  } catch (error) {
    if (error.response) {
      console.log("Server Error:", error.response.data);
    } else if (error.request) {
      console.log("Network Error:", error.request);
    } else {
      console.log("Error:", error.message);
    }
  }
};
