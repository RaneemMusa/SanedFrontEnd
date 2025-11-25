// // client/src/components/AuthPage.jsx
// import React, { useState } from 'react';
// import { COLORS } from '../utils/constants';

// const AuthPage = ({ setPage, pageType }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simplified Auth Mock: In a real app, this would call Firebase Email/Password Auth.
//     if (!email || !password) {
//       setError('Email and Password are required.');
//       return;
//     }
//     setError('');

//     // Simulate successful login/signup
//     console.log(`${pageType} attempt for: ${email}`);
//     // Since we rely on custom token sign-in via the environment, we just redirect
//     // to the dashboard upon successful 'mock' entry.
//     setPage('dashboard');
//   };

//   return (
//     <div className={`flex items-center justify-center min-h-[calc(100vh-64px)] p-4 bg-gray-50`}>
//       <div className={`bg-${COLORS.card} p-10 rounded-xl shadow-2xl w-full max-w-md animate-fade-in-down`}>
//         <h2 className={`text-3xl font-bold text-center text-${COLORS.primaryDark} mb-2`}>{pageType === 'login' ? 'Log In' : 'Sign Up'} to Saned</h2>
//         <p className="text-center text-gray-500 mb-8">Connect and start finding or offering services.</p>

//         <form onSubmit={handleSubmit}>
//           {error && <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">{error}</div>}
          
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition duration-300" />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition duration-300" />
//           </div>
          
//           <button type="submit"
//             className={`w-full bg-${COLORS.primaryDark} text-white font-bold py-3 rounded-lg shadow-lg hover:bg-teal-800 transition duration-300 transform hover:scale-[1.01]`}
//           >
//             {pageType === 'login' ? 'Log In' : 'Create Account'}
//           </button>
//         </form>

//         <p className="mt-6 text-center text-sm text-gray-600">
//           {pageType === 'login' ? "Don't have an account yet?" : "Already have an account?"}
//           <button onClick={() => setPage(pageType === 'login' ? 'signup' : 'login')}
//             className={`text-${COLORS.primaryDark} font-semibold ml-1 hover:underline transition duration-300`}
//           >
//             {pageType === 'login' ? 'Sign Up' : 'Log In'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;



// src/components/AuthPage.jsx
import React, { useState } from "react";

const AuthPage = ({ setPage, pageType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isLogin = pageType === "login";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    setError("");

    // For now this is a mock; backend (JWT, PostgreSQL) will plug here.
    console.log(`${pageType} attempt for:`, email);
    setPage("dashboard");
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left text section */}
        <div className="hidden md:flex flex-col justify-center bg-slate-900 text-slate-50 px-8 py-10">
          <h2 className="text-3xl font-bold mb-4">
            {isLogin ? "Welcome back to Saned" : "Create your Saned account"}
          </h2>
          <p className="text-sm text-slate-200">
            Use the same account to{" "}
            <span className="font-semibold">request help</span> or{" "}
            <span className="font-semibold">offer your services</span>. You can
            switch roles any time from your dashboard.
          </p>
        </div>

        {/* Form section */}
        <div className="px-8 py-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center md:text-left">
            {isLogin ? "Log In" : "Sign Up"}
          </h3>
          <p className="text-sm text-slate-500 mb-6 text-center md:text-left">
            {isLogin
              ? "Access your dashboard and manage your local jobs."
              : "Join our community and start offering or requesting services."}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-lg bg-red-50 text-red-700 text-sm px-3 py-2">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-teal-700 py-2.5 text-sm font-semibold text-white shadow hover:bg-teal-800 transition"
            >
              {isLogin ? "Log In" : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-xs text-center text-slate-600">
            {isLogin ? "Don't have an account yet?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setPage(isLogin ? "signup" : "login")}
              className="font-semibold text-teal-700 hover:underline"
            >
              {isLogin ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
