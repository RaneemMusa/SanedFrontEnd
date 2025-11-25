

// // src/components/Header.jsx
// import React, { useState } from "react";
// import { LogOut, Sparkles, Menu, X } from "lucide-react";

// const Header = ({ setPage, userId, auth }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleSignOut = async () => {
//     if (!auth) return;
//     try {
//       await auth.signOut();
//       setPage("landing");
//     } catch (err) {
//       console.error("Error signing out:", err);
//     }
//   };

//   const NavLinks = ({ onClick }) => (
//     <>
//       <button
//         onClick={() => onClick("landing")}
//         className="text-sm font-medium text-slate-600 hover:text-teal-700 transition"
//       >
//         Home
//       </button>
//       <button
//         onClick={() => onClick("services")}
//         className="text-sm font-medium text-slate-600 hover:text-teal-700 transition"
//       >
//         Browse Services
//       </button>
//       <button
//         onClick={() => onClick("post")}
//         className="text-sm font-medium text-slate-600 hover:text-teal-700 transition"
//       >
//         Post Offer / Request
//       </button>
//     </>
//   );

//   return (
//     <header className="bg-white/90 backdrop-blur shadow-sm sticky top-0 z-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//         {/* Logo */}
//         <button
//           onClick={() => setPage("landing")}
//           className="text-xl font-extrabold tracking-tight text-teal-700"
//         >
//           SANED
//         </button>

//         {/* Desktop nav */}
//         <div className="hidden md:flex items-center gap-6">
//           <NavLinks onClick={setPage} />

//           {userId ? (
//             <>
//               <button
//                 onClick={() => setPage("dashboard")}
//                 className="inline-flex items-center gap-1 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 transition"
//               >
//                 <Sparkles className="w-4 h-4" />
//                 Dashboard
//               </button>
//               <button
//                 onClick={handleSignOut}
//                 className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
//               >
//                 <LogOut className="w-4 h-4" />
//                 Logout
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={() => setPage("login")}
//               className="rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 transition"
//             >
//               Log In / Sign Up
//             </button>
//           )}
//         </div>

//         {/* Mobile toggle */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMenuOpen((v) => !v)}
//             className="text-slate-700"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden border-t border-slate-100 bg-white">
//           <div className="flex flex-col px-4 py-3 space-y-2">
//             <NavLinks
//               onClick={(p) => {
//                 setPage(p);
//                 setIsMenuOpen(false);
//               }}
//             />
//             {userId ? (
//               <>
//                 <button
//                   onClick={() => {
//                     setPage("dashboard");
//                     setIsMenuOpen(false);
//                   }}
//                   className="mt-2 inline-flex items-center justify-center gap-1 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 transition"
//                 >
//                   <Sparkles className="w-4 h-4" />
//                   Dashboard
//                 </button>
//                 <button
//                   onClick={() => {
//                     handleSignOut();
//                     setIsMenuOpen(false);
//                   }}
//                   className="inline-flex items-center justify-center gap-1 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
//                 >
//                   <LogOut className="w-4 h-4" />
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <button
//                 onClick={() => {
//                   setPage("login");
//                   setIsMenuOpen(false);
//                 }}
//                 className="mt-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 transition"
//               >
//                 Log In / Sign Up
//               </button>
//             )}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;



// src/components/Header.jsx
import React, { useState } from "react";
import { LogOut, Sparkles, Menu, X, UserCircle2 } from "lucide-react";

const Header = ({ setPage, userId, auth, page }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignOut = async () => {
    if (!auth) return;
    try {
      await auth.signOut();
      setPage("landing");
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  const navLinkClasses = (isActive) =>
    [
      "text-sm font-medium transition px-3 py-1 rounded-full",
      isActive
        ? "bg-teal-600 text-white shadow"
        : "text-slate-600 hover:bg-slate-100",
    ].join(" ");

  const NavLinks = ({ onClick }) => (
    <>
      <button
        onClick={() => onClick("landing")}
        className={navLinkClasses(page === "landing")}
      >
        Home
      </button>
      <button
        onClick={() => onClick("services")}
        className={navLinkClasses(page === "services")}
      >
        Browse
      </button>
      <button
        onClick={() => onClick("post")}
        className={navLinkClasses(page === "post")}
      >
        Post
      </button>
      {userId && (
        <button
          onClick={() => onClick("profile")}
          className={navLinkClasses(page === "profile")}
        >
          Profile
        </button>
      )}
    </>
  );

  return (
    <header className="bg-white/90 backdrop-blur shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => setPage("landing")}
          className="flex items-center gap-2"
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-md">
            S
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Saned
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          <NavLinks onClick={setPage} />

          {userId ? (
            <>
              <button
                onClick={() => setPage("dashboard")}
                className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800 transition"
              >
                <Sparkles className="w-4 h-4" />
                Dashboard
              </button>
              <button
                onClick={handleSignOut}
                className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setPage("login")}
              className="inline-flex items-center gap-1 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 transition"
            >
              <UserCircle2 className="w-4 h-4" />
              Log In / Sign Up
            </button>
          )}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="text-slate-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="flex flex-col px-4 py-3 space-y-2">
            <NavLinks
              onClick={(p) => {
                setPage(p);
                setIsMenuOpen(false);
              }}
            />
            {userId ? (
              <>
                <button
                  onClick={() => {
                    setPage("dashboard");
                    setIsMenuOpen(false);
                  }}
                  className="mt-2 inline-flex items-center justify-center gap-1 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800 transition"
                >
                  <Sparkles className="w-4 h-4" />
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsMenuOpen(false);
                  }}
                  className="inline-flex items-center justify-center gap-1 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setPage("login");
                  setIsMenuOpen(false);
                }}
                className="mt-2 inline-flex items-center gap-1 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 transition"
              >
                <UserCircle2 className="w-4 h-4" />
                Log In / Sign Up
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
