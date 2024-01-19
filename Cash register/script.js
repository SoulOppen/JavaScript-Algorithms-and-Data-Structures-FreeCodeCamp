const currencyUnits = {
  PENNY: 0.01,
  NICKEL: 0.05,
  DIME: 0.1,
  QUARTER: 0.25,
  ONE: 1,
  FIVE: 5,
  TEN: 10,
  TWENTY: 20,
  ONE_HUNDRED: 100,
};
const priceValue = document.getElementById("price-tag");
const cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
let price = 19.5;
let cid = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];
priceValue.innerText = price;
const change = (num, obj, keyFil) => {
  if (Number(num) === 0) {
    return "";
  } else {
    const min = Math.min(
      Math.floor(obj[keyFil[0]] / currencyUnits[keyFil[0]]),
      Math.floor(num / currencyUnits[keyFil[0]] / 100)
    );

    return `${keyFil[0]}: $${min * currencyUnits[keyFil[0]]} ${change(
      num - min * currencyUnits[keyFil[0]] * 100,
      obj,
      keyFil.slice(1)
    )}`;
  }
};
const execPurchaseBtn = () => {
  const cashV = Number(cash.value) * 100;
  const priceV = price * 100;
  console.log(cashV, priceV);
  if (cashV < priceV) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cashV == priceV) {
    changeDue.textContent = "No change due - customer paid with exact cash";
  } else {
    const machineCash = Object.fromEntries(cid);
    const machineCashFil = Object.keys(machineCash).filter(
      (key) => currencyUnits[key] * 100 <= cashV - priceV
    );
    const total = machineCashFil.reduce(
      (acc, curr) => acc + Number(machineCash[curr]) * 100,
      0
    );
    console.log(cashV, cashV - priceV);
    if (total >= cashV - priceV) {
      const key = Object.keys(machineCash).sort(
        (a, b) => currencyUnits[b] - currencyUnits[a]
      );
      const keyFil = key.filter(
        (key) => currencyUnits[key] * 100 <= cashV - priceV
      );

      changeDue.textContent = `Status: OPEN ${change(
        cashV - priceV,
        machineCash,
        keyFil
      )}`;
    } else {
      changeDue.textContent = `Status: INSUFFICIENT_FUNDS`;
    }
  }
};
purchaseBtn.addEventListener("click", execPurchaseBtn);
