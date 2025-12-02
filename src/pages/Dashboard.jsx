import React, { useState } from "react";
import { Menu, X, Home, Users, Calendar, FileText, Mic } from "lucide-react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const appointments = [
    {
      name: "John Doe",
      type: "Annual Checkup",
      time: "10:30 AM",
      status: "Follow-up",
    },
  ];

  const recentPatients = [
    {
      name: "Michael Brown",
      lastVisit: "3:00 AM",
      nextVisit: "10:30 AM",
      reason: "10.8M",
    },
    {
      name: "Sarah Lee",
      lastVisit: "3:00 AM",
      nextVisit: "10:30 AM",
      reason: "19.5M",
    },
    {
      name: "David Chen",
      lastVisit: "$25/00M",
      nextVisit: "13:30 AM",
      reason: "12.5M",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
          fixed lg:static inset-y-0 left-0 z-40 w-64 bg-teal-500 text-white transform transition-transform duration-300 ease-in-out
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }
          mt-16 lg:mt-0
        `}>
          {/* Mobile close button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden absolute top-4 right-4 text-white">
            <X className="w-6 h-6" />
          </button>

          <div className="p-6">
            {/* Profile Section */}
            <div className="flex flex-col items-center mb-8 pt-4">
              <div className="w-16 h-16 bg-white rounded-full mb-3"></div>
              <h3 className="font-semibold text-lg">Dr. Anya Sharma, MD</h3>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              <button className="w-full flex items-center space-x-3 px-4 py-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition">
                <Home className="w-5 h-5" />
                <span>Dashboard</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-lg transition">
                <Users className="w-5 h-5" />
                <span>Patients</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-lg transition">
                <Calendar className="w-5 h-5" />
                <span>Appointments</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-white hover:bg-opacity-10 rounded-lg transition">
                <FileText className="w-5 h-5" />
                <span>Medical Records</span>
              </button>
            </nav>

            {/* Start Dictation Button */}
            <button className="w-full mt-8 bg-white text-teal-500 py-3 rounded-lg font-semibold hover:bg-teal-50 transition shadow-md flex items-center justify-center space-x-2">
              <Mic className="w-5 h-5" />
              <span>Start Dictation</span>
            </button>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 mt-16"></div>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">
              Welcome Back, Dr. Sharma!
            </h1>

            {/* Today's Appointments Card */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mb-6 sm:mb-8">
              <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
                Today Appointments
              </h2>

              {appointments.map((appointment, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base text-gray-800 truncate">
                      {appointment.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 truncate">
                      {appointment.type}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-semibold text-sm sm:text-base text-gray-800">
                      {appointment.time}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {appointment.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Patients Table */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Recent Patients
                </h2>

                {/* Quick Actions - Desktop */}
                <div className="hidden sm:flex gap-3">
                  <button className="px-4 py-2 border-2 border-teal-500 text-teal-500 rounded-lg font-semibold hover:bg-teal-50 transition text-sm">
                    Start Dictation
                  </button>
                </div>
              </div>

              {/* Table - Desktop */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm">
                        Patient Name
                      </th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm">
                        Last Visit
                      </th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm">
                        Last Visit
                      </th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium text-sm">
                        Reason
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentPatients.map((patient, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 hover:bg-gray-50 transition">
                        <td className="py-3 px-4 text-gray-800">
                          {patient.name}
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          {patient.lastVisit}
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          {patient.nextVisit}
                        </td>
                        <td className="py-3 px-4 text-gray-600">
                          {patient.reason}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Cards - Mobile */}
              <div className="sm:hidden space-y-3">
                {recentPatients.map((patient, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">
                        {patient.name}
                      </h3>
                      <span className="text-xs text-gray-500">
                        {patient.reason}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Last: {patient.lastVisit}</span>
                      <span>Next: {patient.nextVisit}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions - Mobile */}
              <div className="sm:hidden mt-6 space-y-3">
                <button className="w-full px-4 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition">
                  Start Dictation
                </button>
                <button className="w-full px-4 py-3 border-2 border-teal-500 text-teal-500 rounded-lg font-semibold hover:bg-teal-50 transition">
                  View All Patients
                </button>
              </div>
            </div>

            {/* Action Buttons - Desktop */}
            <div className="hidden sm:flex gap-4 mt-8">
              <button className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition shadow-sm">
                Start Dictation
              </button>
              <button className="px-6 py-3 border-2 border-teal-500 text-teal-500 rounded-lg font-semibold hover:bg-teal-50 transition">
                View All Patients
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
