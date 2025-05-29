let allPlayers = [];

const container = document.getElementById("card-container");
const teamFilter = document.getElementById("teamFilter");
const positionFilter = document.getElementById("positionFilter");
const statSort = document.getElementById("statSort");
const nameSearch = document.getElementById("nameSearch");

fetch("../data/2kRatings.json")
  .then((res) => res.json())
  .then((players) => {
    allPlayers = players;

    populateTeamFilter(allPlayers);
    populatePositionFilter(allPlayers);
    displayPlayers(allPlayers);

    // Add listeners after data loads
    teamFilter.addEventListener("change", filterAndSortPlayers);
    positionFilter.addEventListener("change", filterAndSortPlayers);
    statSort.addEventListener("change", filterAndSortPlayers);
    nameSearch.addEventListener("input", filterAndSortPlayers);
  })
  .catch((err) => {
    console.error("Failed to load player data:", err);
  });

function displayPlayers(players) {
  container.innerHTML = "";

  players.forEach((player) => {
    const card = document.createElement("div");
    card.className = "col-sm-6 col-md-4 col-lg-3";

    card.innerHTML = `
      <div class="card h-100 shadow">
        <div class="card-body">
          <h5 class="card-title">${player.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${player.team}</h6>
          <p class="card-text">
            <strong>Position:</strong> ${player.position}<br>
            <strong>Overall:</strong> ${player.overallAttribute}<br>
            <strong>3PT:</strong> ${player.threePointShot}<br>
            <strong>Speed:</strong> ${player.speed}<br>
            <strong>Stamina:</strong> ${player.stamina}<br>
            <strong>Pass IQ:</strong> ${player.passIQ}
          </p>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function populateTeamFilter(players) {
  const teams = [...new Set(players.map((p) => p.team))].sort();
  teams.forEach((team) => {
    const option = document.createElement("option");
    option.value = team;
    option.textContent = team;
    teamFilter.appendChild(option);
  });
}

function populatePositionFilter(players) {
  const positions = [...new Set(players.map((p) => p.position))].sort();
  positions.forEach((pos) => {
    const option = document.createElement("option");
    option.value = pos;
    option.textContent = pos;
    positionFilter.appendChild(option);
  });
}

function filterAndSortPlayers() {
  const selectedTeam = teamFilter.value;
  const selectedPos = positionFilter.value;
  const selectedStat = statSort.value;
  const searchText = nameSearch.value.toLowerCase();

  let filtered = allPlayers.filter((p) => {
    const teamMatch = selectedTeam === "all" || p.team === selectedTeam;
    const posMatch = selectedPos === "all" || p.position === selectedPos;
    const nameMatch = p.name.toLowerCase().includes(searchText);
    return teamMatch && posMatch && nameMatch;
  });

  if (selectedStat !== "default") {
    filtered.sort((a, b) => (b[selectedStat] ?? 0) - (a[selectedStat] ?? 0));
  }

  displayPlayers(filtered);
}
