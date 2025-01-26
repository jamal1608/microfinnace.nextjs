
import React, { useState } from "react";
import UserInfoModal from "../components/userInfoModal.jsx";
import {
  FaGraduationCap,
  FaHome,
  FaHeart,
  FaBriefcase,
  FaCalculator,
  FaMoneyCheckAlt,
} from "react-icons/fa";

export default function LoanApplication() {
  const [activeLoan, setActiveLoan] = useState("WeddingLoan"); // Track active loan type
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPeriod, setLoanPeriod] = useState(1); // Default loan period
  const [loanBreakdown, setLoanBreakdown] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();

    // Input validation
    if (!category || !subcategory || !initialDeposit || initialDeposit <= 0 || loanAmount <= 0) {
      setError("Please fill in all fields correctly.");
      return;
    }

    const loanAmountAfterDeposit = loanAmount - initialDeposit;

    if (loanAmountAfterDeposit <= 0) {
      setError("Loan amount must be greater than the initial deposit.");
      return;
    }

    const totalPayable = loanAmountAfterDeposit; // Total payable amount (no interest)
    const monthlyInstallment = totalPayable / (loanPeriod * 12); // Monthly installment

    setLoanBreakdown({
      loanAmount: loanAmountAfterDeposit.toFixed(2),
      totalPayable: totalPayable.toFixed(2),
      monthlyInstallment: monthlyInstallment.toFixed(2),
    });
    setError(""); // Clear any previous errors
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-800">Loan Application</h1>
          <p className="text-gray-600 mt-2">Choose a loan type to get started.</p>
        </div>

        {/* Loan Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Education Loan Card */}
          <div
            className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
              activeLoan === "Education"
                ? "bg-cyan-600 text-white"
                : "bg-white text-gray-700 hover:bg-cyan-50"
            }`}
            onClick={() => setActiveLoan("Education")}
          >
            <FaGraduationCap className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Education Loan</h2>
            <p className="text-sm">Secure your future with an education loan.</p>
          </div>

          {/* Home Loan Card */}
          <div
            className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
              activeLoan === "Home"
                ? "bg-cyan-600 text-white"
                : "bg-white text-gray-700 hover:bg-cyan-50"
            }`}
            onClick={() => setActiveLoan("Home")}
          >
            <FaHome className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Home Loan</h2>
            <p className="text-sm">Buy your dream home with a home loan.</p>
          </div>

          {/* Wedding Loan Card */}
          <div
            className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
              activeLoan === "Wedding"
                ? "bg-cyan-600 text-white"
                : "bg-white text-gray-700 hover:bg-cyan-50"
            }`}
            onClick={() => setActiveLoan("Wedding")}
          >
            <FaHeart className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Wedding Loan</h2>
            <p className="text-sm">Make your special day unforgettable.</p>
          </div>

          {/* Business Loan Card */}
          <div
            className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
              activeLoan === "Business"
                ? "bg-cyan-600 text-white"
                : "bg-white text-gray-700 hover:bg-cyan-50"
            }`}
            onClick={() => setActiveLoan("Business")}
          >
            <FaBriefcase className="text-4xl mb-4" />
            <h2 className="text-xl font-semibold">Business Loan</h2>
            <p className="text-sm">Kickstart your business dreams.</p>
          </div>
        </div>

        {/* Loan Application Form */}
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          {/* Form Header */}
          <div className="flex flex-col items-center mb-8">
            {activeLoan === "Education" && <FaGraduationCap className="text-5xl text-cyan-600 mb-4" />}
            {activeLoan === "Home" && <FaHome className="text-5xl text-cyan-600 mb-4" />}
            {activeLoan === "Wedding" && <FaHeart className="text-5xl text-cyan-600 mb-4" />}
            {activeLoan === "Business" && <FaBriefcase className="text-5xl text-cyan-600 mb-4" />}
            <h2 className="text-3xl font-bold text-cyan-800 text-center">
              {activeLoan} Application
            </h2>
            <p className="text-gray-600 text-center mt-2">
              Fill in the details to calculate your loan.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg border border-red-100">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleCalculate}>
            {/* Category Dropdown */}
            <div className="mb-6">
              <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
                Loan Category
              </label>
              <select
                id="category"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="Education Loan">Education Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Wedding Loan">Wedding Loan</option>
                <option value="Business Loan">Business Loan</option>
              </select>
            </div>

            {/* Subcategory Dropdown */}
            <div className="mb-6">
              <label htmlFor="subcategory" className="block text-gray-700 font-semibold mb-2">
                Subcategory
              </label>
              <select
                id="subcategory"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
                value={subcategory}
                onChange={(e) => setSubcategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a subcategory
                </option>
                {activeLoan === "Education" && (
                  <>
                    <option value="universityFees">University Fees</option>
                    <option value="childFees">Child Fees Loan</option>
                  </>
                )}
                {activeLoan === "Home" && (
                  <>
                    <option value="newHome">New Home Purchase</option>
                    <option value="homeRenovation">Home Renovation</option>
                  </>
                )}
                {activeLoan === "Wedding" && (
                  <>
                    <option value="weddingExpenses">Wedding Expenses</option>
                    <option value="honeymoon">Honeymoon</option>
                  </>
                )}
                {activeLoan === "Business" && (
                  <>
                    <option value="startup">Startup Funding</option>
                    <option value="expansion">Business Expansion</option>
                  </>
                )}
              </select>
            </div>

            {/* Initial Deposit */}
            <div className="mb-6">
              <label htmlFor="initialDeposit" className="block text-gray-700 font-semibold mb-2">
                Initial Deposit (PKR)
              </label>
              <input
                type="number"
                id="initialDeposit"
                value={initialDeposit}
                onChange={(e) => setInitialDeposit(e.target.value)}
                placeholder="Enter initial deposit amount"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
                required
              />
            </div>

            {/* Loan Amount */}
            <div className="mb-6">
              <label htmlFor="loanAmount" className="block text-gray-700 font-semibold mb-2">
                Loan Amount (PKR)
              </label>
              <input
                type="number"
                id="loanAmount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="Enter loan amount"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
                required
              />
            </div>

            {/* Loan Period */}
            <div className="mb-8">
              <label htmlFor="loanPeriod" className="block text-gray-700 font-semibold mb-2">
                Loan Period (Years)
              </label>
              <select
                id="loanPeriod"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-300"
                value={loanPeriod}
                onChange={(e) => setLoanPeriod(Number(e.target.value))}
                required
              >
                <option value={1}>1 Year</option>
                <option value={2}>2 Years</option>
                <option value={3}>3 Years</option>
                <option value={4}>4 Years</option>
                <option value={5}>5 Years</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition duration-300 flex items-center justify-center"
            >
              <FaCalculator className="mr-2" />
              Calculate Loan
            </button>
          </form>

          {/* Loan Breakdown */}
          {loanBreakdown && (
            <div className="mt-8 bg-white p-6 rounded-lg border border-gray-100 shadow-lg">
              <h2 className="text-xl font-semibold text-cyan-800 mb-4 flex items-center">
                <FaMoneyCheckAlt className="mr-2 text-cyan-600" />
                Loan Breakdown
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Loan Amount */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 font-medium">Loan Amount</p>
                  <p className="text-lg font-semibold text-cyan-800">
                    PKR {loanBreakdown.loanAmount}
                  </p>
                </div>

                {/* Total Payable */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 font-medium">Total Payable</p>
                  <p className="text-lg font-semibold text-cyan-800">
                    PKR {loanBreakdown.totalPayable}
                  </p>
                </div>

                {/* Monthly Installment */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 font-medium">Monthly Installment</p>
                  <p className="text-lg font-semibold text-cyan-800">
                    PKR {loanBreakdown.monthlyInstallment}
                  </p>
                </div>
              </div>
              {/* User Info Modal */}
              <div className="mt-6">
                <UserInfoModal />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}