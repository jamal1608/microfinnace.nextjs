import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";
import { FaHome, FaRing, FaGraduationCap, FaBriefcase } from "react-icons/fa"; // Import icons

function App() {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-white to-blue-50 p-6">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl text-blue-900 font-bold text-center mb-12">
          Explore Our Loan Options
        </h1>

        {/* Options Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Home Loan Card */}
          <div
            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-200 cursor-pointer"
            onClick={() => navigate("/homeLoan")}
          >
            <div className="flex flex-col items-center text-center">
              <FaHome className="text-4xl text-blue-600 mb-4" /> {/* Icon */}
              <h2 className="text-xl md:text-2xl font-semibold text-cyan-800 mb-4">
                Home Loan
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Secure your dream home with our easy and affordable home loan options.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Wedding Loan Card */}
          <div
            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-200 cursor-pointer"
            onClick={() => navigate("/weddingLoan")}
          >
            <div className="flex flex-col items-center text-center">
              <FaRing className="text-4xl text-blue-600 mb-4" /> {/* Icon */}
              <h2 className="text-xl md:text-2xl font-semibold text-cyan-800 mb-4">
                Wedding Loan
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Plan your perfect wedding with flexible loan packages tailored for you.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Education Loan Card */}
          <div
            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-200 cursor-pointer"
            onClick={() => navigate("/education")}
          >
            <div className="flex flex-col items-center text-center">
              <FaGraduationCap className="text-4xl text-blue-600 mb-4" /> {/* Icon */}
              <h2 className="text-xl md:text-2xl font-semibold text-cyan-800 mb-4">
                Education Loan
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Achieve your educational goals with our hassle-free loan services.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Business Loan Card */}
          <div
            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-gray-200 cursor-pointer"
            onClick={() => navigate("/businessLoan")}
          >
            <div className="flex flex-col items-center text-center">
              <FaBriefcase className="text-4xl text-blue-600 mb-4" /> {/* Icon */}
              <h2 className="text-xl md:text-2xl font-semibold text-cyan-800 mb-4">
                Business Loan
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Expand your Business with our affordable and flexible Business loan plans.
              </p>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default App;