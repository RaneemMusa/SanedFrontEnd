// // src/components/AuthPage.jsx
// import React, { useState } from "react";

// const AuthPage = ({ setPage, pageType }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const isLogin = pageType === "login";

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Email and password are required.");
//       return;
//     }
//     setError("");

//     // For now this is a mock; backend (JWT, PostgreSQL) will plug here.
//     console.log(`${pageType} attempt for:`, email);
//     setPage("dashboard");
//   };

//   return (
//     <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-slate-50 px-4">
//       <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
//         {/* Left text section */}
//         <div className="hidden md:flex flex-col justify-center bg-slate-900 text-slate-50 px-8 py-10">
//           <h2 className="text-3xl font-bold mb-4">
//             {isLogin ? "Welcome back to Saned" : "Create your Saned account"}
//           </h2>
//           <p className="text-sm text-slate-200">
//             Use the same account to{" "}
//             <span className="font-semibold">request help</span> or{" "}
//             <span className="font-semibold">offer your services</span>. You can
//             switch roles any time from your dashboard.
//           </p>
//         </div>

//         {/* Form section */}
//         <div className="px-8 py-10">
//           <h3 className="text-2xl font-bold text-slate-900 mb-2 text-center md:text-left">
//             {isLogin ? "Log In" : "Sign Up"}
//           </h3>
//           <p className="text-sm text-slate-500 mb-6 text-center md:text-left">
//             {isLogin
//               ? "Access your dashboard and manage your local jobs."
//               : "Join our community and start offering or requesting services."}
//           </p>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {error && (
//               <div className="rounded-lg bg-red-50 text-red-700 text-sm px-3 py-2">
//                 {error}
//               </div>
//             )}

//             <div>
//               <label className="block text-xs font-semibold text-slate-700 mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@example.com"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-xs font-semibold text-slate-700 mb-1">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="••••••••"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="mt-2 w-full rounded-lg bg-teal-700 py-2.5 text-sm font-semibold text-white shadow hover:bg-teal-800 transition"
//             >
//               {isLogin ? "Log In" : "Create Account"}
//             </button>
//           </form>

//           <p className="mt-6 text-xs text-center text-slate-600">
//             {isLogin ? "Don't have an account yet?" : "Already have an account?"}{" "}
//             <button
//               type="button"
//               onClick={() => setPage(isLogin ? "signup" : "login")}
//               className="font-semibold text-teal-700 hover:underline"
//             >
//               {isLogin ? "Sign Up" : "Log In"}
//             </button>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;



// src/components/AuthPage.jsx
import React, { useState } from "react";

function AuthPage({ setPage, pageType }) {
  const isLogin = pageType === "login";

  // one state object for all fields
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Email and password are required.");
      return;
    }

    if (!isLogin) {
      // basic checks for sign up
      if (!form.fullName) {
        setError("Please enter your full name.");
        return;
      }
      if (form.password !== form.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
    }

    // TODO: plug in real backend call here
    console.log(isLogin ? "Login data:" : "Signup data:", form);

    // for now, just go to dashboard
    setPage("dashboard");
  }

  function toggleMode() {
    setError("");
    setForm({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
    setPage(isLogin ? "signup" : "login");
  }

  return (
    <div className="auth-page">
      <div className="auth-frame">
        {/* LEFT CARD */}
        <div className="auth-panel">
          <div className="auth-panel-card">
            <div>
              <h2 className="auth-panel-title">
                {isLogin
                  ? "WELCOME BACK!"
                  : "START MAKING A DIFFERENCE WITH SANED!"}
              </h2>

              <p className="auth-panel-text">
                {isLogin
                  ? "YOUR SERVICES, REQUESTS, AND COMMUNITY CONNECTIONS ARE WAITING FOR YOU."
                  : "CREATE YOUR ACCOUNT TO CONNECT, GIVE SUPPORT, AND RECEIVE HELP WHENEVER YOU NEED IT."}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – FORM */}
        <div className="auth-form-wrapper">
          <div className="auth-logo-wrap">
            <img
              src="/images/saned-logo.png"
              alt="Saned logo"
              className="auth-logo"
            />
          </div>

          <div className="auth-form-card">
            <h3 className="auth-form-title">
              {isLogin ? "Welcome Back" : "Join us today and get started"}
            </h3>

            <form onSubmit={handleSubmit} className="auth-form">
              {error && <div className="auth-error">{error}</div>}

              {/* SIGN UP extra fields */}
              {!isLogin && (
                <>
                  <div className="auth-field">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="auth-field">
                    <label htmlFor="phone">Phone Number (optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07x-xxxxxxx"
                    />
                  </div>
                </>
              )}

              {/* COMMON FIELDS */}
              <div className="auth-field">
                <label htmlFor="email">
                  {isLogin ? "Email or Username" : "Email Address"}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>

              <div className="auth-field">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                />
              </div>

              {!isLogin && (
                <div className="auth-field">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                  />
                </div>
              )}

              <button type="submit" className="auth-submit-btn">
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            <p className="auth-switch">
              {isLogin ? "New to Saned?" : "Already have an account?"}{" "}
              <button type="button" onClick={toggleMode}>
                {isLogin ? "Create an account" : "Log in"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
