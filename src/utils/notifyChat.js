export async function notifyChat(message) {
  try {
    await fetch("http://localhost:5000/api/chat-log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message,
        time: Date.now()
      })
    });
  } catch (err) {
    console.error("Notify failed", err);
  }
}
