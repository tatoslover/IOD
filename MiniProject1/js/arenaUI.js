function initializeArenaTab() {
  const playerSelect = document.getElementById("playerSelect");
  const statSelect = document.getElementById("statSelect");
  const compareType = document.getElementById("compareType");
  const filterRow = document.getElementById("filterRow");
  const filterSelect = document.getElementById("filterSelect");
  const filterLabel = document.getElementById("filterLabel");
  const resultDiv = document.getElementById("arenaResult");

  Promise.all([
    fetch("../data/stats.json").then((res) => res.json()),
    fetch("../data/teams.json").then((res) => res.json()),
  ]).then(([players, teams]) => {
    allPlayers = players.map((p) => ({
      ...p,
      position: normalizePosition(p.position),
    }));
    teamNames = teams;

    populatePlayerSelect(allPlayers, playerSelect);
    populateStatSelect(statSelect);

    compareType.addEventListener("change", () => {
      const mode = compareType.value;
      filterRow.style.display = ["team", "position", "specific"].includes(mode)
        ? "block"
        : "none";

      if (mode === "team") {
        filterLabel.textContent = "Select Team:";
        populateTeamFilterList(filterSelect);
      } else if (mode === "position") {
        filterLabel.textContent = "Select Position:";
        populatePositionFilterList(filterSelect);
      } else if (mode === "specific") {
        filterLabel.textContent = "Select Player:";
        populatePlayerSelect(allPlayers, filterSelect);
      }
    });

    [playerSelect, statSelect, compareType, filterSelect].forEach((el) =>
      el.addEventListener("change", () =>
        updateArenaComparison(
          playerSelect,
          statSelect,
          compareType,
          filterSelect,
          resultDiv,
        ),
      ),
    );

    updateArenaComparison(
      playerSelect,
      statSelect,
      compareType,
      filterSelect,
      resultDiv,
    );
  });
}

function populatePlayerSelect(players, select) {
  select.innerHTML = "";
  players
    .sort((a, b) =>
      getLastName(a.playerName).localeCompare(getLastName(b.playerName)),
    )
    .forEach((player) => {
      const option = document.createElement("option");
      option.value = player.playerName;
      option.textContent = player.playerName;
      select.appendChild(option);
    });
}

function populateStatSelect(select) {
  select.innerHTML = "";
  Object.keys(statLabels).forEach((stat) => {
    const option = document.createElement("option");
    option.value = stat;
    option.textContent = statLabels[stat];
    select.appendChild(option);
  });
}

function populateTeamFilterList(select) {
  select.innerHTML = "";
  Object.entries(teamNames).forEach(([key, val]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = val;
    select.appendChild(option);
  });
}

function populatePositionFilterList(select) {
  select.innerHTML = "";
  ["PG", "SG", "SF", "PF", "C"].forEach((pos) => {
    const option = document.createElement("option");
    option.value = pos;
    option.textContent = pos;
    select.appendChild(option);
  });
}
