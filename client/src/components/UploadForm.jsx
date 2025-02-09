import { useState, useRef } from "react";
import axios from "axios";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Notification from "./Notification";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null); 

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setMessage("");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      setMessage("");
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select an XML file.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post(
        "https://creditsea-boxj.onrender.com/api/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage("File uploaded successfully!");
      setFile(null);
    } catch (error) {
      setMessage("Error uploading file. Please try again.",error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl border max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Upload XML File</h1>
        <div
          className={`border-2 border-dashed p-6 rounded-lg mb-4 transition-all cursor-pointer ${
            dragging ? "border-green-500 bg-green-50" : "border-gray-300"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current.click()} 
        >
          <AiOutlineCloudUpload className="text-5xl text-gray-500 mx-auto mb-2" />
          <p className="text-gray-600">Drag & drop your XML file here</p>
          <p className="text-sm text-gray-400">or click to select a file</p>
          <input
            type="file"
            accept=".xml"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {file && (
          <p className="text-gray-700 font-medium mb-2">
            Selected File: {file.name}
          </p>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className={`w-full px-6 py-3 rounded-lg text-lg font-medium transition-all ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          {loading ? "Uploading..." : "Upload File"}
        </button>

        {message && <Notification message={message} />}
      </div>
    </div>
  );
};

export default UploadForm;
