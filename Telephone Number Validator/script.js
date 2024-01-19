const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const check = (number) => {
  const pattern = /^1?\s?(?:\(\d{3}\)|\d{3})\s?-?(\d{3})[\s-]?\d{4}$/;
  return pattern.test(number);
};
const checkAll = () => {
  if (userInput.value.trim() === "") {
    alert("Please provide a phone number");
    return;
  }
  const isValid = check(userInput.value.trim()) ? "Valid" : "Invalid";
  resultsDiv.textContent = `${isValid} US number: ${userInput.value}`;
};
const clear = () => {
  userInput.value = "";
  resultsDiv.textContent = "";
};

checkBtn.addEventListener("click", checkAll);
clearBtn.addEventListener("click", clear);
