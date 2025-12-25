export function cleanTranscript(text) {
  return text
    .replace(/\s+/g, " ")
    .replace(/\b(um|uh|hmm)\b/gi, "")
    .trim();
}
