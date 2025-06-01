let allPlayers = [];
let teamNames = {};

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

const pageContent = document.getElementById("page-content");

const tabs = {
  navAbout: "pages/about.html",
  navPlayers: "pages/players.html",
  navArena: "pages/arena.html",
};

// Load HTML and initialize tab content
async function loadTabContent(navId) {
  try {
    const response = await fetch(tabs[navId]);
    if (!response.ok) throw new Error(`Failed to load ${tabs[navId]}`);
    const html = await response.text();

    pageContent.innerHTML = html;

    // Update active nav link
    Object.keys(tabs).forEach((key) => {
      document.getElementById(key).classList.toggle("active", key === navId);
    });

    // Initialize tab-specific code
    if (navId === "navPlayers") {
      initializePlayersTab();
    }
    // Add other tab initializations here if needed
  } catch (err) {
    pageContent.innerHTML = `<p class="text-danger">Error loading content: ${err.message}</p>`;
  }
}

// Set up nav click handlers
Object.keys(tabs).forEach((navId) => {
  document.getElementById(navId).addEventListener("click", (e) => {
    e.preventDefault();
    loadTabContent(navId);
  });
});

// Load About tab by default on page load
loadTabContent("navAbout");

// ----------- Players tab code ------------

function initializePlayersTab() {
  // Find elements inside loaded players.html
  const container = document.getElementById("card-container");
  const teamFilter = document.getElementById("teamFilter");
  const positionFilter = document.getElementById("positionFilter");
  const statSort = document.getElementById("statSort");
  const nameSearch = document.getElementById("nameSearch");

  // Defensive: if these don't exist, don't proceed
  if (
    !container ||
    !teamFilter ||
    !positionFilter ||
    !statSort ||
    !nameSearch
  ) {
    console.error("Players tab: required elements not found.");
    return;
  }

  // Load player and team data (you could cache this if you want)
  Promise.all([
    fetch("../data/stats.json").then((res) => res.json()),
    fetch("../data/teams.json").then((res) => res.json()),
  ])
    .then(([players, teams]) => {
      allPlayers = players
        .map((p) => ({
          ...p,
          position: normalizePosition(p.position),
        }))
        .sort((a, b) =>
          getLastName(a.playerName).localeCompare(getLastName(b.playerName)),
        );

      teamNames = teams;

      populateTeamFilter(allPlayers, teamFilter);
      populatePositionFilter(allPlayers, positionFilter);
      displayPlayers(allPlayers, container);

      teamFilter.addEventListener("change", () =>
        filterAndSortPlayers(
          container,
          teamFilter,
          positionFilter,
          statSort,
          nameSearch,
        ),
      );
      positionFilter.addEventListener("change", () =>
        filterAndSortPlayers(
          container,
          teamFilter,
          positionFilter,
          statSort,
          nameSearch,
        ),
      );
      statSort.addEventListener("change", () =>
        filterAndSortPlayers(
          container,
          teamFilter,
          positionFilter,
          statSort,
          nameSearch,
        ),
      );
      nameSearch.addEventListener("input", () =>
        filterAndSortPlayers(
          container,
          teamFilter,
          positionFilter,
          statSort,
          nameSearch,
        ),
      );
    })
    .catch((err) => {
      container.innerHTML = `<p class="text-danger">Failed to load player data: ${err.message}</p>`;
    });
}

function normalizePosition(pos) {
  if (!pos) return "Unknown";
  const primary = pos.split("-")[0];
  const validPositions = ["PG", "SG", "SF", "PF", "C"];
  return validPositions.includes(primary) ? primary : "Unknown";
}

function getLastName(fullName) {
  return fullName.trim().split(" ").slice(-1)[0].toLowerCase();
}

function displayPlayers(players, container) {
  container.innerHTML = "";

  players.forEach((player) => {
    const card = document.createElement("div");
    card.className = "col-sm-6 col-md-4 col-lg-3";

    card.innerHTML = `
      <div class="card h-100 shadow">
        <div class="card-body">
          <h5 class="card-title">${player.playerName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${teamNames[player.team] || player.team} (${player.season})</h6>
          <p class="card-text">
            <strong>Position:</strong> ${player.position}<br>
            ${usefulStats
              .map((stat) => {
                const value = player[stat];
                if (value === undefined || value === null) return "";
                const label = statLabels[stat];
                const formatted =
                  stat === "tsPercent"
                    ? (value * 100).toFixed(1) + "%"
                    : value.toFixed(1);
                return `<strong>${label}:</strong> ${formatted}<br>`;
              })
              .join("")}
          </p>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function populateTeamFilter(players, teamFilter) {
  teamFilter.innerHTML = `<option value="all">All Teams</option>`;
  const teams = [...new Set(players.map((p) => p.team))].sort();
  teams.forEach((team) => {
    const option = document.createElement("option");
    option.value = team;
    option.textContent = teamNames[team] || team;
    teamFilter.appendChild(option);
  });
}

function populatePositionFilter(players, positionFilter) {
  positionFilter.innerHTML = `<option value="all">All Positions</option>`;
  const positions = ["PG", "SG", "SF", "PF", "C"];
  positions.forEach((pos) => {
    const option = document.createElement("option");
    option.value = pos;
    option.textContent = pos;
    positionFilter.appendChild(option);
  });
}

function filterAndSortPlayers(
  container,
  teamFilter,
  positionFilter,
  statSort,
  nameSearch,
) {
  const selectedTeam = teamFilter.value;
  const selectedPos = positionFilter.value;
  const selectedStat = statSort.value;
  const searchText = nameSearch.value.toLowerCase();

  let filtered = allPlayers.filter((p) => {
    const teamMatch = selectedTeam === "all" || p.team === selectedTeam;
    const posMatch = selectedPos === "all" || p.position === selectedPos;
    const nameMatch = p.playerName.toLowerCase().includes(searchText);
    return teamMatch && posMatch && nameMatch;
  });

  if (selectedStat !== "default") {
    filtered.sort((a, b) => (b[selectedStat] ?? 0) - (a[selectedStat] ?? 0));
  }

  displayPlayers(filtered, container);
}
