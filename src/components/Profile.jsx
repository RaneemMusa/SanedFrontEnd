// src/components/Profile.jsx
import React from "react";
import {
  MessageCircle,
  Star,
  MapPin,
  Briefcase,
  CalendarDays,
  HeartHandshake,
  Phone,
} from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-teal-50 via-white to-cyan-50">
      <div className="max-w-5xl mx-auto py-10 px-4 space-y-8">
        {/* ======= TOP HERO CARD ======= */}
        <section className="relative overflow-hidden bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-400 rounded-3xl shadow-xl text-white px-6 py-7 sm:px-8 sm:py-8">
          {/* subtle shapes */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-16 -right-10 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
            <div className="absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-emerald-300/30 blur-3xl" />
          </div>

          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            {/* Avatar + text */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white/90 text-teal-700 flex items-center justify-center text-3xl font-extrabold shadow-md">
                S
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  My Profile
                </h1>
                <p className="text-sm sm:text-base text-teal-50/90 mt-1 max-w-md">
                  This page is a colourful demo of how your Saned profile can
                  look when it’s connected to real data and messaging.
                </p>
              </div>
            </div>

            {/* stats (important only) */}
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-black/10 rounded-2xl px-3 py-2">
                <p className="text-teal-100/80">Rating</p>
                <p className="font-semibold flex items-center gap-1">
                  4.9
                  <Star className="w-4 h-4 text-yellow-300" />
                </p>
              </div>

              {/* phone instead of completed jobs */}
              <div className="bg-black/10 rounded-2xl px-3 py-2">
                <p className="text-teal-100/80 flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  Phone
                </p>
                <p className="font-semibold">+962 7X XXX XXXX</p>
              </div>

              <div className="bg-black/10 rounded-2xl px-3 py-2 col-span-2 sm:col-span-1">
                <p className="text-teal-100/80 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Location
                </p>
                <p className="font-semibold">Amman, Local area</p>
              </div>
              <div className="bg-black/10 rounded-2xl px-3 py-2 col-span-2 sm:col-span-1">
                <p className="text-teal-100/80 flex items-center gap-1">
                  <CalendarDays className="w-3 h-3" />
                  Member since
                </p>
                <p className="font-semibold">2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* ======= MAIN GRID ======= */}
        <section className="grid grid-cols-1 md:grid-cols-[1.9fr,1.3fr] gap-6">
          {/* LEFT SIDE */}
          <div className="space-y-4">
            {/* About card */}
            <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 border border-slate-100">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-900">
                  About
                </h2>
                <span className="text-[11px] uppercase tracking-wide text-slate-400">
                  Profile summary
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                This is a placeholder profile. Here you can later show the user’s
                real name, short bio, and what type of services they usually
                offer or request on Saned. It should help others quickly
                understand who they are working with.
              </p>

              {/* tags row */}
              <div className="flex flex-wrap gap-2 mt-1">
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                  <Briefcase className="w-3 h-3" />
                  Freelancer & Client
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100">
                  <HeartHandshake className="w-3 h-3" />
                  Trusted community member
                </span>
              </div>

              {/* Skills */}
              <div className="pt-2">
                <h3 className="text-sm font-semibold text-slate-800 mb-2">
                  Skills (example)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Home Repair", "Tutoring", "Cooking", "Cleaning", "IT Help"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-teal-50/80 text-teal-700 border border-teal-100"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Services overview */}
            <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-slate-900">
                  Services overview (demo)
                </h3>
                <span className="text-[10px] font-medium text-teal-700 uppercase tracking-wide">
                  Coming soon
                </span>
              </div>

              <p className="text-xs text-slate-600 mb-4">
                Later, this section can show a quick summary of your active
                offers and requests using real data from the database.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="border border-teal-100 rounded-xl p-3 bg-teal-50/60">
                  <p className="font-semibold text-slate-900 mb-1">
                    Offers you provide
                  </p>
                  <p className="text-slate-600">
                    e.g. &quot;Math tutoring&quot;, &quot;Home cleaning&quot;,
                    &quot;Cooked meals&quot;.
                  </p>
                </div>
                <div className="border border-cyan-100 rounded-xl p-3 bg-cyan-50/60">
                  <p className="font-semibold text-slate-900 mb-1">
                    Requests you post
                  </p>
                  <p className="text-slate-600">
                    e.g. &quot;Need electrician&quot;, &quot;PC repair&quot;,
                    &quot;Moving help&quot;.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* Messages preview – fills the column now */}
            <div className="bg-white rounded-2xl shadow-md p-5 border border-slate-100 min-h-[260px] md:min-h-[340px] flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-teal-600" />
                  <h3 className="text-sm font-semibold text-slate-900">
                    Messages (UI only)
                  </h3>
                </div>
                <span className="text-[11px] text-slate-400">
                  Private chat placeholder
                </span>
              </div>

              <p className="text-xs text-slate-600 mb-3">
                This area represents the secure messaging feature described in
                your report. In the final system, conversations between
                freelancers and clients will appear here.
              </p>

              {/* Example conversation list */}
              <div className="space-y-2 text-xs flex-1">
                <div className="border border-slate-200 rounded-xl px-3 py-2 flex justify-between items-start bg-slate-50/80">
                  <div>
                    <p className="font-semibold text-slate-800">
                      Ahmed • Plumbing job
                    </p>
                    <p className="text-slate-500">
                      &quot;Can you come tomorrow at 5 pm?&quot;
                    </p>
                  </div>
                  <span className="text-slate-400 ml-2 whitespace-nowrap">
                    2m ago
                  </span>
                </div>

                <div className="border border-slate-200 rounded-xl px-3 py-2 flex justify-between items-start bg-slate-50/80">
                  <div>
                    <p className="font-semibold text-slate-800">
                      Sara • Math tutoring
                    </p>
                    <p className="text-slate-500">
                      &quot;Thank you for the last session!&quot;
                    </p>
                  </div>
                  <span className="text-slate-400 ml-2 whitespace-nowrap">
                    1h ago
                  </span>
                </div>

                <div className="border border-dashed border-slate-300 rounded-xl px-3 py-3 text-slate-500 text-center mt-1">
                  Real chat messages will appear here once the backend messaging
                  module is implemented.
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
