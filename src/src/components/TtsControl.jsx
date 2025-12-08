// // client/src/components/TtsControl.jsx
// // import React, { useState, useEffect } from 'react';
// // import { Loader, Sparkles, MessageSquare } from 'lucide-react';
// // import { COLORS, VOICES } from '../utils/constants';
// // import { ttsGenerate } from '../utils/tts';

// // const TtsControl = ({ audioText, setAudioText, voice, setVoice, audioUrl, setAudioUrl, audioLoading, setAudioLoading }) => {
// //     const [localText, setLocalText] = useState(audioText);

// //     useEffect(() => {
// //         setLocalText(audioText);
// //         if (audioText) {
// //             // Note: ttsGenerate is called here to automatically speak text from other components
// //             ttsGenerate(audioText, voice, setAudioLoading, setAudioUrl);
// //         }
// //     }, [audioText, voice, setAudioLoading, setAudioUrl]); // Added voice to dependency array

// //     const handleGenerate = () => {
// //         if (localText) {
// //             setAudioText(localText);
// //             // Calling ttsGenerate here triggers the useEffect hook above
// //             ttsGenerate(localText, voice, setAudioLoading, setAudioUrl);
// //         }
// //     };

// //     return (
// //         <div className={`p-4 bg-${COLORS.card} rounded-xl shadow-inner border border-teal-100 mb-6`}>
// //             <h3 className={`text-lg font-semibold text-${COLORS.primaryDark} mb-3 flex items-center`}>
// //                 <MessageSquare className="w-5 h-5 mr-2" /> Speech Synthesis Feedback
// //             </h3>

// //             <div className="flex flex-col sm:flex-row gap-3 mb-3">
// //                 <div className="w-full sm:w-1/3">
// //                     <label htmlFor="voice-select" className="block text-xs font-medium text-gray-600">Voice</label>
// //                     <select
// //                         id="voice-select"
// //                         value={voice}
// //                         onChange={(e) => setVoice(e.target.value)}
// //                         className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
// //                     >
// //                         {VOICES.map(v => <option key={v.code} value={v.code}>{v.name}</option>)}
// //                     </select>
// //                 </div>
// //                 <div className="w-full sm:w-2/3">
// //                     <label htmlFor="tts-input" className="block text-xs font-medium text-gray-600">Text to Speak</label>
// //                     <input
// //                         id="tts-input"
// //                         type="text"
// //                         value={localText}
// //                         onChange={(e) => setLocalText(e.target.value)}
// //                         placeholder="Enter text to generate audio..."
// //                         className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
// //                     />
// //                 </div>
// //             </div>

// //             <div className="flex justify-between items-center">
// //                 <button
// //                     onClick={handleGenerate}
// //                     disabled={audioLoading || !localText}
// //                     className={`bg-${COLORS.secondary} text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-cyan-300 transition duration-300 disabled:opacity-50 flex items-center`}
// //                 >
// //                     {audioLoading ? <Loader className="w-4 h-4 mr-2 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2" />}
// //                     {audioLoading ? 'Generating...' : 'Speak Text'}
// //                 </button>
// //                 {audioUrl && (
// //                     <audio controls autoPlay src={audioUrl} className="mt-3 w-2/3">
// //                         Your browser does not support the audio element.
// //                     </audio>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default TtsControl;



// import React, { useState, useEffect } from 'react';
// import { Loader, Sparkles, MessageSquare } from 'lucide-react';
// import { COLORS, VOICES } from '../utils/constants';
// import { ttsGenerate } from '../utils/tts';

// const TtsControl = ({ audioText, setAudioText, voice, setVoice, audioUrl, setAudioUrl, audioLoading, setAudioLoading }) => {
//   const [localText, setLocalText] = useState(audioText);

//   useEffect(() => {
//     setLocalText(audioText);
//     if (audioText) {
//       ttsGenerate(audioText, voice, setAudioLoading, setAudioUrl);
//     }
//   }, [audioText, voice, setAudioLoading, setAudioUrl]);

//   const handleGenerate = () => {
//     if (localText) {
//       setAudioText(localText);
//       ttsGenerate(localText, voice, setAudioLoading, setAudioUrl);
//     }
//   };

