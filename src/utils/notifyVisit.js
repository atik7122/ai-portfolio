import emailjs from "emailjs-com";
import { getVisitorCountry } from "./getVisitorCountry";


export async function notifyVisit() {
    const country = await getVisitorCountry() || "Unknown";

  emailjs.send(
    "service_up01j3c",
    "template_5k7zlba",
    {
    country: country,              // ✅ must be 'country'
    page: "Home",
    time: new Date().toLocaleString(),
    },
    "OKo0B-yuptaQCLi0C"
  )
  .then(() => {
    console.log("Visitor email sent");
  })
  .catch((err) => {
    console.error("Email failed:", err);
  });
}
