import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons

function Footer() {
  return (
    <>
      <footer className="bg-white/50 backdrop-blur-sm rounded-lg shadow-sm m-4">
        <div className="w-full mx-auto max-w-screen-xl p-8 md:flex md:items-center md:justify-between">
          {/* Left Section: Copyright */}
          <div className="mb-6 md:mb-0">
            <span className="text-sm text-gray-700 sm:text-center">
              © 2025{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Matrivest
              </a>
              . All Rights Reserved.
            </span>
          </div>

          {/* Right Section: Social Media Icons */}
          <div className="flex space-x-6 sm:justify-center">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-cyan-600 transition duration-300"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-cyan-600 transition duration-300"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-cyan-600 transition duration-300"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-cyan-600 transition duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Additional Links Section */}
        <div className="w-full mx-auto max-w-screen-xl p-4 border-t border-gray-200">
          <div className="text-center text-sm text-gray-700">
            <a href="#" className="mr-4 hover:underline hover:text-cyan-600">
              Privacy Policy
            </a>
            <a href="#" className="mr-4 hover:underline hover:text-cyan-600">
              Terms of Service
            </a>
            <a href="#" className="mr-4 hover:underline hover:text-cyan-600">
              Contact Us
            </a>
            <a href="#" className="hover:underline hover:text-cyan-600">
              About Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;