import React, { useState, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/context.jsx";
import AppRouts from "../constant/constant";

export default function Login({ closeModal }) {
  const navigate = useNavigate();
  const { setSession, setToken, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Input validation
    if (!email || !password) {
      setError("Email and Password are required.");
      return;
    }

    const loginData = { email, password };
    setLoading(true);
    setError("");

    try {
      // Call API to sign in
      const response = await axios.post(AppRouts.signin, loginData);
      const { token, user } = response.data.data;

      // Update sessionStorage & cookies to maintain tab session
      Cookies.set("token", token, { expires: 7 });
      sessionStorage.setItem("tokenForSessionStorage", token);

      // Update token, user state in AuthContext to maintain Auth function
      setSession(token);
      setToken(token);
      setUser(user);

      // Navigate based on user role
      switch (user?.role?.toLowerCase()) {
        case "admin":
          navigate("/admin"); // Redirect to admin page
          break;
        case "user":
          navigate("/user"); // Redirect to user page
          break;
        default:
          setError("Unauthorized role. Please contact support.");
          break;
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-blue-50 bg-opacity-90 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-cyan-800 text-center mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg border border-red-100">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 ${
                loading ? "bg-gray-400" : "bg-cyan-600"
              } text-white rounded-lg hover:bg-cyan-700 transition duration-300`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}