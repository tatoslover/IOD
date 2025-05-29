import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { load } from "cheerio";
import axios from "axios";

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const namesFilePath = path.join(__dirname, "../data/names.json");
const outputFilePath = path.join(__dirname, "../data/2kRatings.json");

// Delay helper
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Turn name into URL slug
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z\-]/g, "");
}

// Read JSON or fallback to empty array
async function readJSON(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write JSON
async function writeJSON(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

// Scrape player data
async function scrapePlayer(slug, name) {
  const url = `https://www.2kratings.com/${slug}`;
  console.log(`Scraping: ${name} → ${url}`);

  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
      "(KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    Referer: "https://www.google.com/",
    Connection: "keep-alive",
  };

  const response = await axios.get(url, { headers });

  const html = response.data;
  const $ = load(html);

  const getValue = (label) =>
    $(`.player-info p:contains("${label}")`)
      .text()
      .replace(`${label}:`, "")
      .trim();

  const image = $(".player-img").attr("src") || "";
  const nationality = getValue("Nationality");
  const position = getValue("Position");
  const height = getValue("Height");
  const weight = getValue("Weight");
  const wingspan = getValue("Wingspan");
  const yearsPro = getValue("Years in NBA");

  const stats = {};
  $(".player-overall-section .badge-row .badge-col").each((_, el) => {
    const label = $(el).find(".badge-title").text().trim();
    const value = $(el).find(".badge-rating").text().trim();
    if (label && value) stats[label] = Number(value);
  });

  return {
    name,
    url,
    image,
    nationality,
    position,
    height,
    weight,
    wingspan,
    yearsPro,
    stats,
  };
}

// Main scraping logic
async function main() {
  const names = await readJSON(namesFilePath);
  const cached = await readJSON(outputFilePath);

  const alreadyDone = new Set(cached.map((p) => p.name));
  const results = [...cached];

  for (const { name } of names) {
    if (alreadyDone.has(name)) {
      console.log(`Skipping: ${name} (cached)`);
      continue;
    }

    try {
      const slug = slugify(name);
      const playerData = await scrapePlayer(slug, name);
      results.push(playerData);
      await writeJSON(outputFilePath, results);
    } catch (err) {
      console.error(`Error scraping ${name}:`, err.message);
    }

    await sleep(1000); // polite 1-second delay
  }

  console.log("✅ Scraping complete.");
}

main();
