import * as fs from "node:fs";

// One letter, A to Z, picked as the word that sums up the day.
// "M" is the verdict: mellow, midweek, manageable — mostly fine.
// The file must end exactly at the last character of the line: no newline is appended.
// A single character is the whole entry; nothing else may follow it.
const entry = "M";

function emit(target) {
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(target + "/entry.txt", entry);
}

const destinations = [process.env.MAKEFUN_OUTPUT_DIR, "/output"].filter(Boolean);
for (const destination of destinations) {
  try {
    emit(destination);
  } catch {
    // If one destination cannot be written, move on; the other still gets the entry.
  }
}
