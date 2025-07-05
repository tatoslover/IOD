// Only run if in the browser
if (typeof document !== "undefined") {
  let rollCount = 0;
  let history = [];

  // Function called by onclick
  function handleRoll() {
    const diceSelect = document.getElementById("dice-select");
    const resultDiv = document.getElementById("result");
    const faces = parseInt(diceSelect.value, 10);
    
    // Add rolling animation
    resultDiv.classList.add("rolling");
    
    setTimeout(() => {
      const result = rollDice(faces);
      resultDiv.textContent = `${result}`;
      resultDiv.classList.remove("rolling");
      
      // Add to history
      addToHistory(faces, result);
    }, 600);
  }

  // Make function globally available
  window.handleRoll = handleRoll;

  function addToHistory(faces, result) {
    const rollHistory = document.getElementById("roll-history");
    const clearHistoryButton = document.getElementById("clear-history");
    rollCount++;
    
    // Create history item
    const historyItem = document.createElement("div");
    historyItem.className = "history-item";
    historyItem.innerHTML = `
      <div class="dice-type">D${faces}</div>
      <div class="roll-value">${result}</div>
    `;
    
    // Add to beginning of history (newest first)
    rollHistory.insertBefore(historyItem, rollHistory.firstChild);
    
    // Store in array
    history.unshift({ faces, result, count: rollCount });
    
    // Limit history to 6 items for compact display
    if (history.length > 6) {
      const lastItem = rollHistory.lastElementChild;
      if (lastItem) {
        lastItem.remove();
      }
      history.pop();
    }
    
    // Show clear button if history exists
    if (history.length > 0) {
      clearHistoryButton.style.display = "block";
    }
  }

  // Function called by onclick
  function clearHistory() {
    const rollHistory = document.getElementById("roll-history");
    const clearHistoryButton = document.getElementById("clear-history");
    rollHistory.innerHTML = "";
    history = [];
    clearHistoryButton.style.display = "none";
  }

  // Make function globally available
  window.clearHistory = clearHistory;
}
