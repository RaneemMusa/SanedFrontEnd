// client/src/utils/tts.js
import { VOICES } from './constants';

// Utility function to convert PCM audio data (base64) to a playable WAV blob
export const base64ToArrayBuffer = (base64) => {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
};

export const pcmToWav = (pcmData, sampleRate) => {
    const pcm16 = pcmData; // Already Int16Array
    const numChannels = 1;
    const numSamples = pcm16.length;
    const byteRate = sampleRate * numChannels * 2; // 2 bytes per sample (16-bit)
    const blockAlign = numChannels * 2;

    const buffer = new ArrayBuffer(44 + numSamples * 2);
    const view = new DataView(buffer);
    let offset = 0;

    // RIFF identifier 'RIFF'
    view.setUint32(offset, 0x52494646, false); offset += 4;
    // file length
    view.setUint32(offset, 36 + numSamples * 2, true); offset += 4;
    // RIFF type 'WAVE'
    view.setUint32(offset, 0x57415645, false); offset += 4;
    // format chunk identifier 'fmt '
    view.setUint32(offset, 0x666d7420, false); offset += 4;
    // format chunk length
    view.setUint32(offset, 16, true); offset += 4;
    // sample format (1 - PCM)
    view.setUint16(offset, 1, true); offset += 2;
    // number of channels
    view.setUint16(offset, numChannels, true); offset += 2;
    // sample rate
    view.setUint32(offset, sampleRate, true); offset += 4;
    // byte rate
    view.setUint32(offset, byteRate, true); offset += 4;
    // block align
    view.setUint16(offset, blockAlign, true); offset += 2;
    // bits per sample
    view.setUint16(offset, 16, true); offset += 2;
    // data chunk identifier 'data'
    view.setUint32(offset, 0x64617461, false); offset += 4;
    // data chunk length
    view.setUint32(offset, numSamples * 2, true); offset += 4;

    // Write the PCM data
    for (let i = 0; i < numSamples; i++) {
        view.setInt16(offset, pcm16[i], true);
        offset += 2;
    }

    return new Blob([buffer], { type: 'audio/wav' });
};

// --- API Function for TTS (Text-to-Speech) ---
export const ttsGenerate = async (text, voiceName, setAudioLoading, setAudioUrl) => {
    setAudioLoading(true);
    setAudioUrl(null);
    const payload = {
        contents: [{
            parts: [{ text: text }]
        }],
        generationConfig: {
            responseModalities: ["AUDIO"],
            speechConfig: {
                voiceConfig: {
                    prebuiltVoiceConfig: { voiceName: voiceName }
                }
            }
        },
        model: "gemini-2.5-flash-preview-tts"
    };

    const apiKey = "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;

    let response;
    let attempt = 0;
    const maxRetries = 5;

    while (attempt < maxRetries) {
        try {
            response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.status === 429 && attempt < maxRetries - 1) {
                // Exponential backoff
                const delay = Math.pow(2, attempt) * 1000;
                await new Promise(resolve => setTimeout(resolve, delay));
                attempt++;
                continue;
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            const part = result?.candidates?.[0]?.content?.parts?.[0];
            const audioData = part?.inlineData?.data;
            const mimeType = part?.inlineData?.mimeType;

            if (audioData && mimeType && mimeType.startsWith("audio/")) {
                const sampleRateMatch = mimeType.match(/rate=(\d+)/);
                const sampleRate = sampleRateMatch ? parseInt(sampleRateMatch[1], 10) : 16000;

                const pcmData = base64ToArrayBuffer(audioData);
                const pcm16 = new Int16Array(pcmData);
                const wavBlob = pcmToWav(pcm16, sampleRate);
                const url = URL.createObjectURL(wavBlob);
                setAudioUrl(url);
            } else {
                console.error("TTS generation failed or returned no audio data.");
            }
            break; // Exit loop on success
        } catch (error) {
            console.error("Error generating TTS:", error);
            if (attempt < maxRetries - 1) {
                const delay = Math.pow(2, attempt) * 1000;
                await new Promise(resolve => setTimeout(resolve, delay));
                attempt++;
            } else {
                console.error("Max retries reached. TTS generation failed.");
            }
        }
    }
    setAudioLoading(false);
};