const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const isPalindrome = (string) => {
  return string === string.split("").reverse().join("");
};
const check = () => {
  const string = textInput.value;
  let stringClean = string
    .toLowerCase()
    .replaceAll("_", "")
    .replaceAll(",", "")
    .replaceAll(".", "")
    .replaceAll("-", "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll(" ", "");
  if (stringClean === "") {
    alert("Please input a value");
  } else {
    const not = isPalindrome(stringClean) ? "" : "not";
    result.innerText = string + " is " + not + "  a palindrome";
  }
};
checkBtn.addEventListener("click", check);
