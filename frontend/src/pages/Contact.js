import { NavLink } from "react-router-dom";

export const Contact = () => {
  return (
    <main className="bg-call min-h-screen flex items-center justify-center">
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Information</h1>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="mailto:akshi.bham@gmail.com"
              className="block py-3 px-4 text-lg text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Email: akshi.bham@gmail.com
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://www.linkedin.com/in/akshita-bhamidimarri-375548231/"
              className="block py-3 px-4 text-lg text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              LinkedIn Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://github.com/Akshita-Bhamidimarri"
              className="block py-3 px-4 text-lg text-blue-600 bg-white border border-blue-200 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              GitHub Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </main>
  );
};
