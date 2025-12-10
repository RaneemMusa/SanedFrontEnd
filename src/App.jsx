// // src/App.jsx
// import React, { useState, useEffect } from "react";
// import { collection, query, onSnapshot, limit } from "firebase/firestore";
// import { Loader } from "lucide-react";
// import { useFirebase } from "./hooks/useFirebase";
// import { appId } from "./utils/constants";

// import Header from "./components/Header.jsx";
// import LandingPage from "./components/LandingPage.jsx";
// import ServiceListings from "./components/ServiceListings.jsx";
// import PostService from "./components/PostService.jsx";
// import Dashboard from "./components/Dashboard.jsx";
// import AuthPage from "./components/AuthPage.jsx";
// import Profile from "./components/Profile.jsx";

// // Mock data when backend/DB not ready
// const MOCK_SERVICES = [
//   {
//     id: "m1",
//     type: "offer",
//     userId: "mock1",
//     userName: "Sara Q.",
//     title: "Home Cleaning (Deep)",
//     description:
//       "Professional house cleaning services for your home with experienced cleaners.",
//     category: "Cleaning",
//     location: "Amman",
//     price: 45,
//     status: "available",
//     createdAt: "2024-11-01",
//     ratings: { average: 4.8, count: 22 },
//   },
//   {
//     id: "m2",
//     type: "offer",
//     userId: "mock2",
//     userName: "Raneem A.",
//     title: "Electrical Repair",
//     description:
//       "Licensed electricians providing safe and reliable electrical services.",
//     category: "Home Repair",
//     location: "Zarqa",
//     price: 60,
//     status: "available",
//     createdAt: "2024-11-02",
//     ratings: { average: 4.5, count: 18 },
//   },
//   {
//     id: "m3",
//     type: "request",
//     userId: "mock3",
//     userName: "Marah M.",
//     title: "Need Math Tutor for Grade 10",
//     description:
//       "Seeking a qualified tutor for Algebra and Geometry sessions twice a week.",
//     category: "Tutoring",
//     location: "Irbid",
//     price: 0,
//     status: "available",
//     createdAt: "2024-11-03",
//     ratings: { average: 5.0, count: 5 },
//   },
//   {
//     id: "m4",
//     type: "offer",
//     userId: "mock4",
//     userName: "Ahmad K.",
//     title: "Web Development (React)",
//     description: "Custom website development using React and modern CSS.",
//     category: "IT & Tech",
//     location: "Amman",
//     price: 500,
//     status: "available",
//     createdAt: "2024-11-04",
//     ratings: { average: 4.9, count: 12 },
//   },
// ];

// const Footer = () => (
//   <footer className="bg-slate-900 text-slate-200 mt-16">
//     <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm">
//       <p>
//         &copy; {new Date().getFullYear()} Saned. Cyber Security Capstone Project.
//       </p>
//       <p className="mt-1 text-slate-400">
//         Built to connect local freelancers and neighbors in a secure way.
//       </p>
//     </div>
//   </footer>
// );

// const App = () => {
//   const { db, userId, loading, auth } = useFirebase();
//   const [page, setPage] = useState("landing");
//   const [services, setServices] = useState([]);
//   const [postSuccess, setPostSuccess] = useState(0);

//   // After auth finishes loading, choose initial page
//   useEffect(() => {
//     if (!loading) {
//       setPage(userId ? "dashboard" : "landing");
//     }
//   }, [loading, userId]);

//   // Listen for services from Firestore OR use mock data if db is not ready
//   useEffect(() => {
//     if (db) {
//       const servicesCollectionRef = collection(
//         db,
//         `artifacts/${appId}/public/data/services`
//       );
//       const q = query(servicesCollectionRef, limit(25));

//       const unsubscribe = onSnapshot(
//         q,
//         (snapshot) => {
//           const fetched = snapshot.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }));
//           setServices(fetched);
//         },
//         (error) => console.error("Error fetching services:", error)
//       );

//       return () => unsubscribe();
//     }

//     // If no db (backend not configured yet), fall back to mock services
//     if (!loading && !db) {
//       setServices(MOCK_SERVICES);
//     }
//   }, [db, loading, postSuccess]);

