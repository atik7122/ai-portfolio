import { useState } from "react";
import askAI from "../lib/askAI";
import { speak } from "../lib/speak";
import useWhisperLikeVoice from "../lib/useWhisperLikeVoice";


export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I’m Zubair’s AI assistant. Ask me anything about his work, research, or experiences.",
    },
  ]);
  const { startListening, isListening } = useWhisperLikeVoice((text) => {
  sendMessage(text);
});

  
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (msg) => {
    const userMessage = msg || input;
    if (!userMessage.trim() || loading) return;

    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const reply = await askAI(userMessage);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: reply },
      ]);

      speak(reply); // 🔊 AI speaks
    } catch {
      const errorMsg = "Sorry, something went wrong.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: errorMsg },
      ]);
      speak(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="fixed bottom-6 right-6 bg-slate-900 text-white px-4 py-3 rounded-full shadow-lg z-50"
      >
        🤖 Ask AI
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-xl flex flex-col z-50">
          <div className="p-3 font-semibold border-b bg-slate-50">
            AI Assistant
          </div>

          <div className="p-3 flex-1 overflow-y-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[85%] ${
                  m.role === "user"
                    ? "bg-slate-200 ml-auto text-right"
                    : "bg-slate-100"
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
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask something..."
              className="flex-1 border rounded-lg px-2 py-1 text-sm"
            />

            <button
              onClick={() => sendMessage()}
              className="bg-slate-900 text-white px-3 rounded-lg"
            >
              Send
            </button>

            <button
              onClick={startListening}
              className="bg-slate-700 text-white px-3 rounded-lg"
            >
              {isListening ? "🎙️" : "🎤"}
            </button>


          </div>
        </div>
      )}
    </>
  );
}
