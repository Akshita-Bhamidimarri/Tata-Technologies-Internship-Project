import React from 'react';

const Incident = ({ incident }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <table className="w-full border-collapse">
        <tbody>
          <tr className="border-b">
            <th className="text-left font-semibold p-2">Name:</th>
            <td className="p-2">{incident.name}</td>
          </tr>
          <tr className="border-b">
            <th className="text-left font-semibold p-2">Contact:</th>
            <td className="p-2">{incident.contact}</td>
          </tr>
          <tr className="border-b">
            <th className="text-left font-semibold p-2">Incident Type:</th>
            <td className="p-2">{incident.incidentType}</td>
          </tr>
          <tr className="border-b">
            <th className="text-left font-semibold p-2">Description:</th>
            <td className="p-2">{incident.description}</td>
          </tr>
          <tr className="border-b">
            <th className="text-left font-semibold p-2">Aadhar Number:</th>
            <td className="p-2">{incident.aadharNumber}</td>
          </tr>
          <tr className="border-b">
            <th className="text-left font-semibold p-2">Insurance Number:</th>
            <td className="p-2">{incident.insuranceNumber}</td>
          </tr>
          <tr className="border-b">
            <th className="text-left font-semibold p-2">Address:</th>
            <td className="p-2">{incident.address}</td>
          </tr>
          <tr>
            <th className="text-left font-semibold p-2">Purchase ID:</th>
            <td className="p-2">{incident.purchaseID}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Incident;
