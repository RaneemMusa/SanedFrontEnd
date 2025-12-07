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
