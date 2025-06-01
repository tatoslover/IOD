const pageContent = document.getElementById("page-content");

const tabs = {
  navAbout: "pages/about.html",
  navPlayers: "pages/players.html",
  navArena: "pages/arena.html",
};

async function loadTabContent(navId) {
  try {
    const response = await fetch(tabs[navId]);
    if (!response.ok) throw new Error(`Failed to load ${tabs[navId]}`);
    const html = await response.text();

    pageContent.innerHTML = html;

    Object.keys(tabs).forEach((key) => {
      document.getElementById(key).classList.toggle("active", key === navId);
    });

    if (navId === "navPlayers") {
      initializePlayersTab(); // assumes this is globally available from `players.js`
    }
  } catch (err) {
    pageContent.innerHTML = `<p class="text-danger">Error loading content: ${err.message}</p>`;
  }
}

Object.keys(tabs).forEach((navId) => {
  document.getElementById(navId).addEventListener("click", (e) => {
    e.preventDefault();
    loadTabContent(navId);
  });
});

loadTabContent("navAbout");
