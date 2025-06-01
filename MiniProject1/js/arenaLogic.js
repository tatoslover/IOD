function updateArenaComparison(
  playerSelect,
  statSelect,
  compareType,
  filterSelect,
  resultDiv,
) {
  const player = allPlayers.find((p) => p.playerName === playerSelect.value);
  const stat = statSelect.value;

  if (!player || player[stat] == null) {
    resultDiv.innerHTML = "<p class='text-danger'>Invalid player or stat.</p>";
    return;
  }

  let comparisonPlayer;

  if (compareType.value === "random") {
    const pool = allPlayers.filter(
      (p) => p.playerName !== player.playerName && p[stat] != null,
    );
    comparisonPlayer = getRandomFromPool(pool);
  }

  if (compareType.value === "team") {
    const pool = allPlayers.filter(
      (p) =>
        p.team === filterSelect.value &&
        p.playerName !== player.playerName &&
        p[stat] != null,
    );
    comparisonPlayer = getRandomFromPool(pool);
  }

  if (compareType.value === "position") {
    const pool = allPlayers.filter(
      (p) =>
        p.position === filterSelect.value &&
        p.playerName !== player.playerName &&
        p[stat] != null,
    );
    comparisonPlayer = getRandomFromPool(pool);
  }

  if (compareType.value === "specific") {
    comparisonPlayer = allPlayers.find(
      (p) => p.playerName === filterSelect.value,
    );
    if (!comparisonPlayer || comparisonPlayer[stat] == null) {
      resultDiv.innerHTML =
        "<p class='text-warning'>Selected comparison player has no data for this stat.</p>";
      return;
    }
  }

  if (!comparisonPlayer) {
    resultDiv.innerHTML = "<p>No comparison player available.</p>";
    return;
  }

  const playerStat = player[stat];
  const compStat = comparisonPlayer[stat];
  const diff = (playerStat - compStat).toFixed(2);

  const format = (v) =>
    stat === "tsPercent" ? (v * 100).toFixed(1) + "%" : v.toFixed(2);

  resultDiv.innerHTML = `
    <h5>${player.playerName} vs ${comparisonPlayer.playerName}</h5>
    <p>
      <strong>${statLabels[stat]}</strong><br>
      ${player.playerName}: ${format(playerStat)}<br>
      ${comparisonPlayer.playerName}: ${format(compStat)}<br>
      Difference: ${diff > 0 ? "+" : ""}${diff}
    </p>
  `;
}
