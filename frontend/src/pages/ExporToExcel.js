import React from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

export const ExportToExcel = () => {
  const downloadExcelFile = () => {
    axios
      .get('http://localhost:8081/ExportToExcel', {
        responseType: 'blob',
      })
      .then((response) => {
        const blob = new Blob([response.data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        saveAs(blob, 'incident.xlsx');
      })
      .catch((error) => {
        console.error('Error downloading Excel file:', error);
      });
  };

  return (
    <main className="bg-down bg-size-auto flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md max-w-md">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">
          Download Incident Data as Excel
        </h1>
        <button
          onClick={downloadExcelFile}
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-300"
        >
          Click Here To Download File
        </button>
      </div>
    </main>
  );
};
