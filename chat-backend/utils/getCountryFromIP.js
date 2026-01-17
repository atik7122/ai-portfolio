export async function getCountryFromIP(ip) {
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();
    return data.country_name || "Unknown";
  } catch (err) {
    return "Unknown";
  }
}
