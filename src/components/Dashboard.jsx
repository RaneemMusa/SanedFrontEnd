// // client/src/components/Dashboard.jsx
// import React from 'react';
// import { Sparkles, Users, MessageSquare } from 'lucide-react';
// import { COLORS, getCurrentUserName, VOICES } from '../utils/constants';

// const Dashboard = ({ userId, services, setPage, setAudioText, setVoice }) => {
//   const userServices = services.filter(s => s.userId === userId);
//   const userOffers = userServices.filter(s => s.type === 'offer');
//   const userRequests = userServices.filter(s => s.type === 'request');

//   const offersCount = userOffers.length;
//   const requestsCount = userRequests.length;
//   const userName = getCurrentUserName(userId);

//   const Card = ({ title, count, bgColor, icon: Icon, onClick }) => (
//     <button onClick={onClick} className={`bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:translate-y-[-2px] border-t-4 border-${bgColor} text-left w-full`}>
//       <div className="flex justify-between items-center">
//         <div>
//           <p className="text-sm font-medium text-gray-500 uppercase">{title}</p>
//           <h3 className={`text-4xl font-extrabold mt-1 text-${COLORS.text}`}>{count}</h3>
//         </div>
//         <Icon className={`w-10 h-10 text-${bgColor} opacity-70`} />
//       </div>
//       <p className="mt-3 text-xs text-gray-500">Click to manage all.</p>
//     </button>
//   );

//   return (
//     <div className="p-6 md:p-10">
//       <div className={`bg-${COLORS.primary} p-8 rounded-xl shadow-xl mb-10 text-white`}
//         style={{ backgroundImage: 'linear-gradient(90deg, #008080, #00BFFF)' }}>
//         <h1 className="text-4xl font-extrabold mb-1">Welcome Back, {userName}!</h1>
//         <p className="text-lg opacity-90">Manage your local freelance offers and requests. You are logged in as **{userId}**.</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//         <Card title="My Offers" count={offersCount} bgColor="teal-500" icon={Sparkles} onClick={() => setPage('post')} />
//         <Card title="My Requests" count={requestsCount} bgColor="orange-500" icon={Users} onClick={() => setPage('post')} />
//         <Card title="New Messages (Mock)" count={3} bgColor="cyan-500" icon={MessageSquare} onClick={() => {
//             setAudioText("You have three new messages! Check your inbox.");
//             setVoice(VOICES.find(v => v.name.includes('Informative'))?.code || VOICES[0].code);
//         }} />
//       </div>

//       <div className={`bg-${COLORS.card} p-8 rounded-xl shadow-2xl`}>
//         <h2 className={`text-2xl font-bold text-${COLORS.text} mb-6`}>Latest Activity</h2>
//         <div className="space-y-4">
//           {userServices.length > 0 ? (
//             userServices.slice(0, 5).map(service => (
//               <div key={service.id} className="flex justify-between items-center p-4 border border-gray-100 rounded-lg transition duration-300 hover:bg-gray-50">
//                 <div className="flex items-center">
//                   <div className={`p-2 rounded-full mr-4 ${service.type === 'offer' ? 'bg-teal-100 text-teal-600' : 'bg-orange-100 text-orange-600'}`}>
//                     {service.type === 'offer' ? <Sparkles className="w-5 h-5" /> : <Users className="w-5 h-5" />}
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-800">{service.title}</p>
//                     <p className="text-sm text-gray-500">{service.type === 'offer' ? 'Offer Posted' : 'Request Published'} in {service.location}</p>
//                   </div>
//                 </div>
//                 <span className="text-xs text-gray-400">{new Date(service.createdAt).toLocaleDateString()}</span>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500 italic">No services or requests posted yet. Time to get started!</p>
//           )}
//         </div>

//         <button onClick={() => setPage('post')} className={`mt-8 w-full bg-cyan-500 text-gray-900 font-bold py-3 rounded-lg hover:bg-cyan-400 transition duration-300 shadow-md`}>
//           Post a New Service or Request
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




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
