export async function getVisitorCountry() {
  try {
    const res = await fetch("https://www.cloudflare.com/cdn-cgi/trace");
    const text = await res.text();

    const countryLine = text
      .split("\n")
      .find(line => line.startsWith("loc="));

    return countryLine ? countryLine.split("=")[1] : "Unknown";
  } catch (error) {
    console.error("Country fetch failed:", error);
    return "Unknown";
  }
}
