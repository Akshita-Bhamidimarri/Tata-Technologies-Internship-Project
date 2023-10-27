import { useState } from "react";
import axios from "axios";
import base_url from "../Api/baseURL";

export const CreateIncident = () => {

  const [incident, setIncident] = useState({name: "",
  contact: "",
  incidentType: "",
  description: "",
  aadharNumber: 0, 
  insuranceNumber: 0,
  address: "",
  purchaseID: 0, 
});

  //function to handle from
  const handleForm = (e)=>{
    console.log(incident);
    postDataToServer(incident);
    e.preventDefault();
  }

  const postDataToServer=(data)=>{
    axios.post(`${base_url}/CreateIncident`,data).then(
      (response)=>{
        console.log(response);
        console.log("success");
      },
      (error)=>{
        console.log(error);
        console.log("error");
      }
    )
  }

  return (
    <main> 
        <form onSubmit = {handleForm}>
          <div className="mb-6">
            <label for="name" className="block mb-2 text-sm font-medium text-red-900">Name</label>
            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required
            onChange={(e)=>{
              setIncident({...incident,name:e.target.value});
            }} 
            /> 
          </div>
          <div className="mb-6">
            <label for="contact" className="block mb-2 text-sm font-medium text-red-900">Contact</label>
            <input type="text" id="contact" className="bg-gray-50 border border-gray-300 text-red-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required
            onChange={(e)=>{
              setIncident({...incident,contact:e.target.value});
            }}  
            />
          </div>
          <div className="mb-6">
            <label for="incidentType" className="block mb-2 text-sm font-medium text-red-900">Incident Type</label>
            <select id="incidentType" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e)=>{
              setIncident({...incident,incidentType:e.target.value});
            }}  >
              <option>Rear-End Collisions</option>
              <option>Head-On Collisions</option>
              <option>Side-Impact Collisions</option>
              <option>Sideswipe Accidents</option>
              <option>Single-Vehicle Accidents</option>
              <option>Multi-Vehicle Accidents</option>
              <option>Rollover Accidents</option>
              <option>Blind Spot Accidents</option>
            </select>
          </div>
          <div className="mb-6">
            <label for="description" className="block mb-2 text-sm font-medium text-red-900">Description</label>
            <textarea id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Describe the incident..."
            onChange={(e)=>{
              setIncident({...incident,description:e.target.value});
            }}  ></textarea>
          </div>
          <div className="mb-6">
            <label for="aadhar" className="block mb-2 text-sm font-medium text-red-900">Aadhar</label>
            <input type="text" id="aadharNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required 
            onChange={(e)=>{
              setIncident({...incident,aadharNumber:e.target.value});
            }}
            /> 
          </div>
          <div className="mb-6">
            <label for="insurance" className="block mb-2 text-sm font-medium text-red-900">Insurance Number</label>
            <input type="text" id="insuranceNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required 
            onChange={(e)=>{
              setIncident({...incident,insuranceNumber:e.target.value});
            }}
            /> 
          </div>
          <div className="mb-6">
            <label for="address" className="block mb-2 text-sm font-medium text-red-900">Address</label>
            <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required 
            onChange={(e)=>{
              setIncident({...incident,address:e.target.value});
            }}
            /> 
          </div>
          <div className="mb-6">
            <label for="purchaseID" className="block mb-2 text-sm font-medium text-red-900">Purchase ID</label>
            <input type="text" id="purchaseID" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required 
            onChange={(e)=>{
              setIncident({...incident,purchaseID:e.target.value});
            }}
            /> 
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    </main>
  )
}