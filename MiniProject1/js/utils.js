// utils.js

// Shared state
let allPlayers = [];
let teamNames = {};

// Useful stat keys and labels
const usefulStats = [
  "per",
  "tsPercent",
  "winShares",
  "vorp",
  "box",
  "assistPercent",
  "totalReboundPercent",
  "usagePercent",
];

const statLabels = {
  per: "PER",
  tsPercent: "TS%",
  winShares: "Win Shares",
  vorp: "VORP",
  box: "Box +/-",
  assistPercent: "Assist %",
  totalReboundPercent: "Total Rebound %",
  usagePercent: "Usage %",
};

function normalizePosition(pos) {
  if (!pos) return "";
  if (pos.includes("G")) return pos.includes("F") ? "SF" : "PG";
  if (pos.includes("F")) return pos.includes("C") ? "PF" : "SF";
  if (pos.includes("C")) return "C";
  return pos;
}

function getLastName(fullName) {
  return fullName.split(" ").slice(-1)[0];
}

function getRandomFromPool(pool) {
  return pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
}
