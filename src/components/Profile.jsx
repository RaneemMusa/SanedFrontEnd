// src/components/Profile.jsx
import React from "react";
import { UserCircle2, MessageSquare, Inbox, Sparkles } from "lucide-react";
import ServiceCard from "./ServiceCard.jsx";

const Profile = ({ userId, services, setPage }) => {
  const myServices = services.filter((s) => s.userId === userId);

  return (
    <div className="py-8 space-y-8">
      {/* Header */}
      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center text-white">
            <UserCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">My Profile</h1>
            <p className="text-sm text-slate-500">
              Overview of all the services you posted and your conversations.
            </p>
          </div>
        </div>

        <button
          onClick={() => setPage("post")}
          className="inline-flex items-center gap-1 rounded-full bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-teal-700 transition"
        >
          <Sparkles className="w-4 h-4" />
          Post new offer / request
        </button>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-8">
        {/* My posts */}
        <section className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-1">
            My posts
          </h2>
          <p className="text-xs text-slate-500 mb-4">
            All service offers and requests created using your Saned account.
          </p>

          {myServices.length === 0 ? (
            <p className="text-sm text-slate-500 italic">
              You haven&apos;t posted anything yet. Start by creating an offer
              or request.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {myServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </section>

        {/* Messages / Chat */}
        <section className="space-y-4">
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5 text-teal-700" />
              <h3 className="text-sm font-semibold text-slate-900">
                Conversations (UI only for now)
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              This section is reserved for secure messaging between clients and
              providers. The UI is ready; backend integration can plug into this
              component later.
            </p>
            <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
              <p className="font-semibold mb-1">Example layout:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>List of conversations on the left</li>
                <li>Selected chat messages on the right</li>
                <li>Input box to send new messages</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Inbox className="w-5 h-5 text-teal-700" />
              <h3 className="text-sm font-semibold text-slate-900">
                Notifications
              </h3>
            </div>
            <p className="text-xs text-slate-500 mb-3">
              Future area for system notifications: new offers, accepted
              requests, admin messages, etc.
            </p>
            <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-500">
              You don&apos;t have any notifications yet.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
