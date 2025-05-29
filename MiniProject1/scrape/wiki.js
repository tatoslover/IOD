// node wiki.js

const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/2kRatings.json"), "utf-8"),
);

const uniqueNames = Array.from(new Set(data.map((p) => p.name)));

const generateSlug = (name) =>
  name
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^\w_()'-]/g, "");

async function scrapePlayer(name) {
  const slug = generateSlug(name);
  const url = `https://en.wikipedia.org/wiki/${slug}`;
  try {
    const res = await axios.get(url);
    const $ = cheerio.load(res.data);

    const infobox = $(".infobox");

    const img = infobox.find("img").first().attr("src");
    const image = img ? "https:" + img : null;

    const height =
      infobox.find("th:contains('Listed height')").next("td").text() ||
      infobox.find("th:contains('Height')").next("td").text();

    const weight =
      infobox.find("th:contains('Listed weight')").next("td").text() ||
      infobox.find("th:contains('Weight')").next("td").text();

    return {
      name,
      wiki: url,
      image,
      height: height.trim(),
      weight: weight.trim(),
    };
  } catch (err) {
    console.warn(`⚠️  Could not find Wikipedia page for ${name}`);
    return {
      name,
      wiki: url,
      image: null,
      height: null,
      weight: null,
      error: err.message,
    };
  }
}

(async () => {
  const results = [];

  for (let i = 0; i < uniqueNames.length; i++) {
    const name = uniqueNames[i];
    console.log(`🔍 Scraping ${name} (${i + 1}/${uniqueNames.length})...`);
    const data = await scrapePlayer(name);
    results.push(data);
    await new Promise((r) => setTimeout(r, 500)); // optional delay to avoid rate limits
  }

  fs.writeFileSync("players-extended.json", JSON.stringify(results, null, 2));
  console.log("✅ Scraping complete. Saved to players-extended.json");
})();
