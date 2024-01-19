const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const arabicRoman = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
};
let text = "";
const convert = (n) => {
  const maxMenorANArr = Object.keys(arabicRoman)
    .map((key) => Number(key))
    .filter((key) => n >= key);
  const maxMenorAN = Math.max(...maxMenorANArr);
  if (n === 0) {
    return "";
  } else if (n === 1) {
    return "I";
  } else {
    return arabicRoman[String(maxMenorAN)] + convert(n - maxMenorAN);
  }
};
const check = () => {
  if (input.value === "") {
    text = "Please enter a valid number";
  } else if (Number(input.value) > 3999) {
    text = "Please enter a number less than or equal to 3999";
  } else if (Number(input.value) < 1) {
    text = "Please enter a number greater than or equal to 1";
  } else {
    text = String(convert(Number(input.value)));
  }
  output.innerText = text;
};
convertBtn.addEventListener("click", check);
