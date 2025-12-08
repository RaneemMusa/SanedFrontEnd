// // client/src/components/PostService.jsx
// import React, { useState } from 'react';
// import { collection, addDoc } from 'firebase/firestore';
// import { Loader, PlusCircle } from 'lucide-react';
// import { useFirebase } from '../hooks/useFirebase';
// import { COLORS, VOICES, appId } from '../utils/constants';

// const PostService = ({ userId, userName, onPostSuccess, setAudioText, setVoice }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [location, setLocation] = useState('Amman');
//   const [category, setCategory] = useState('Tutoring');
//   const [price, setPrice] = useState('');
//   const [type, setType] = useState('offer');
//   const [isPosting, setIsPosting] = useState(false);
//   const { db } = useFirebase();

//   const handlePost = async () => {
//     if (!title || !description || !location || !category || !userId || isPosting || !db) return;

//     setIsPosting(true);
//     const serviceData = {
//       title,
//       description,
//       location,
//       category,
//       type,
//       userId,
//       userName,
//       price: type === 'offer' ? parseFloat(price) || 0 : 0,
//       status: 'available',
//       createdAt: new Date().toISOString(),
//       ratings: { average: 5, count: 0 },
//     };

//     try {
//       const servicesCollectionRef = collection(db, `artifacts/${appId}/public/data/services`);
//       await addDoc(servicesCollectionRef, serviceData);
      
//       const ttsMessage = type === 'offer' 
//         ? `Great job, ${userName}! Your service offer has been posted!`
//         : `Request posted, ${userName}. Professionals in ${location} will see it soon.`;
//       setAudioText(ttsMessage);
//       setVoice(VOICES.find(v => v.name.includes('Upbeat'))?.code || VOICES[0].code);

//       onPostSuccess();
//     } catch (error) {
//       console.error("Error posting service:", error);
//     } finally {
//       setIsPosting(false);
//     }
//   };

//   const locations = ['Amman', 'Zarqa', 'Irbid', 'Ajloun'];
//   const categories = ['Tutoring', 'Home Repair', 'IT & Tech', 'Food & Catering', 'Cleaning', 'Other'];

//   return (
//     <div className={`bg-${COLORS.card} p-8 rounded-xl shadow-2xl max-w-2xl mx-auto my-10 animate-fade-in`}>
//       <h2 className={`text-3xl font-bold text-${COLORS.primaryDark} mb-6 border-b pb-3`}>
//         Post a New {type === 'offer' ? 'Service Offer' : 'Service Request'}
//       </h2>

//       <div className="mb-4">
//         <label className="inline-flex items-center cursor-pointer">
//           <span className="mr-3 font-medium text-gray-700">I am Offering a Service</span>
//           <div className="relative">
//             <input
//               type="checkbox"
//               className="sr-only"
//               checked={type === 'request'}
//               onChange={() => setType(type === 'offer' ? 'request' : 'offer')}
//             />
//             <div className={`block w-14 h-8 rounded-full transition-colors duration-300 ${type === 'offer' ? 'bg-teal-300' : 'bg-orange-300'}`}></div>
//             <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 shadow ${type === 'offer' ? '' : 'transform translate-x-6'}`}></div>
//           </div>
//           <span className="ml-3 font-medium text-gray-700">I am Requesting a Service</span>
//         </label>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//           <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}
//             className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500" required />
//         </div>
//         <div>
//           <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
//           <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
//             {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
//           </select>
//         </div>
//         <div>
//           <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
//           <select id="location" value={location} onChange={(e) => setLocation(e.target.value)}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md">
//             {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
//           </select>
//         </div>
//         {type === 'offer' && (
//           <div>
//             <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (USD)</label>
//             <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="0 for negotiable"
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500" />
//           </div>
//         )}
//       </div>

//       <div className="mt-4">
//         <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//         <textarea id="description" rows="4" value={description} onChange={(e) => setDescription(e.target.value)}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-teal-500 focus:border-teal-500" required></textarea>
//       </div>

//       <div className="mt-6 flex justify-end">
//         <button
//           onClick={handlePost}
//           disabled={isPosting}
//           className={`bg-${COLORS.primary} text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-${COLORS.primaryDark} transition duration-300 transform hover:scale-105 disabled:opacity-50 flex items-center`}
//         >
//           {isPosting ? <Loader className="w-5 h-5 mr-2 animate-spin" /> : <PlusCircle className="w-5 h-5 mr-2" />}
//           {isPosting ? 'Posting...' : `Publish ${type === 'offer' ? 'Offer' : 'Request'}`}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PostService;



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
