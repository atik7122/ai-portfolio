export function groupByCountry(questions) {
  const grouped = {};

  for (const item of questions) {
    if (!grouped[item.country]) {
      grouped[item.country] = [];
    }
    grouped[item.country].push(item.question);
  }

  return grouped;
}
