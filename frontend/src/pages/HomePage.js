import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <main className="bg-back bg-no-repeat bg-left flex min-h-screen items-center justify-end pr-16">
      <div className="p-6 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">
          WELCOME TO HOME PAGE!
        </h1>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/createIncident"
              className="block py-4 px-6 text-lg text-blue-600 border border-blue-200 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Create Incident
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ViewIncident"
              className="block py-4 px-6 text-lg text-blue-600 border border-blue-200 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
            >
              View Incident
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ExportToExcel"
              className="block py-4 px-6 text-lg text-blue-600 border border-blue-200 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Download Excel
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/uploadIncidents"
              className="block py-4 px-6 text-lg text-blue-600 border border-blue-200 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Upload File
            </NavLink>
          </li>
        </ul>
      </div>
    </main>
  );
}
