function changeColumn1() {
  const column = document.getElementById("column1");
  const heading = document.getElementById("heading1");
  const input = document.getElementById("input1");

  column.style.backgroundColor = "lightblue";

  if (input.value.trim() !== "") {
    heading.innerText = input.value;
  } else {
    heading.innerText = "Changed!";
  }
}

function changeColumn2() {
  const column = document.getElementById("column2");
  const heading = document.getElementById("heading2");
  const input = document.getElementById("input2");

  column.style.backgroundColor = "lightcoral";

  if (input.value.trim() !== "") {
    heading.innerText = input.value;
  } else {
    heading.innerText = "Updated!";
  }
}
