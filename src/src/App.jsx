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
