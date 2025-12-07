// src/components/Dashboard.jsx
import React from "react";
import { Sparkles, Users, MessageSquare } from "lucide-react";

const Dashboard = ({ userId, services, setPage }) => {
  const userServices = services.filter((s) => s.userId === userId);
  const offers = userServices.filter((s) => s.type === "offer");
  const requests = userServices.filter((s) => s.type === "request");

  const Card = ({ title, count, color, icon: Icon, onClick, note }) => (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-xl bg-white p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 border-t-4 ${color}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
            {title}
          </p>
          <h3 className="mt-1 text-3xl font-extrabold text-slate-900">
            {count}
          </h3>
        </div>
        <Icon className="w-9 h-9 text-slate-500" />
      </div>
      {note && (
        <p className="mt-3 text-xs text-slate-500">
          {note}
        </p>
      )}
    </button>
  );

  return (
    <div className="p-6 md:p-10 space-y-10">
      {/* Welcome banner */}
      <section
        className="rounded-2xl p-8 text-white shadow-xl"
        style={{
          backgroundImage: "linear-gradient(90deg,#0f766e,#06b6d4)",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Welcome back!
        </h1>
        <p className="text-sm md:text-base text-teal-50 max-w-2xl">
          From this dashboard you can manage both your{" "}
          <strong>service offers</strong> and{" "}
          <strong>service requests</strong>, chat with others, and keep track of
          your local freelance activity.
        </p>
      </section>

      {/* Role cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title="My Offers"
          count={offers.length}
          color="border-teal-500"
          icon={Sparkles}
          onClick={() => setPage("post")}
          note="Services you provide to others."
        />
        <Card
          title="My Requests"
          count={requests.length}
          color="border-orange-500"
          icon={Users}
          onClick={() => setPage("post")}
          note="Help you are asking from the community."
        />
        <Card
          title="Messages (coming soon)"
          count={3}
          color="border-cyan-500"
          icon={MessageSquare}
          onClick={() => {}}
          note="Secure chat will be connected to the backend."
        />
      </section>

      {/* Latest activity */}
      <section className="rounded-2xl bg-white p-8 shadow-xl">
        <h2 className="text-xl font-bold text-slate-900 mb-4">
          Latest activity
        </h2>
        {userServices.length === 0 ? (
          <p className="text-sm text-slate-500 italic">
            You haven’t posted any offers or requests yet. Start by creating one
            below.
          </p>
        ) : (
          <div className="space-y-3">
            {userServices.slice(0, 5).map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between rounded-lg border border-slate-100 px-4 py-3 hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                      service.type === "offer"
                        ? "bg-teal-100 text-teal-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {service.type === "offer" ? "O" : "R"}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {service.title}
                    </p>
                    <p className="text-xs text-slate-500">
                      {service.type === "offer" ? "Offer" : "Request"} in{" "}
                      {service.location}
                    </p>
                  </div>
                </div>
                <span className="text-xs text-slate-400">
                  {new Date(service.createdAt).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setPage("post")}
          className="mt-6 w-full rounded-lg bg-cyan-500 py-2.5 text-sm font-semibold text-slate-900 hover:bg-cyan-400 transition shadow"
        >
          Post a new service or request
        </button>
      </section>
    </div>
  );
};

export default Dashboard;
