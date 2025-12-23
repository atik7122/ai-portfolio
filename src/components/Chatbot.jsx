import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I’m Zubair’s AI assistant. Ask me anything." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Fast mock response (real-time feel)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          text: "Thanks for your question. I’ll be able to answer more soon."
        }
      ]);
      setLoading(false);
    }, 1000); // ~1 second latency
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-slate-900 text-white px-4 py-3 rounded-full shadow-lg hover:bg-slate-800 transition z-50"
      >
        🤖 Ask AI
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-xl flex flex-col z-50">
          
          <div className="p-3 font-semibold border-b">
            AI Assistant
          </div>

          <div className="p-3 flex-1 overflow-y-auto space-y-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg ${
                  m.role === "user"
                    ? "bg-slate-200 text-right"
                    : "bg-slate-100"
                }`}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div className="text-slate-400 italic">
                AI is typing...
              </div>
            )}
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Type your question..."
              className="flex-1 border rounded-lg px-2 py-1 text-sm"
            />
            <button
              onClick={sendMessage}
              className="bg-slate-900 text-white px-3 rounded-lg"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
