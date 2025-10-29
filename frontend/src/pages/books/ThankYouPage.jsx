import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ThankYouPage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 to-white p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-16 w-16 text-indigo-600 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 110 20 10 10 0 010-20z" />
        </svg>

        <h1 className="text-3xl font-extrabold mb-2">Thanks for ordering!</h1>
        <p className="text-sm text-gray-500 mb-4">
          Your order is being processed and we’ll send a confirmation email soon.
        </p>

       

        <div className="flex justify-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="inline-block px-6 py-2 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
