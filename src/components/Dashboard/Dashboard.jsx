import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'; // Outlet will render nested routes

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white h-screen p-4">
        <h2 className="text-xl font-bold mb-8 text-center">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <NavLink 
              to="/dashboard/projects"
              className="block py-2 px-4 text-white hover:bg-blue-500 rounded"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/add-project"
              className="block py-2 px-4 text-white hover:bg-blue-500 rounded"
            >
              Add Project
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/dashboard/orders"
              className="block py-2 px-4 text-white hover:bg-blue-500 rounded"
            >
              Orders
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        
        {/* Outlet to render the selected route's content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
