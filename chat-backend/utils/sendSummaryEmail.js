import nodemailer from "nodemailer";

export async function sendSummaryEmail(country, ip) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const message = `
🚀 New Portfolio Visitor

Country: ${country}
IP: ${ip}
Time: ${new Date().toLocaleString()}
`;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Portfolio Visitor 👀",
      text: message,
    });

    console.log("📧 Visitor email sent");
  } catch (err) {
    console.log("Email error:", err.message);
  }
}
