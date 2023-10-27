import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Incident from '../components/Incident';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import base_url from '../Api/baseURL';

export const ViewIncident = () => {
  const [incidents, setIncidents] = useState([]);

  const getIncidentsFromServer = () => {
    axios.get(`${base_url}/ViewIncidents`)
      .then(
        (response) => {
          // Success
          console.log(response.data);
          toast.success('Incidents Loaded!');
          setIncidents(response.data);
        },
        (error) => {
          // Error
          console.log(error);
        }
      );
  };

  // Calling loading course function
  useEffect(() => {
    getIncidentsFromServer();
  }, []);

  return (
    <main className="bg-home flex justify-center items-center min-h-screen">
      {incidents.length > 0 ? (
        <table className="table-auto">
          <tbody>
            {incidents.map((item) => (
              <Incident key={item.id} incident={item} />
            ))}
          </tbody>
        </table>
      ) : (
        <p>No incidents</p>
      )}
    </main>
  );
};
