let display = document.getElementById("display");
let memory = 0;

// Append value to display
function appendValue(value) {
  display.value += value;
}

// Clear entire display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    // Replace % with /100 for percentage calculation
    let expression = display.value.replace(/%/g, "/100");
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}

// Square root function
function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Error";
  }
}

// Square function
function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch {
    display.value = "Error";
  }
}

// Memory functions
function memoryAdd() {
  memory += parseFloat(display.value) || 0;
}
function memorySubtract() {
  memory -= parseFloat(display.value) || 0;
}
function memoryRecall() {
  display.value += memory;
}
function memoryClear() {
  memory = 0;
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
