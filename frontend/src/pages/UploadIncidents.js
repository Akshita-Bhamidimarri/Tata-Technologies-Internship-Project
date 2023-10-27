import React, { useState } from 'react';
import axios from 'axios';
import base_url from '../Api/baseURL';

export const UploadIncidents = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    axios
      .post(`${base_url}/uploadIncidents`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response);
        alert('File uploaded successfully.');
      })
      .catch((error) => {
        console.error(error);
        alert('Error uploading file.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className="bg-up bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Upload Incidents</h2>
        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-medium text-gray-600">
            Select a CSV file:
          </label>
          <input
            type="file"
            id="file"
            accept=".csv, application/vnd.ms-excel"
            onChange={handleFileChange}
            className="mt-1 p-2 border rounded w-full"
          />
        </div>
        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-blue-600 text-white py-2 px-4 rounded w-full"
        >
          {loading ? 'Uploading...' : 'Upload File'}
        </button>
      </div>
    </main>
  );
};

