import { useEffect, useRef, useState } from "react";

export default function useWhisperLikeVoice(onResult) {
  const recognitionRef = useRef(null);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);

    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const cleaned = transcript.trim(); // ✅ FIX
      onResult(cleaned);
    };

    recognitionRef.current = recognition;
  }, [onResult]);

  const startListening = () => {
    recognitionRef.current?.start();
  };

  return { startListening, isListening };
}