//   return (
//     <div className={`p-4 bg-${COLORS.card || 'white'} rounded-xl shadow-inner border border-teal-100 mb-6`}>
//       <h3 className={`text-lg font-semibold text-${COLORS.primaryDark || 'teal-700'} mb-3 flex items-center`}>
//         <MessageSquare className="w-5 h-5 mr-2" /> Speech Synthesis Feedback
//       </h3>

//       <div className="flex flex-col sm:flex-row gap-3 mb-3">
//         <div className="w-full sm:w-1/3">
//           <label htmlFor="voice-select" className="block text-xs font-medium text-gray-600">Voice</label>
//           <select
//             id="voice-select"
//             value={voice}
//             onChange={(e) => setVoice(e.target.value)}
//             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
//           >
//             {VOICES.map(v => <option key={v.code} value={v.code}>{v.name}</option>)}
//           </select>
//         </div>
//         <div className="w-full sm:w-2/3">
//           <label htmlFor="tts-input" className="block text-xs font-medium text-gray-600">Text to Speak</label>
//           <input
//             id="tts-input"
//             type="text"
//             value={localText || ''}
//             onChange={(e) => setLocalText(e.target.value)}
//             placeholder="Enter text to generate audio..."
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
//           />
//         </div>
//       </div>

//       <div className="flex justify-between items-center">
//         <button
//           onClick={handleGenerate}
//           disabled={audioLoading || !localText}
//           className={`bg-${COLORS.secondary || 'cyan-200'} text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-cyan-300 transition duration-300 disabled:opacity-50 flex items-center`}
//         >
//           {audioLoading ? <Loader className="w-4 h-4 mr-2 animate-spin" /> : <Sparkles className="w-4 h-4 mr-2" />}
//           {audioLoading ? 'Generating...' : 'Speak Text'}
//         </button>
//         {audioUrl && (
//           <audio controls autoPlay src={audioUrl} className="mt-3 w-2/3">
//             Your browser does not support the audio element.
//           </audio>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TtsControl;


// src/components/TtsControl.jsx
import React, { useState, useEffect } from "react";
import { Loader, Sparkles, MessageSquare } from "lucide-react";
import { COLORS, VOICES } from "../utils/constants.js";
import { ttsGenerate } from "../utils/tts.jsx";

const TtsControl = ({
  audioText,
  setAudioText,
  voice,
  setVoice,
  audioUrl,
  setAudioUrl,
  audioLoading,
  setAudioLoading,
}) => {
  const [localText, setLocalText] = useState(audioText || "");

  useEffect(() => {
    setLocalText(audioText || "");
  }, [audioText]);

  const handleGenerate = () => {
    if (!localText) return;
    setAudioText(localText);
    ttsGenerate(localText, voice, setAudioLoading, setAudioUrl);
  };

  return (
    <div className="mt-4 mb-6">
      <div className="rounded-2xl border border-teal-100 bg-white shadow-sm p-4 sm:p-5">
        <h3 className="text-lg font-semibold text-teal-800 mb-3 flex items-center">
          <MessageSquare className="w-5 h-5 mr-2 text-teal-600" />
          Speech Synthesis Feedback
        </h3>

        <div className="flex flex-col sm:flex-row gap-3 mb-3">
          <div className="w-full sm:w-1/3">
            <label
              htmlFor="voice-select"
              className="block text-xs font-medium text-gray-600"
            >
              Voice
            </label>
            <select
              id="voice-select"
              value={voice}
              onChange={(e) => setVoice(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {VOICES.map((v) => (
                <option key={v.code} value={v.code}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full sm:w-2/3">
            <label
              htmlFor="tts-input"
              className="block text-xs font-medium text-gray-600"
            >
              Text to Speak
            </label>
            <input
              id="tts-input"
              type="text"
              value={localText}
              onChange={(e) => setLocalText(e.target.value)}
              placeholder="Enter text to generate audio..."
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <button
            onClick={handleGenerate}
            disabled={audioLoading || !localText}
            className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition disabled:opacity-50 disabled:cursor-default`}
          >
            {audioLoading ? (
              <>
                <Loader className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Speak Text
              </>
            )}
          </button>

          {audioUrl && (
            <audio
              controls
              autoPlay
              src={audioUrl}
              className="w-full sm:w-auto sm:flex-1"
            >
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      </div>
    </div>
  );
};

export default TtsControl;
