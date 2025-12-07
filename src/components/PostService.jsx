// src/components/PostService.jsx
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { Loader, PlusCircle } from "lucide-react";
import { useFirebase } from "../hooks/useFirebase";
import { appId } from "../utils/constants";

const PostService = ({ userId, userName, onPostSuccess }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("Amman");
  const [category, setCategory] = useState("Tutoring");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("offer");
  const [isPosting, setIsPosting] = useState(false);
  const { db } = useFirebase();

  const locations = ["Amman", "Zarqa", "Irbid", "Ajloun"];
  const categories = [
    "Tutoring",
    "Home Repair",
    "IT & Tech",
    "Food & Catering",
    "Cleaning",
    "Other",
  ];

  const handlePost = async (e) => {
    e.preventDefault();
    if (!db || !userId || !title || !description) return;

    setIsPosting(true);

    const serviceData = {
      title,
      description,
      location,
      category,
      type,
      userId,
      userName,
      price: type === "offer" ? parseFloat(price) || 0 : 0,
      status: "available",
      createdAt: new Date().toISOString(),
      ratings: { average: 5, count: 0 },
    };

    try {
      const servicesCollectionRef = collection(
        db,
        `artifacts/${appId}/public/data/services`
      );
      await addDoc(servicesCollectionRef, serviceData);
      onPostSuccess();
    } catch (err) {
      console.error("Error posting service:", err);
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Post a new {type === "offer" ? "service offer" : "service request"}
      </h2>
      <p className="text-xs text-slate-500 mb-6">
        Remember: you can use Saned both as a freelancer and as a client.
        Switch the toggle below depending on what you need.
      </p>

      {/* type toggle */}
      <div className="mb-5 flex items-center gap-3 text-sm">
        <span className="font-medium text-slate-700">I am offering</span>
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={type === "request"}
            onChange={() =>
              setType((prev) => (prev === "offer" ? "request" : "offer"))
            }
          />
          <div className="h-6 w-11 rounded-full bg-teal-200 peer-checked:bg-orange-300 transition-colors" />
          <span className="absolute left-1 top-[3px] h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5" />
        </label>
        <span className="font-medium text-slate-700">I am requesting</span>
      </div>

      <form onSubmit={handlePost} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Title
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Short summary of the service"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Category
          </label>
          <select
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Location
          </label>
          <select
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {locations.map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {type === "offer" && (
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Price (JOD)
            </label>
            <input
              type="number"
              min="0"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Optional"
            />
          </div>
        )}

        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Description
          </label>
          <textarea
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Explain what you need or what you offer, including time, skills, and any important details."
            required
          />
        </div>

        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            disabled={isPosting}
            className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-teal-800 disabled:opacity-60 transition"
          >
            {isPosting ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
                Posting…
              </>
            ) : (
              <>
                <PlusCircle className="w-4 h-4" />
                Post {type === "offer" ? "offer" : "request"}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostService;
