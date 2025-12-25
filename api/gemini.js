export default async function handler(req, res) {
  console.log("✅ GEMINI API HIT");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "No message provided" });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are an AI assistant answering questions about Zubair Rahman Tusar, his projects, skills, and experience.\n\nUser: ${message}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log("🔹 GEMINI RAW:", JSON.stringify(data));

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't understand that.";

    res.status(200).json({ reply });
  } catch (err) {
    console.error("❌ GEMINI ERROR:", err);
    res.status(500).json({ error: "Gemini failed" });
  }
}
