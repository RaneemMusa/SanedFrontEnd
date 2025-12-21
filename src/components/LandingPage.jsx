
// src/components/LandingPage.jsx
import React from "react";
import { MapPin, DollarSign, ShieldCheck } from "lucide-react";

const heroImage =
  "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200";

const LandingPage = ({ setPage }) => (
  <div className="pt-8 space-y-16">
    {/* Hero */}
    <section
      className="rounded-3xl px-6 sm:px-10 py-12 md:py-16 shadow-xl overflow-hidden relative"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #0f766e 0%, #06b6d4 45%, #ecfeff 100%)",
      }}
    >
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center max-w-6xl mx-auto relative z-10">
        {/* Text */}
        <div className="text-white">
          <p className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] bg-white/10 px-3 py-1 rounded-full border border-white/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-300 mr-2" />
            Local Freelance & Services Platform
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Find help — or offer your skills — right in your community.
          </h1>
          <p className="text-sm sm:text-base text-slate-100 mb-8 max-w-xl">
            Saned lets you act both as a{" "}
            <span className="font-semibold">service provider</span> and a{" "}
            <span className="font-semibold">client</span>. Post offers,
            requests, and manage everything from one secure dashboard.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setPage("services")}
              className="inline-flex justify-center items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-slate-800 transition"
            >
              Browse Services
            </button>
            <button
              onClick={() => setPage("signup")}
              className="inline-flex justify-center items-center rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Create Saned Account
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-teal-500/30 blur-3xl" />
          <div className="absolute -bottom-8 -right-10 w-44 h-44 rounded-full bg-cyan-400/30 blur-3xl" />
          <img
            src={heroImage}
            alt="People collaborating in a modern workspace"
            className="relative rounded-3xl shadow-2xl border border-white/60 animate-float object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>
    </section>

    {/* Why Saned cards */}
    <section className="max-w-7xl mx-auto px-6 sm:px-10">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-3">
        Why Saned?
      </h2>
      <p className="text-sm sm:text-base text-slate-600 text-center max-w-2xl mx-auto mb-10">
        Designed for secure, local collaboration: clear distinction between{" "}
        <strong>offers</strong> and <strong>requests</strong>, with an admin
        view for monitoring activity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <MapPin className="w-9 h-9 text-teal-700 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Local & Contextual</h3>
          <p className="text-sm text-slate-600">
            Filter by area and category to quickly find someone near you who
            understands local needs and culture.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <DollarSign className="w-9 h-9 text-teal-700 mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            Dual Role: Client & Provider
          </h3>
          <p className="text-sm text-slate-600">
            One account lets you post{" "}
            <span className="font-semibold">service offers</span> and{" "}
            <span className="font-semibold">service requests</span>, with clear
            UI separation so you never confuse the two.
          </p>
        </div>
        <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <ShieldCheck className="w-9 h-9 text-teal-700 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Security in Mind</h3>
          <p className="text-sm text-slate-600">
            Built as a Cyber Security capstone: strong roles, audit-friendly
            dashboards, and clear separation of admin and normal users.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default LandingPage;