//   const handlePostSuccess = () => {
//     setPostSuccess((prev) => prev + 1);
//     // After posting, go to dashboard (later when auth is ready)
//     setPage("dashboard");
//   };

//   const renderPage = () => {
//     if (loading) {
//       return (
//         <div className="flex items-center justify-center min-h-[60vh]">
//           <Loader className="w-10 h-10 text-teal-700 animate-spin" />
//           <p className="ml-3 text-lg text-slate-700">
//             Initializing secure connection…
//           </p>
//         </div>
//       );
//     }

//     // 🔐 For now, ONLY protect Dashboard with login
//     // Post + Profile are open so you can see UI without backend
//     if (page === "dashboard" && !userId) {
//       return <AuthPage setPage={setPage} pageType="login" />;
//     }

//     switch (page) {
//       case "services":
//         return <ServiceListings services={services} />;

//       case "post":
//         return (
//           <PostService
//             userId={userId}
//             userName="Saned User"
//             onPostSuccess={handlePostSuccess}
//           />
//         );

//       case "dashboard":
//         return (
//           <Dashboard
//             userId={userId}
//             services={services}
//             setPage={setPage}
//           />
//         );

//       case "profile":
//         return (
//           <Profile
//             // later you can pass userId, services, etc.
//           />
//         );

//       case "login":
//       case "signup":
//         return <AuthPage setPage={setPage} pageType={page} />;

//       case "landing":
//       default:
//         return <LandingPage setPage={setPage} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
//       <Header setPage={setPage} userId={userId} auth={auth} page={page} />
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 animate-fade-in">
//         {renderPage()}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;


// src/App.jsx
import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot, limit } from "firebase/firestore";
import { Loader } from "lucide-react";
import { useFirebase } from "./hooks/useFirebase";
import { appId } from "./utils/constants";

// Home (landing) components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

// Inside (logged-in) components
import Header from "./components/Header";       // this is the one with Browse / Post / Services
import AuthPage from "./components/AuthPage";   // login / signup
import Profile from "./components/Profile";     // or Dashboard if you prefer
import ServiceListings from "./components/ServiceListings";
import PostService from "./components/PostService";

import "./index.css";
import "./AppStyles.css"; 

const App = () => {
  const { db, auth, userId, loading } = useFirebase();
  const [services, setServices] = useState([]);
  const [page, setPage] = useState("landing"); // landing | login | signup | dashboard | browse | post | profile

  // Load services (if you use them)
  useEffect(() => {
    if (!db) return;

    const servicesRef = collection(
      db,
      `artifacts/${appId}/public/data/services`
    );
    const q = query(servicesRef, limit(50));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setServices(docs);
    });

    return () => unsubscribe();
  }, [db]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader className="w-8 h-8 animate-spin text-teal-600" />
      </div>
    );
  }

  const isPublicPage =
    page === "landing" || page === "login" || page === "signup";

  // 🔹 PUBLIC PAGES – keep Hero / About sizes exactly as before
  if (isPublicPage) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <Navbar
          onLoginClick={() => setPage("login")}
          onSignupClick={() => setPage("signup")}
        />

        {/* HOME content */}
        {page === "landing" && (
          <>
            <Hero />
            <AboutSection />
            <HowItWorks />
          </>
        )}

        {/* AUTH content (no Hero/About here) */}
        {(page === "login" || page === "signup") && (
          <AuthPage setPage={setPage} pageType={page} />
        )}

        <Footer />
      </div>
    );
  }

  // 🔹 choose which INSIDE page to render (after login)
  const renderInsidePage = () => {
    if (page === "browse") {
      return <ServiceListings services={services} />;
    }

    if (page === "post") {
      return (
        <PostService
          userId={userId}
          userName="Saned User"
          onPostSuccess={() => setPage("browse")}
        />
      );
    }

    // dashboard & profile show Profile for now
    if (page === "dashboard" || page === "profile") {
      return <Profile />;
    }

    // fallback
    return <Profile />;
  };

  // 🔹 INSIDE PAGES – only Header (Browse / Post / etc.), NO login/signup button
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header setPage={setPage} userId={userId} auth={auth} page={page} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {renderInsidePage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
