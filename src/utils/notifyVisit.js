import emailjs from "emailjs-com";

export function notifyVisit() {
  emailjs.send(
    "service_up01j3c",
    "template_5k7zlba",
    {
      page: "Home",
      time: new Date().toLocaleString()
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
