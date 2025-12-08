// // client/src/components/ServiceCard.jsx
// import React from 'react';
// import { MapPin, DollarSign, Users, Sparkles, User } from 'lucide-react';
// import { COLORS } from '../utils/constants';

// const ServiceCard = ({ service }) => (
//   <div className={`bg-${COLORS.card} rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden border border-gray-100`}>
//     <div className={`bg-${COLORS.primary} h-32 flex items-center justify-center text-white text-xl font-bold p-4`}
//       style={{
//         backgroundImage: 'linear-gradient(135deg, rgba(0, 128, 128, 0.8), rgba(0, 206, 209, 0.6))',
//         backgroundBlendMode: 'multiply'
//       }}>
//       {service.type === 'offer' ? (
//         <Sparkles className="w-10 h-10 animate-pulse" />
//       ) : (
//         <Users className="w-10 h-10 animate-bounce" />
//       )}
//     </div>
//     <div className="p-5">
//       <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${service.type === 'offer' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
//         {service.type === 'offer' ? 'Service Offer' : 'Service Request'}
//       </span>
//       <h3 className={`mt-3 text-xl font-semibold text-${COLORS.text} truncate`}>{service.title}</h3>
//       <p className="mt-2 text-sm text-gray-500 line-clamp-2">{service.description}</p>
//       <div className="mt-4 flex flex-wrap items-center justify-between text-sm font-medium">
//         <div className={`flex items-center text-${COLORS.primaryDark}`}>
//           <MapPin className="w-4 h-4 mr-1" />
//           <span>{service.location}</span>
//         </div>
//         {service.price > 0 && (
//           <div className={`flex items-center text-green-600`}>
//             <DollarSign className="w-4 h-4 mr-1" />
//             <span>${service.price}</span>
//           </div>
//         )}
//       </div>
//       <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
//         <div className="text-sm text-gray-500 flex items-center">
//           <User className="w-4 h-4 mr-1" />
//           {service.userName}
//         </div>
//         <button className={`bg-${COLORS.secondary} text-gray-900 px-4 py-2 rounded-full text-xs font-bold hover:bg-cyan-300 transition duration-300 transform hover:scale-105`}>
//           View Details
//         </button>
//       </div>
//     </div>
//   </div>
// );

// export default ServiceCard;




// src/components/ServiceCard.jsx
import React from "react";
import { MapPin, DollarSign, Users, Sparkles, User } from "lucide-react";

const ServiceCard = ({ service }) => (
  <div className="rounded-xl bg-white shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden border border-slate-100">
    <div
      className="h-28 flex items-center justify-center text-white text-lg font-bold"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(15,118,110,0.95), rgba(6,182,212,0.8))",
      }}
    >
      {service.type === "offer" ? (
        <Sparkles className="w-8 h-8" />
      ) : (
        <Users className="w-8 h-8" />
      )}
    </div>
    <div className="p-4">
      <span
        className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
          service.type === "offer"
            ? "bg-emerald-100 text-emerald-700"
            : "bg-orange-100 text-orange-700"
        }`}
      >
        {service.type === "offer" ? "Service Offer" : "Service Request"}
      </span>
      <h3 className="mt-3 text-lg font-semibold text-slate-900 truncate">
        {service.title}
      </h3>
      <p className="mt-1 text-xs text-slate-600 line-clamp-2">
        {service.description}
      </p>

      <div className="mt-3 flex items-center justify-between text-xs font-medium">
        <div className="flex items-center text-teal-700">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{service.location}</span>
        </div>
        {service.price > 0 && (
          <div className="flex items-center text-emerald-600">
            <DollarSign className="w-4 h-4 mr-0.5" />
            <span>{service.price}</span>
          </div>
        )}
      </div>

      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center text-xs text-slate-500">
          <User className="w-4 h-4 mr-1" />
          <span>{service.userName}</span>
        </div>
        <button className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold text-white hover:bg-slate-800 transition">
          View details
        </button>
      </div>
    </div>
  </div>
);

export default ServiceCard;
