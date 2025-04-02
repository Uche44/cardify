import axios from "axios";
import { useState, useEffect } from "react";

export const useFetchData = (url) => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 const fetchSubmittedData = async () => {
    try {
      const response = await axios.get(url);
      console.log("Fetched Data:", response.data);
      setFormData(response.data); 
    } catch (err) {
      console.error("Error fetching data:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmittedData();
  }, [url]);

  return { formData, loading, error, fetchSubmittedData  };
};

