import { useEffect, useRef, useState } from "react";
import askAI from "../lib/askAI";
import useWhisperLikeVoice from "../lib/useWhisperLikeVoice";


export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I’m Zubair’s AI assistant. Ask me anything about his work, research, or experience.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔽 auto-scroll reference
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // 🎙️ Voice input
  const { startListening, isListening } = useWhisperLikeVoice((text) => {
    sendMessage(text);
  });

  // 🧠 MAIN SEND FUNCTION
  const sendMessage = async (voiceText) => {
    const finalInput = voiceText || input;
    if (!finalInput.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: finalInput },
    ]);

    setLoading(true);
    setInput("");

    const response = await askAI(finalInput);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text:
          response.replyText ||
          "I’m here. Ask me about Zubair’s projects, skills, or experience.",
      },
    ]);

    // scroll page section
    if (response.scrollTo) {
      document
        .getElementById(response.scrollTo)
        ?.scrollIntoView({ behavior: "smooth" });
    }

    // voice output
    if (response.voiceText) {
      speak(response.voiceText);
    }

    setLoading(false);
  };

  // 🔊 VOICE SPEAK
  function speak(text) {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.95;
    utterance.pitch = 1;

    window.speechSynthesis.speak(utterance);
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="fixed bottom-6 right-6 bg-slate-900 dark:bg-slate-700
                   text-white px-4 py-3 rounded-full shadow-lg z-50"
      >
        🤖 Ask AI
      </button>

      {open && (
        <div
          className="fixed bottom-20 right-6 w-80 h-[420px]
                     bg-white dark:bg-slate-900
                     text-slate-900 dark:text-slate-100
                     rounded-xl shadow-xl flex flex-col
                     z-50 overflow-hidden"
        >
          {/* Header */}
          <div
            className="p-3 font-semibold border-b bg-slate-50 dark:bg-slate-800
                       border-slate-200 dark:border-slate-700"
          >
            AI Assistant
          </div>

          {/* Messages */}
          <div className="p-3 flex-1 overflow-y-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[85%] ${
                  m.role === "user"
                    ? "bg-slate-200 dark:bg-slate-700 ml-auto text-right"
                    : "bg-slate-100 dark:bg-slate-800"
                }`}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div className="italic text-xs text-slate-400">
                AI is typing…
              </div>
            )}

            {/* auto-scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask something..."
              className="flex-1 rounded-lg px-2 py-1 text-sm
                         bg-white dark:bg-slate-800 text-slate-900
                         dark:text-slate-100 border border-slate-300
                         dark:border-slate-700"
            />

            <button
              onClick={() => sendMessage()}
              className="bg-slate-900 dark:bg-slate-700
                         text-white px-3 rounded-lg"
            >
              Send
            </button>

            <button
              onClick={startListening}
              className="bg-slate-700 dark:bg-slate-600
                         text-white px-3 rounded-lg"
            >
              {isListening ? "🎙️" : "🎤"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
