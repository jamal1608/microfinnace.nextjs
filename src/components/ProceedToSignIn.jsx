import React, { useState } from "react";
import axios from "axios";

export default function ProceedToSignIn() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/send-email", { email });
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setError("Failed to send email. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-cyan-800 text-center mb-6">
          Proceed to Sign In
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition duration-300"
          >
            Send Email
          </button>
        </form>
        {message && (
          <div className="mt-6 p-4 bg-green-50 text-green-600 rounded-lg border border-green-100">
            {message}
          </div>
        )}
        {error && (
          <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-lg border border-red-100">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}