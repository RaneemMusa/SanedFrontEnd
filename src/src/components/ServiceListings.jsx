// // client/src/components/ServiceListings.jsx
// import React, { useState, useMemo } from 'react';
// import { Search, MapPin } from 'lucide-react';
// import { COLORS } from '../utils/constants';
// import ServiceCard from './ServiceCard';

// const ServiceListings = ({ services }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterLocation, setFilterLocation] = useState('');
//   const [filterType, setFilterType] = useState('');
//   const [filterCategory, setFilterCategory] = useState('');

//   const locations = [...new Set(services.map(s => s.location))];
//   const categories = [...new Set(services.map(s => s.category))];

//   const filteredServices = useMemo(() => {
//     return services.filter(service => {
//       const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         service.description.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesLocation = filterLocation === '' || service.location === filterLocation;
//       const matchesType = filterType === '' || service.type === filterType;
//       // Note: filterCategory is currently unused in the UI but remains for potential future use.
//       // const matchesCategory = filterCategory === '' || service.category === filterCategory;

//       return matchesSearch && matchesLocation && matchesType; // && matchesCategory;
//     });
//   }, [services, searchTerm, filterLocation, filterType]);

//   return (
//     <div className="p-6 md:p-10">
//       <h2 className={`text-4xl font-bold text-center text-${COLORS.text} mb-2`}>Browse Local Services</h2>
//       <p className="text-center text-gray-600 mb-10">Find trusted professionals or post your own request in your community.</p>

//       {/* Filter Bar */}
//       <div className={`bg-${COLORS.card} p-6 rounded-xl shadow-lg mb-10 flex flex-col md:flex-row gap-4 transition duration-500`}>
//         <div className="flex-1">
//           <label className="block text-sm font-medium text-gray-700">Keyword Search</label>
//           <div className="mt-1 flex rounded-md shadow-sm">
//             <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm`}>
//               <Search className="w-5 h-5" />
//             </span>
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="e.g., computer repair, tutoring"
//               className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 focus:ring-teal-500 focus:border-teal-500"
//             />
//           </div>
//         </div>

//         <div className="w-full md:w-1/4">
//           <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
//           <select
//             id="location"
//             value={filterLocation}
//             onChange={(e) => setFilterLocation(e.target.value)}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md transition duration-300"
//           >
//             <option value="">All Locations</option>
//             {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
//           </select>
//         </div>

//         <div className="w-full md:w-1/4">
//           <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
//           <select
//             id="type"
//             value={filterType}
//             onChange={(e) => setFilterType(e.target.value)}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md transition duration-300"
//           >
//             <option value="">All Types</option>
//             <option value="offer">Service Offers</option>
//             <option value="request">Service Requests</option>
//           </select>
//         </div>
//       </div>
//       {/* Services Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredServices.length > 0 ? (
//           filteredServices.map(service => <ServiceCard key={service.id} service={service} />)
//         ) : (
//           <div className={`col-span-full text-center p-12 bg-white rounded-xl shadow-inner text-gray-600`}>
//             <p className="text-xl font-medium">No services match your criteria. Try adjusting your filters!</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServiceListings;



// src/components/ServiceListings.jsx
import React, { useState, useMemo } from "react";
import { Search, MapPin } from "lucide-react";
import ServiceCard from "./ServiceCard.jsx";

const ServiceListings = ({ services }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterType, setFilterType] = useState("");

  const locations = [...new Set(services.map((s) => s.location))];

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesSearch =
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLocation =
        filterLocation === "" || service.location === filterLocation;
      const matchesType = filterType === "" || service.type === filterType;

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [services, searchTerm, filterLocation, filterType]);

  return (
    <div className="p-6 md:p-10 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Browse local services
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          Use the filters to find the right help, or just explore what your
          community offers.
        </p>
      </div>

      {/* Filters */}
      <div className="rounded-2xl bg-white p-6 shadow-md flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Keyword search
          </label>
          <div className="flex rounded-lg border border-slate-300 bg-slate-50">
            <span className="inline-flex items-center px-3 text-slate-500">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              className="flex-1 rounded-r-lg border-0 bg-slate-50 px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="e.g. math tutor, electrician…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Location
          </label>
          <div className="relative">
            <MapPin className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <select
              className="w-full rounded-lg border border-slate-300 bg-white pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
            >
              <option value="">All locations</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Type
          </label>
          <select
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="">Offers & Requests</option>
            <option value="offer">Service offers</option>
            <option value="request">Service requests</option>
          </select>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.length === 0 ? (
          <p className="text-sm text-slate-500">
            No services match your filters yet. Try changing the search keywords
            or location.
          </p>
        ) : (
          filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        )}
      </div>
    </div>
  );
};

export default ServiceListings;
