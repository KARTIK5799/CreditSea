import { useEffect, useState } from "react";
import axios from "axios";
import ReportCard from "./ReportCard";

const Records = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://creditsea-boxj.onrender.com/api/reports")
      .then((response) => {
        setData(response.data); // ✅ Fetch all records without filtering
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch records. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Credit Report
      </h1>

      {error && <p className="text-red-600 text-center">{error}</p>}

      {loading ? (
        <div className="flex justify-center">
          <p className="text-gray-700 animate-pulse">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1  gap-6">
          {data.length > 0 ? (
            data.map((record, index) => <ReportCard key={index} record={record} />)
          ) : (
            <p className="text-center text-gray-700">No records found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Records;
